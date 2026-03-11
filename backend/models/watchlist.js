const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  stocks: [{
    stockId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stock',
    },
    symbol: String,
    name: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Watchlist', watchlistSchema);
