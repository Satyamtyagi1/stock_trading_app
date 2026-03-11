# 🎯 GETTING STARTED IN 5 MINUTES

## Step 1: Install Dependencies (2 min)

### Terminal Window 1
```bash
cd backend
npm install
```

### Terminal Window 2
```bash
cd frontend
npm install
```

## Step 2: Start MongoDB (1 min)

### Option A: Docker (Easiest)
```bash
docker-compose up -d
```

### Option B: Local MongoDB
```bash
# macOS
brew services start mongodb-community

# Windows
# Just run mongod.exe from MongoDB installation
```

## Step 3: Start Servers (2 min)

### Terminal 1 (Backend)
```bash
cd backend
npm run dev
```
Wait for: `Server running on port 5000`

### Terminal 2 (Frontend)
```bash
cd frontend
npm start
```
Wait for: App opens automatically in browser

---

## 🎮 Try It Out!

### 1. Register (30 seconds)
1. Enter name: `Test User`
2. Enter email: `test@example.com`
3. Enter password: `password123`
4. Click **Register**
5. ✅ You now have **$100,000** virtual cash!

### 2. Browse Stocks (1 minute)
1. You're on Dashboard
2. Scroll down to see **Stock Grid**
3. Click any stock to select it
4. See the price and details

### 3. Buy Your First Stock (1 minute)
1. Click on "AAPL" stock
2. A modal appears
3. Enter quantity: `5`
4. Click **Buy Stock**
5. ✅ Success! Check your portfolio

### 4. Check Your Portfolio (30 seconds)
1. Look at left sidebar
2. See your holding:
   - Symbol: AAPL
   - Quantity: 5
   - Average Price: ~$150.25
   - Total Invested: ~$751.25

### 5. View Your Update Balance
1. Top right shows your new balance
2. Should be roughly: $100,000 - (5 × $150.25) = $99,248.75

### 6. Sell a Stock (1 minute)
1. In portfolio, click **Sell** on AAPL
2. Enter quantity: `2`
3. ✅ 3 shares remain in portfolio
4. Balance increases

### 7. See Transaction History
1. Scroll down the page
2. See all your buy/sell transactions
3. With timestamps and prices

---

## ✅ Success Indicators

You'll know it's working when:

✅ Backend logs: `Server running on port 5000`
✅ Frontend opens automatically
✅ Can see login page initially
✅ After register, can see dashboard
✅ Stocks appear in grid
✅ Can buy and sell stocks
✅ Balance updates correctly
✅ Portfolio shows holdings

---

## 🐛 Quick Fixes

### Port 5000 Already in Use
```bash
# Any terminal
lsof -i :5000           # macOS/Linux
netstat -ano | grep 5000  # Windows
```

### MongoDB Won't Connect
```bash
# Check if running
mongosh

# Or use Docker
docker-compose up -d
```

### Blank Page on Frontend
1. Press `Ctrl+Shift+R` (hard refresh)
2. Check browser console (F12)
3. Restart both servers

### Stocks Not Showing
```bash
# In backend folder
node seed.js
```

---

## 📁 File Locations for Reference

```
backend/
├── server.js              ← Start backend here
├── .env                   ← Edit MongoDB URI here
└── seed.js               ← Initialize stocks

frontend/
├── src/index.js          ← React entry point
├── .env                  ← API URL config
└── pages/
    ├── login.js
    ├── register.js
    └── dasboard.js       ← Main app here
```

---

## 🔑 Key Endpoints to Know

```
POST   /api/auth/register     → Create account
POST   /api/auth/login        → Login
GET    /api/stocks            → Get all stocks
POST   /api/trades/buy        → Buy stock
POST   /api/trades/sell       → Sell stock
GET    /api/trades/portfolio  → Your holdings
GET    /api/trades/history    → Your trades
```

---

## 💡 Pro Tips

1. **Use Postman** - Import the provided collection to test API directly
2. **Check Console** - F12 in browser for frontend errors
3. **Check Terminal** - See backend errors there
4. **Sample Data** - Run `node seed.js` to get 7 stocks
5. **MongoDB Compass** - Visualize data in MongoDB

---

## 🆘 Need Help?

1. Check `SETUP.md` for detailed setup
2. Check `TESTING.md` for test cases
3. Check `QUICK_REFERENCE.md` for commands
4. Check `COMPLETE_GUIDE.md` for architecture

---

## 🎉 You're Done!

Everything is set up. Now enjoy your stock trading app!

**Happy Trading! 📈**

