$ErrorActionPreference = 'Stop'

$radarRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$refreshScript = Join-Path $radarRoot 'refresh-news.ps1'
$taskName = 'RADARLAB Daily News Refresh'

if (-not (Test-Path -LiteralPath $refreshScript)) {
  throw "刷新脚本不存在：$refreshScript"
}

$taskAction = New-ScheduledTaskAction `
  -Execute 'powershell.exe' `
  -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$refreshScript`""
$taskTrigger = New-ScheduledTaskTrigger -Daily -At ([datetime]::Today.AddHours(9))
$taskSettings = New-ScheduledTaskSettingsSet `
  -StartWhenAvailable `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries `
  -ExecutionTimeLimit (New-TimeSpan -Minutes 10)
$currentUser = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name
$taskPrincipal = New-ScheduledTaskPrincipal -UserId $currentUser -LogonType Interactive -RunLevel Limited

Register-ScheduledTask `
  -TaskName $taskName `
  -Action $taskAction `
  -Trigger $taskTrigger `
  -Settings $taskSettings `
  -Principal $taskPrincipal `
  -Description '每天 09:00 刷新 RADARLAB 科研新闻快照并写入日志。' `
  -Force | Out-Null

Write-Output "已注册：$taskName（每日 09:00，本机时区）"
