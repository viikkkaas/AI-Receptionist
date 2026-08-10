# Claude SEO runtime wrapper (PowerShell). Forwards to scripts\runtime.py.
$ErrorActionPreference = "Stop"
python (Join-Path $PSScriptRoot ".claude-seo\scripts\runtime.py") @args
exit $LASTEXITCODE
