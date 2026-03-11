#!/bin/bash

# Stock Trading App - Setup Script (macOS/Linux)
# Run this script to install and start the app

set -e

echo "🚀 Stock Trading App Setup Script"
echo "=================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    echo "Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install backend
echo "📦 Installing Backend Dependencies..."
cd backend
npm install
echo "✅ Backend dependencies installed"
cd ..
echo ""

# Install frontend
echo "📦 Installing Frontend Dependencies..."
cd frontend
npm install
echo "✅ Frontend dependencies installed"
cd ..
echo ""

# Check MongoDB
echo "🗄️  Checking MongoDB..."
if command -v mongod &> /dev/null; then
    echo "✅ MongoDB found locally"
else
    echo "⚠️  MongoDB not found locally"
    echo "   Using: docker-compose up -d"
    docker-compose up -d
fi
echo ""

echo "✅ Installation Complete!"
echo ""
echo "📝 Next Steps:"
echo "1. Start MongoDB (if not running): mongod"
echo "2. In Terminal 1, run: cd backend && npm run dev"
echo "3. In Terminal 2, run: cd frontend && npm start"
echo "4. Open http://localhost:3000 in your browser"
echo ""
echo "🎉 Happy Trading!"
