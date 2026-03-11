// Mock MongoDB Database (In-Memory)
const users = {};
const stocks = {
  stock1: { _id: 'stock1', symbol: 'AAPL', name: 'Apple Inc.', currentPrice: 150.25, marketCap: '2.5T' },
  stock2: { _id: 'stock2', symbol: 'GOOGL', name: 'Alphabet Inc.', currentPrice: 140.50, marketCap: '1.8T' },
  stock3: { _id: 'stock3', symbol: 'MSFT', name: 'Microsoft', currentPrice: 380.20, marketCap: '2.8T' },
  stock4: { _id: 'stock4', symbol: 'AMZN', name: 'Amazon', currentPrice: 175.75, marketCap: '1.8T' },
  stock5: { _id: 'stock5', symbol: 'TSLA', name: 'Tesla Inc.', currentPrice: 242.15, marketCap: '768B' },
  stock6: { _id: 'stock6', symbol: 'META', name: 'Meta Platforms', currentPrice: 483.50, marketCap: '1.2T' },
  stock7: { _id: 'stock7', symbol: 'NVDA', name: 'NVIDIA', currentPrice: 875.30, marketCap: '2.1T' },
};
const portfolios = {};
const transactions = {};

module.exports = {
  users,
  stocks,
  portfolios,
  transactions,
};
