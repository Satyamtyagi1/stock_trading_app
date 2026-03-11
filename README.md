# Stock Trading App - MERN Stack

A full-stack stock trading simulation platform built with MongoDB, Express.js, React.js, and Node.js.

## Features

✅ User Authentication (Register/Login with JWT)
✅ Stock Listing & Search
✅ Buy/Sell Virtual Stocks
✅ Portfolio Management with Holdings
✅ Transaction History
✅ Real-time Balance Updates
✅ Role-Based Access Control (User/Admin)
✅ Responsive Design

## Project Structure

```
stock trading app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── services/
    │   ├── styles/
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── .env
```

## Installation & Setup

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
npm install
```

2. Configure `.env` file with:
```
MONGO_URI=mongodb://localhost:27017/stock-trading
JWT_SECRET=your_secret_key_here
PORT=5000
```

3. Start MongoDB and run:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
npm install
```

2. Start the React app:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Stocks
- `GET /api/stocks` - Get all stocks
- `GET /api/stocks/:id` - Get stock details
- `GET /api/stocks/search?query=...` - Search stocks
- `POST /api/stocks` - Create stock (Admin)
- `PUT /api/stocks/:id` - Update stock price (Admin)

### Trading
- `POST /api/trades/buy` - Buy stock
- `POST /api/trades/sell` - Sell stock
- `GET /api/trades/portfolio` - Get user portfolio
- `GET /api/trades/history` - Get transaction history

## Technologies Used

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

### Frontend
- React.js with React Router
- Axios for API calls
- React Toastify for notifications
- CSS3 for styling
- Chart.js for analytics (ready to integrate)

## Usage Guide

1. **Register**: Create a new account
2. **Login**: Sign in with credentials
3. **Browse Stocks**: View available stocks in the dashboard
4. **Search**: Find specific stocks by symbol or name
5. **Buy Stocks**: Select a stock and purchase with virtual funds
6. **Manage Portfolio**: View holdings and sell stocks
7. **Track History**: Check all transaction history

## Default Virtual Balance
Every new user starts with **$100,000** in virtual funds for trading.

## Testing with Postman

1. Register a user and get JWT token
2. Add sample stocks via admin endpoint
3. Test buy/sell operations with token authentication
4. Verify portfolio and transaction history

## Future Enhancements

- Real-time stock price updates
- Advanced charting with TradingView
- Watchlist management
- Social trading features
- Email notifications
- Admin dashboard for stock management
- Performance analytics

## Security Features

✅ Password encryption with bcryptjs
✅ JWT-based authentication
✅ Role-based access control
✅ Input validation
✅ CORS protection

## Troubleshooting

**MongoDB Connection Error**: Ensure MongoDB is running
**Port Already in Use**: Change PORT in .env
**CORS Error**: Check frontend API_URL in .env
**Token Issues**: Clear localStorage and re-login

---

Ready to trade! Start the app and enjoy your stock trading simulation! 📈
