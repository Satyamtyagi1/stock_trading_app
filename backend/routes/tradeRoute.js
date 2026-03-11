const express = require('express');
const {
  buyStock,
  sellStock,
  getPortfolio,
  getTransactionHistory,
} = require('../controllers/tradeController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/buy', authMiddleware, buyStock);
router.post('/sell', authMiddleware, sellStock);
router.get('/portfolio', authMiddleware, getPortfolio);
router.get('/history', authMiddleware, getTransactionHistory);

module.exports = router;
