@echo off
REM Stock Trading App - Setup Script (Windows)
REM Run this script to install and start the app

echo.
echo ========================================
echo Stock Trading App Setup Script
echo ========================================
echo.

REM Check Node.js
where node >nul 2>nul
if errorlevel 1 (
    echo Error: Node.js is not installed
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo Node.js version: %NODE_VERSION%

for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo npm version: %NPM_VERSION%
echo.

REM Install backend
echo Installing Backend Dependencies...
cd backend
call npm install
echo Backend dependencies installed
cd ..
echo.

REM Install frontend
echo Installing Frontend Dependencies...
cd frontend
call npm install
echo Frontend dependencies installed
cd ..
echo.

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Next Steps:
echo 1. Start MongoDB: mongod (in new terminal)
echo 2. Start Backend: cd backend ^&^& npm run dev
echo 3. Start Frontend: cd frontend ^&^& npm start
echo 4. Open http://localhost:3000 in browser
echo.
echo Happy Trading!
echo.
pause
