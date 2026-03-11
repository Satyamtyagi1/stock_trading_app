const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  holdings: [{
    stockId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stock',
    },
    symbol: String,
    quantity: Number,
    averageBuyPrice: Number,
    totalInvested: Number,
  }],
  totalBalance: {
    type: Number,
    default: 100000,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
