const mockDb = require('../mockDb');

const buyStock = async (req, res) => {
  try {
    const { stockId, quantity, price } = req.body;
    const userId = req.userId;

    const user = mockDb.users[userId] || Object.values(mockDb.users).find(u => u._id === userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const totalCost = quantity * price;
    if (user.balance < totalCost) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    if (!mockDb.portfolios[userId]) {
      mockDb.portfolios[userId] = { userId, holdings: [], totalBalance: user.balance };
    }

    const portfolio = mockDb.portfolios[userId];
    const stock = mockDb.stocks[stockId];
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }

    const existingHolding = portfolio.holdings.find((h) => h.stockId === stockId);

    if (existingHolding) {
      const totalInvested = existingHolding.totalInvested + totalCost;
      existingHolding.quantity += quantity;
      existingHolding.averageBuyPrice = totalInvested / existingHolding.quantity;
      existingHolding.totalInvested = totalInvested;
    } else {
      portfolio.holdings.push({
        stockId,
        symbol: stock.symbol,
        quantity,
        averageBuyPrice: price,
        totalInvested: totalCost,
      });
    }

    user.balance -= totalCost;
    portfolio.totalBalance = user.balance;

    const transactionId = 'txn_' + Date.now();
    mockDb.transactions[transactionId] = {
      _id: transactionId,
      userId,
      stockId,
      symbol: stock.symbol,
      type: 'buy',
      quantity,
      price,
      totalAmount: totalCost,
      transactionDate: new Date(),
    };

    res.status(201).json({
      message: 'Stock purchased successfully',
      balance: user.balance,
      portfolio,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sellStock = async (req, res) => {
  try {
    const { stockId, quantity, price } = req.body;
    const userId = req.userId;

    const user = mockDb.users[userId] || Object.values(mockDb.users).find(u => u._id === userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const portfolio = mockDb.portfolios[userId];
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    const holding = portfolio.holdings.find((h) => h.stockId === stockId);
    if (!holding || holding.quantity < quantity) {
      return res.status(400).json({ message: 'Insufficient stock quantity' });
    }

    const totalAmount = quantity * price;
    const stock = mockDb.stocks[stockId];

    holding.quantity -= quantity;
    if (holding.quantity === 0) {
      portfolio.holdings = portfolio.holdings.filter((h) => h.stockId !== stockId);
    }

    user.balance += totalAmount;
    portfolio.totalBalance = user.balance;

    const transactionId = 'txn_' + Date.now();
    mockDb.transactions[transactionId] = {
      _id: transactionId,
      userId,
      stockId,
      symbol: stock.symbol,
      type: 'sell',
      quantity,
      price,
      totalAmount,
      transactionDate: new Date(),
    };

    res.json({
      message: 'Stock sold successfully',
      balance: user.balance,
      portfolio,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPortfolio = async (req, res) => {
  try {
    const userId = req.userId;
    const portfolio = mockDb.portfolios[userId];

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTransactionHistory = async (req, res) => {
  try {
    const userId = req.userId;
    const transactions = Object.values(mockDb.transactions)
      .filter((t) => t.userId === userId)
      .sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate));

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  buyStock,
  sellStock,
  getPortfolio,
  getTransactionHistory,
};
