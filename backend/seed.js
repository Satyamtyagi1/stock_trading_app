const Stock = require('./models/stock');

const sampleStocks = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    currentPrice: 150.25,
    previousClose: 149.80,
    marketCap: '2.5T',
    description: 'Apple is a technology company known for iPhones, computers, and software.',
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    currentPrice: 140.50,
    previousClose: 139.75,
    marketCap: '1.8T',
    description: 'Google parent company specializing in search, advertising, and cloud services.',
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    currentPrice: 380.20,
    previousClose: 379.50,
    marketCap: '2.8T',
    description: 'Microsoft develops software, cloud services, and gaming products.',
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    currentPrice: 175.75,
    previousClose: 174.90,
    marketCap: '1.8T',
    description: 'Amazon is an e-commerce and cloud computing giant.',
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    currentPrice: 242.15,
    previousClose: 241.80,
    marketCap: '768B',
    description: 'Tesla manufactures electric vehicles and energy solutions.',
  },
  {
    symbol: 'META',
    name: 'Meta Platforms Inc.',
    currentPrice: 483.50,
    previousClose: 482.25,
    marketCap: '1.2T',
    description: 'Meta owns Facebook, Instagram, and other social platforms.',
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    currentPrice: 875.30,
    previousClose: 873.80,
    marketCap: '2.1T',
    description: 'NVIDIA designs GPUs and AI chips for various applications.',
  },
];

const initializeStocks = async () => {
  try {
    const existingStocks = await Stock.countDocuments();
    if (existingStocks === 0) {
      await Stock.insertMany(sampleStocks);
      console.log('Sample stocks initialized successfully');
    }
  } catch (error) {
    console.error('Error initializing stocks:', error);
  }
};

module.exports = { initializeStocks };
