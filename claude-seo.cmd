@echo off
rem Claude SEO runtime wrapper (Windows). Forwards to scripts\runtime.py.
setlocal
set "ROOT=%~dp0"
python "%ROOT%.claude-seo\scripts\runtime.py" %*
exit /b %ERRORLEVEL%
