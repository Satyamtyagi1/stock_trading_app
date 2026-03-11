# 🚀 Stock Trading App - Complete Project Guide

## Project Overview

A full-stack **MERN** (MongoDB, Express, React, Node.js) stock trading simulation platform with:
- ✅ User authentication with JWT
- ✅ Virtual stock trading with $100K starting balance
- ✅ Real-time portfolio tracking
- ✅ Transaction history
- ✅ Responsive design
- ✅ Admin stock management

---

## 📁 Project Structure

```
stock trading app/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── stockController.js
│   │   ├── tradeController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── stock.js
│   │   ├── portfolio.js
│   │   ├── transaction.js
│   │   └── watchlist.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── stockRoutes.js
│   │   ├── tradeRoute.js
│   │   └── userRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── pages/
│   │   │   ├── login.js
│   │   │   ├── register.js
│   │   │   └── dasboard.js
│   │   ├── components/
│   │   │   └── [Reusable components]
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   ├── auth.css
│   │   │   ├── dashboard.css
│   │   │   └── index.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   ├── .env
│
├── docker-compose.yml
├── .gitignore
├── README.md
├── SETUP.md
├── TESTING.md
├── ENHANCEMENTS.md
└── Stock_Trading_API.postman_collection.json
```

---

## 🚀 Quick Start

### Option 1: Manual Setup

#### Backend Setup
```bash
cd backend
npm install
# Edit .env with MongoDB URI
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Option 2: Docker Setup

```bash
# Start MongoDB with Docker
docker-compose up -d

# Update backend/.env:
# MONGO_URI=mongodb://localhost:27017/stock-trading

# In backend folder
npm run dev

# In frontend folder
npm start
```

---

## 📊 Database Schema

### Users Collection
```json
{
  "_id": ObjectId,
  "name": String,
  "email": String,
  "password": String (hashed),
  "role": String (user/admin),
  "balance": Number,
  "createdAt": Date
}
```

### Stocks Collection
```json
{
  "_id": ObjectId,
  "symbol": String,
  "name": String,
  "currentPrice": Number,
  "previousClose": Number,
  "marketCap": String,
  "description": String,
  "updatedAt": Date
}
```

### Portfolio Collection
```json
{
  "_id": ObjectId,
  "userId": ObjectId,
  "holdings": [{
    "stockId": ObjectId,
    "symbol": String,
    "quantity": Number,
    "averageBuyPrice": Number,
    "totalInvested": Number
  }],
  "totalBalance": Number,
  "updatedAt": Date
}
```

### Transactions Collection
```json
{
  "_id": ObjectId,
  "userId": ObjectId,
  "stockId": ObjectId,
  "symbol": String,
  "type": String (buy/sell),
  "quantity": Number,
  "price": Number,
  "totalAmount": Number,
  "transactionDate": Date
}
```

---

## 🔌 API Endpoints Reference

### Auth Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |

### Stock Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/stocks` | Get all stocks |
| GET | `/api/stocks/:id` | Get single stock |
| GET | `/api/stocks/search?query=...` | Search stocks |
| POST | `/api/stocks` | Create stock (Admin) |
| PUT | `/api/stocks/:id` | Update stock price (Admin) |

### Trading Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/trades/buy` | Buy stock |
| POST | `/api/trades/sell` | Sell stock |
| GET | `/api/trades/portfolio` | Get user portfolio |
| GET | `/api/trades/history` | Get transaction history |

### User Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/profile` | Get user profile |
| POST | `/api/users/balance` | Update balance |

---

## 🔐 Authentication Flow

1. **Register**: User provides name, email, password
   - Password hashed with bcryptjs
   - User created with $100K balance
   - JWT token issued

2. **Login**: User provides email, password
   - Password verified
   - JWT token issued
   - Token stored in localStorage

3. **Protected Routes**: All trade/portfolio endpoints
   - Token validated via middleware
   - userId extracted from token
   - Only user's own data accessible

---

## 💰 Trading Features

### Buy Stock
```
POST /api/trades/buy
{
  "stockId": "mongoid",
  "quantity": 10,
  "price": 150.25
}
```
- Checks balance sufficiency
- Updates user balance
- Creates portfolio holding
- Logs transaction
- Returns updated portfolio

### Sell Stock
```
POST /api/trades/sell
{
  "stockId": "mongoid",
  "quantity": 5,
  "price": 150.25
}
```
- Validates stock ownership
- Updates holdings or removes
- Adds proceeds to balance
- Logs transaction
- Returns updated portfolio

---

## 🎨 Frontend Features

### Authentication Pages
- **Register**: Input name, email, password
- **Login**: Email and password verification

### Dashboard
- **Stock Grid**: Browse all available stocks
- **Search**: Filter stocks by symbol or name
- **Portfolio**: View current holdings with metrics
- **Trade Modal**: Buy stocks with real-time calculation
- **Sell Stocks**: Sell from portfolio with quantity input
- **Transaction History**: View all past trades
- **User Profile**: See name, email, balance

---

## 🛠️ Development Tools

### Required
- Node.js v16+
- MongoDB
- npm or yarn

### Recommended
- Postman (API testing)
- MongoDB Compass (DB visualization)
- VS Code (code editor)

### Optional
- Docker & Docker Compose
- Redux DevTools
- React Developer Tools

---

## 🚀 Deployment

### Backend (Heroku)
```bash
cd backend
heroku login
heroku create stock-trading-api
heroku config:set MONGO_URI=mongodb+srv://...
git push heroku main
```

### Frontend (Vercel)
```bash
cd frontend
npm install -g vercel
vercel
# Update REACT_APP_API_URL to Heroku backend
```

---

## 📝 Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb://localhost:27017/stock-trading
JWT_SECRET=your_super_secret_key_here
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 🧪 Testing

### Manual Testing
- See [TESTING.md](TESTING.md) for detailed test cases
- Use Postman collection provided
- Test all CRUD operations

### API Testing
Import `Stock_Trading_API.postman_collection.json` to Postman

### Unit Testing (Future)
```bash
npm test
```

---

## 🔍 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 5000 in use | Change PORT in .env |
| MongoDB not found | Start MongoDB / Use docker-compose |
| CORS errors | Check backend CORS config |
| Stocks not appearing | Run seed.js or add via API |
| Can't login | Check MongoDB connection |

---

## 📚 Documentation Files

- `README.md` - Project overview
- `SETUP.md` - Installation instructions
- `TESTING.md` - Testing guide with 50+ test cases
- `ENHANCEMENTS.md` - Future features

---

## ✨ Key Features Implemented

✅ JWT Authentication
✅ Password Encryption (bcryptjs)
✅ CRUD Operations
✅ Role-Based Access Control
✅ Portfolio Management
✅ Transaction Tracking
✅ Search Functionality
✅ Responsive Design
✅ Error Handling
✅ Input Validation

---

## 🎯 Next Steps

1. Install dependencies in both folders
2. Start MongoDB
3. Initialize sample stocks (seed.js)
4. Start backend server
5. Start frontend server
6. Register a new user
7. Start trading!

---

## 📊 Statistics

- **Total Files**: 40+
- **Backend Routes**: 15+
- **Frontend Pages**: 3
- **Models**: 5
- **Controllers**: 4
- **API Endpoints**: 12+
- **Lines of Code**: 3000+

---

## 💬 Support & Questions

For issues or questions:
1. Check documentation files
2. Review error messages
3. Check MongoDB connection
4. Verify environment variables
5. Check console/terminal logs

---

**Happy Trading! 📈**

Built with ❤️ using MERN Stack

