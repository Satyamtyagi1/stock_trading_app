const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('../backend/routes/authRoutes');
const stockRoutes = require('../backend/routes/stockRoutes');
const tradeRoutes = require('../backend/routes/tradeRoute');
const userRoutes = require('../backend/routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Try MongoDB connection (optional - will continue if fails)
mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log('✅ MongoDB connected');
  })
  .catch((err) => {
    console.log('⚠️  MongoDB not available - using mock data');
  });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/users', userRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

// Export for Vercel serverless
module.exports = app;
