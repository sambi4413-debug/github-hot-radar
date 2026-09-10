$ErrorActionPreference = 'Stop'

$radarRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$refreshScript = Join-Path $radarRoot 'refresh-news.ps1'
$feedPath = Join-Path $radarRoot 'news-feed.json'
$apiPath = Join-Path $radarRoot 'api\research-news.json'
$logPath = Join-Path $radarRoot 'logs\news-refresh.log'
$taskName = 'RADARLAB Daily News Refresh'

if (-not (Test-Path -LiteralPath $refreshScript)) {
  throw "刷新脚本不存在：$refreshScript"
}
if (-not (Test-Path -LiteralPath $feedPath)) {
  throw "新闻快照不存在：$feedPath"
}
if (-not (Test-Path -LiteralPath $apiPath)) {
  throw "自动快照不存在：$apiPath"
}

$feed = Get-Content -Raw -LiteralPath $feedPath | ConvertFrom-Json
if (-not $feed.updatedAt) {
  throw '新闻快照缺少 updatedAt。'
}
if (-not $feed.schedule -or $feed.schedule -notmatch '09:00') {
  throw '新闻快照未声明每日 09:00 更新。'
}

$task = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
if (-not $task) {
  throw "Windows 计划任务不存在：$taskName"
}

$trigger = $task.Triggers | Where-Object {
  $_.DaysInterval -eq 1 -and ([datetime]$_.StartBoundary).TimeOfDay -eq [TimeSpan]::FromHours(9)
} | Select-Object -First 1
if (-not $trigger) {
  throw "计划任务未设置为每日 09:00：$taskName"
}

if (-not (Test-Path -LiteralPath $logPath)) {
  throw "刷新日志不存在：$logPath"
}

$lastLog = Get-Content -LiteralPath $logPath -Tail 1
if ($lastLog -notmatch 'status=(updated|unchanged|failed)') {
  throw '刷新日志最后一行缺少可识别的 status。'
}

Write-Output "PASS: $taskName 已配置每日 09:00，新闻快照和刷新日志均存在。"
