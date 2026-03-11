const express = require('express');
const {
  getAllStocks,
  getStockById,
  searchStocks,
  createStock,
  updateStock,
} = require('../controllers/stockController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getAllStocks);
router.get('/search', searchStocks);
router.get('/:id', getStockById);
router.post('/', authMiddleware, adminMiddleware, createStock);
router.put('/:id', authMiddleware, adminMiddleware, updateStock);

module.exports = router;
