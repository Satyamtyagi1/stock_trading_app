# Stock Trading App - Setup Instructions

## Quick Start Guide

### Prerequisites
- Node.js v16+ installed
- MongoDB running locally or connection string ready
- npm or yarn package manager

### Step 1: Backend Setup

```bash
cd backend
npm install
```

Edit `.env` file:
```
MONGO_URI=mongodb://localhost:27017/stock-trading
JWT_SECRET=your_super_secret_key_change_this_in_production
PORT=5000
NODE_ENV=development
```

Start the backend:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

**Optional: Seed sample stocks**
```bash
node seed.js
```

### Step 2: Frontend Setup

```bash
cd frontend
npm install
```

The `.env` is already configured to point to `http://localhost:5000/api`

Start the frontend:
```bash
npm start
```

The frontend will open at `http://localhost:3000`

## Testing the Application

### 1. Create an Account
- Go to http://localhost:3000/register
- Fill in name, email, and password
- You'll automatically receive $100,000 virtual balance

### 2. Login
- Use your credentials from registration
- You'll be taken to the dashboard

### 3. Add Sample Stocks (Admin Only)
Use Postman or curl to add stocks:

**POST** `http://localhost:5000/api/stocks`
Headers: 
- Content-Type: application/json
- Authorization: Bearer {YOUR_JWT_TOKEN}

Body:
```json
{
  "symbol": "AAPL",
  "name": "Apple Inc.",
  "currentPrice": 150.25,
  "marketCap": "2.5T",
  "description": "Apple technology company"
}
```

Or use the seed.js script to auto-populate stocks.

### 4. Trade Stocks
- Search for stocks using the search bar
- Click on a stock to view details
- Enter quantity and click "Buy Stock"
- Your portfolio will update in real-time

### 5. Manage Portfolio
- View all your holdings on the left sidebar
- See average buy price, quantity, and total investment
- Click "Sell" to sell stocks

### 6. View Transaction History
- API endpoint: `GET /api/trades/history`
- Shows all buy/sell transactions with timestamps

## API Documentation

All requests (except auth) require:
```
Authorization: Bearer {jwt_token}
```

### Authentication

**Register**
```
POST /api/auth/register
Body: { name, email, password }
Returns: { token, user }
```

**Login**
```
POST /api/auth/login
Body: { email, password }
Returns: { token, user }
```

### Stocks

**Get All Stocks**
```
GET /api/stocks
```

**Search Stocks**
```
GET /api/stocks/search?query=AAPL
```

**Create Stock (Admin)**
```
POST /api/stocks
Body: { symbol, name, currentPrice, marketCap, description }
```

### Trading

**Buy Stock**
```
POST /api/trades/buy
Body: { stockId, quantity, price }
```

**Sell Stock**
```
POST /api/trades/sell
Body: { stockId, quantity, price }
```

**Get Portfolio**
```
GET /api/trades/portfolio
Returns: All holdings with details
```

**Transaction History**
```
GET /api/trades/history
Returns: All transactions with timestamps
```

## Troubleshooting

**MongoDB Connection Error**
- Ensure MongoDB is running: `mongod`
- Check MONGO_URI in .env matches your setup

**Port 5000 Already in Use**
- Change PORT in backend/.env
- Update REACT_APP_API_URL in frontend/.env

**CORS Errors**
- Backend CORS is configured for all origins
- Check that both servers are running

**Token Expired**
- Re-login to get a new token
- JWT tokens expire in 7 days

**Can't Find Stocks**
- Run seed.js in backend or manually add via API
- Ensure MongoDB is connected

## Development Tips

- Use Redux for state management (optional enhancement)
- Add real-time updates with Socket.io
- Implement WebSocket for live stock prices
- Add database authentication
- Use environment variables for sensitive data
- Add rate limiting for API endpoints

## Production Deployment

1. Change JWT_SECRET in .env to a strong random string
2. Use MongoDB Atlas instead of local MongoDB
3. Deploy backend to Heroku/AWS/Azure
4. Deploy frontend to Vercel/Netlify
5. Update API URLs in frontend .env
6. Enable HTTPS in production

---

Enjoy your stock trading app! Happy trading! 📈
