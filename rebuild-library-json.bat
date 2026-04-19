@echo off
setlocal
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File "%~dp0tools\build-library-manifest.ps1"
if errorlevel 1 (
  echo.
  echo Manifest rebuild failed.
  pause
  exit /b 1
)
echo.
echo Manifest rebuild finished.
pause
