[CmdletBinding()]
param(
  [string]$FeedPath,
  [string]$RemoteFeedUrl = $env:RADARLAB_NEWS_API_URL
)

$ErrorActionPreference = 'Stop'
$radarRoot = $PSScriptRoot
if ([string]::IsNullOrWhiteSpace($radarRoot)) {
  $radarRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
}
if ([string]::IsNullOrWhiteSpace($FeedPath)) {
  $FeedPath = Join-Path $radarRoot 'news-feed.json'
}
$apiPath = Join-Path $radarRoot 'api\research-news.json'
$logDirectory = Join-Path $radarRoot 'logs'
$logPath = Join-Path $logDirectory 'news-refresh.log'
$allowedHosts = @(
  'nature.com', 'science.org', 'anthropic.com', 'reuters.com',
  'github.com', 'arxiv.org', 'biorxiv.org', 'cell.com'
)
New-Item -ItemType Directory -Path $logDirectory -Force | Out-Null
New-Item -ItemType Directory -Path (Split-Path -Parent $apiPath) -Force | Out-Null

function Write-RefreshLog {
  param(
    [string]$Status,
    [string]$Source,
    [int]$ItemCount,
    [string]$Message
  )

  $safeMessage = ($Message -replace '[\r\n]+', ' ' -replace '\s+', ' ').Trim()
  $line = "{0} status={1} source={2} items={3} message={4}" -f (Get-Date -Format 'yyyy-MM-ddTHH:mm:sszzz'), $Status, $Source, $ItemCount, $safeMessage
  Add-Content -LiteralPath $logPath -Value $line -Encoding UTF8
}

function Read-FeedPayload {
  param([string]$Path)

  if (-not (Test-Path -LiteralPath $Path)) {
    throw "Feed file not found: $Path"
  }
  $utf8 = [System.Text.UTF8Encoding]::new($false)
  $payload = [System.IO.File]::ReadAllText($Path, $utf8) | ConvertFrom-Json
  if ($payload -is [System.Array]) {
    return [pscustomobject]@{ items = @($payload) }
  }
  return $payload
}

function Get-FeedItems {
  param([object]$Payload)

  $items = @($Payload.items)
  if ($items.Count -eq 0) {
    throw 'Feed has no items.'
  }

  foreach ($item in $items) {
    if ([string]::IsNullOrWhiteSpace([string]$item.title)) {
      throw 'Feed item is missing title.'
    }
    if ([string]::IsNullOrWhiteSpace([string]$item.url)) {
      throw "Feed item is missing url: $($item.title)"
    }
    $uri = $null
    if (-not [uri]::TryCreate([string]$item.url, [System.UriKind]::Absolute, [ref]$uri) -or $uri.Scheme -ne 'https') {
      throw "Feed item must use HTTPS: $($item.url)"
    }
    $sourceHost = $uri.Host.ToLowerInvariant()
    $hostAllowed = $allowedHosts | Where-Object { $sourceHost -eq $_ -or $sourceHost.EndsWith(".$_") }
    if (-not $hostAllowed) {
      throw "Feed source host is not allowlisted: $sourceHost"
    }
  }
  return $items
}

function Get-ItemFingerprint {
  param([object[]]$Items)

  return (($Items | ConvertTo-Json -Depth 12 -Compress) -replace '\s+', '')
}

$now = Get-Date
$source = 'local'
$message = 'Generated daily snapshot from the project feed.'
$payload = $null
$remoteError = $null

if (-not [string]::IsNullOrWhiteSpace($RemoteFeedUrl)) {
  try {
    $response = Invoke-WebRequest -Uri $RemoteFeedUrl -UseBasicParsing -TimeoutSec 30 -Headers @{ Accept = 'application/json' }
    $remotePayload = $response.Content | ConvertFrom-Json
    if ($remotePayload -is [System.Array]) {
      $remotePayload = [pscustomobject]@{ items = @($remotePayload) }
    }
    [void](Get-FeedItems -Payload $remotePayload)
    $payload = $remotePayload
    $source = 'remote'
    $message = 'Remote news feed was read successfully.'
  } catch {
    $remoteError = $_.Exception.Message
    $message = "Remote feed failed; kept local feed: $remoteError"
  }
}

if (-not $payload) {
  $payload = Read-FeedPayload -Path $FeedPath
}

$items = @(Get-FeedItems -Payload $payload)
$previousItems = @()
if (Test-Path -LiteralPath $apiPath) {
  try {
    $previousPayload = Read-FeedPayload -Path $apiPath
    $previousItems = @(Get-FeedItems -Payload $previousPayload)
  } catch {
    $previousItems = @()
  }
}

$itemsChanged = (Get-ItemFingerprint -Items $items) -ne (Get-ItemFingerprint -Items $previousItems)
$output = [ordered]@{}
if ($payload -and $payload.PSObject) {
  foreach ($property in $payload.PSObject.Properties) {
    $output[$property.Name] = $property.Value
  }
}
$output['schedule'] = if ($output.Contains('schedule')) { $output['schedule'] } else { '09:00 Asia/Singapore' }
$output['checkedAt'] = $now.ToString('yyyy-MM-ddTHH:mm:sszzz')
$output['refreshSource'] = $source
$output['items'] = $items

$temporaryPath = "$apiPath.tmp"
$json = $output | ConvertTo-Json -Depth 12
[System.IO.File]::WriteAllText($temporaryPath, $json, [System.Text.UTF8Encoding]::new($false))
Move-Item -LiteralPath $temporaryPath -Destination $apiPath -Force

$keywordHits = @($items | Where-Object { @($_.keywords).Count -gt 0 }).Count
$status = if ($itemsChanged) { 'updated' } else { 'unchanged' }
Write-RefreshLog -Status $status -Source $source -ItemCount $items.Count -Message "$message Keyword-bearing items: $keywordHits."

Write-Output ("RADARLAB news snapshot {0}: {1} items, source={2}, checkedAt={3}" -f $status, $items.Count, $source, $output['checkedAt'])
