# 🎓 QUICK REFERENCE GUIDE

## 5-Minute Startup

### Terminal 1 - Backend
```bash
cd backend
npm install
npm run dev
```
✅ Server runs on http://localhost:5000

### Terminal 2 - Frontend
```bash
cd frontend
npm install
npm start
```
✅ App opens on http://localhost:3000

### Terminal 3 - MongoDB (if not running)
```bash
# macOS
brew services start mongodb-community

# Windows (if installed)
mongod

# Or use Docker
docker-compose up -d
```

---

## Common Commands

### Backend
```bash
npm install              # Install dependencies
npm run dev             # Start with nodemon
npm start               # Start normally
node seed.js            # Initialize sample stocks
```

### Frontend
```bash
npm install             # Install dependencies
npm start              # Start dev server
npm build              # Create production build
npm test               # Run tests
```

---

## User Flow

1. **Register** → New account with $100K
2. **Login** → JWT token stored locally
3. **Browse** → View all stocks
4. **Search** → Find specific stocks
5. **Buy** → Purchase with virtual cash
6. **View Portfolio** → Track holdings
7. **Sell** → Exit positions
8. **History** → Review transactions

---

## Test Credentials (After Registration)

```
Email: testuser@example.com
Password: password123
Balance: $100,000
```

---

## File Locations Cheat Sheet

| File | Path |
|------|------|
| Backend Entry | `/backend/server.js` |
| Frontend Entry | `/frontend/src/index.js` |
| Database Models | `/backend/models/` |
| API Routes | `/backend/routes/` |
| React Pages | `/frontend/src/pages/` |
| Styles | `/frontend/src/styles/` |
| API Calls | `/frontend/src/services/api.js` |

---

## API Endpoints Cheat Sheet

```
POST   /api/auth/register          Register user
POST   /api/auth/login             Login user
GET    /api/stocks                 List all stocks
GET    /api/stocks/search?q=AAPL   Search stocks
POST   /api/trades/buy             Buy stock
POST   /api/trades/sell            Sell stock
GET    /api/trades/portfolio       View portfolio
GET    /api/trades/history         Transaction history
```

---

## Error Messages Reference

| Error | Cause | Fix |
|-------|-------|-----|
| ECONNREFUSED | MongoDB not running | Start MongoDB |
| Port 5000 in use | Another app using port | Change PORT in .env |
| CORS error | Frontend/Backend mismatch | Check .env URLs |
| Invalid token | Token expired/invalid | Re-login |
| Insufficient balance | Not enough cash to buy | Sell other stocks |

---

## Frontend Pages

### `/login`
- Email input
- Password input
- Submit button
- Link to register

### `/register`
- Name input
- Email input
- Password input
- Submit button
- Link to login

### `/dashboard`
- Search bar
- Stock grid (clickable)
- Portfolio sidebar
- Buy modal
- Balance display
- Logout button

---

## Database Collections

```
Users       → User accounts
Stocks      → All tradeable stocks
Portfolios  → User holdings
Transactions → Trade history
Watchlists  → Saved stocks (optional)
```

---

## Environment Setup

### Backend .env Required
```
MONGO_URI=
JWT_SECRET=
PORT=5000
NODE_ENV=development
```

### Frontend .env Required
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## Postman Quick Test

1. Import `Stock_Trading_API.postman_collection.json`
2. Register user and copy token
3. Add token to Bearer field
4. Test buy/sell endpoints
5. Check MongoDB for records

---

## Performance Tips

- Clear browser cache: `Ctrl+Shift+Del`
- Clear localStorage: `localStorage.clear()`
- Restart both servers if issues
- Check MongoDB connection
- Verify .env variables

---

## Must-Know Commands

```bash
# MongoDB
mongosh                         # Connect to MongoDB
show dbs                        # List databases
use stock-trading              # Switch database
db.users.find()                # View users
db.transactions.find()         # View transactions

# Git (Version Control)
git init                       # Initialize repo
git add .                      # Stage files
git commit -m "msg"            # Commit changes
git status                     # Check status

# npm
npm list                       # List packages
npm update                     # Update packages
npm prune                      # Remove unused
```

---

## Debugging Steps

1. Check terminal for errors
2. Open browser console (F12)
3. Check Network tab for failed requests
4. Verify all environment variables
5. Check MongoDB is running
6. Clear cache and refresh
7. Restart both servers

---

## Feature Checklist

- [ ] Register works
- [ ] Login works
- [ ] Stocks load
- [ ] Search filters
- [ ] Buy works
- [ ] Portfolio updates
- [ ] Sell works
- [ ] Balance correct
- [ ] History shows
- [ ] Logout clears token

---

## Final Checklist Before "Done"

✅ Backend server running
✅ Frontend server running
✅ MongoDB connected
✅ Can register new user
✅ Can login
✅ Can see stocks
✅ Can buy stocks
✅ Can view portfolio
✅ Can sell stocks
✅ Can see history

**You're all set!** 🎉

