const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  name: {
    type: String,
    required: true,
  },
  currentPrice: {
    type: Number,
    required: true,
  },
  previousClose: {
    type: Number,
  },
  marketCap: {
    type: String,
  },
  description: {
    type: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Stock', stockSchema);
