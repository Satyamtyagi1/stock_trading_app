const mockDb = require('../mockDb');

const getAllStocks = async (req, res) => {
  try {
    res.json(Object.values(mockDb.stocks));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getStockById = async (req, res) => {
  try {
    const mockStock = mockDb.stocks[req.params.id];
    if (mockStock) {
      return res.json(mockStock);
    }
    res.status(404).json({ message: 'Stock not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchStocks = async (req, res) => {
  try {
    const { query } = req.query;
    const results = Object.values(mockDb.stocks).filter(
      (stock) =>
        stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
        stock.name.toLowerCase().includes(query.toLowerCase())
    );
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createStock = async (req, res) => {
  try {
    const { symbol, name, currentPrice, marketCap, description } = req.body;
    const stockId = 'stock_' + Date.now();
    mockDb.stocks[stockId] = {
      _id: stockId,
      symbol,
      name,
      currentPrice,
      marketCap,
      description,
    };
    res.status(201).json({ message: 'Stock created', stock: mockDb.stocks[stockId] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStock = async (req, res) => {
  try {
    const { currentPrice } = req.body;
    if (mockDb.stocks[req.params.id]) {
      mockDb.stocks[req.params.id].currentPrice = currentPrice;
      return res.json({ message: 'Stock updated', stock: mockDb.stocks[req.params.id] });
    }
    res.status(404).json({ message: 'Stock not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllStocks,
  getStockById,
  searchStocks,
  createStock,
  updateStock,
};
