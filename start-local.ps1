$ErrorActionPreference = 'Stop'

$radarRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 4173
$url = "http://127.0.0.1:$port/"
$refreshScript = Join-Path $radarRoot 'refresh-news.ps1'
$browserCandidates = @(
  'C:\Program Files\Google\Chrome\Application\chrome.exe',
  'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
)
$pythonCandidates = @(
  'C:\Users\throb\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe',
  'C:\Users\throb\AppData\Local\Programs\Python\Python312\python.exe',
  'C:\Python312\python.exe'
)

if (Test-Path -LiteralPath $refreshScript) {
  & $refreshScript | Write-Host
}

$listener = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1
if (-not $listener) {
  $python = $pythonCandidates | Where-Object { Test-Path $_ } | Select-Object -First 1
  if (-not $python) {
    throw '未找到 Python 运行时。请安装 Python 3，或把 python.exe 路径补充到本脚本的 $pythonCandidates。'
  }
  Start-Process -WindowStyle Hidden -FilePath $python -ArgumentList @('-m', 'http.server', "$port", '--directory', $radarRoot) -WorkingDirectory $radarRoot
  Start-Sleep -Milliseconds 700
}

$listener = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1
if (-not $listener) {
  throw "RADARLAB 服务未能监听端口 $port。请检查 Python 运行时或端口占用。"
}

$browser = $browserCandidates | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
if ($browser) {
  try {
    Start-Process -FilePath $browser -ArgumentList @('--new-tab', $url) -ErrorAction Stop | Out-Null
  } catch {
    Write-Warning "浏览器未能自动打开，请手动访问：$url"
  }
} else {
  Write-Warning "未找到 Chrome，请手动访问：$url"
}
Write-Host "RADARLAB 已启动：$url"
