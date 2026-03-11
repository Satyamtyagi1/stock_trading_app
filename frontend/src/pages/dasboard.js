import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { stockAPI, tradeAPI } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStock, setSelectedStock] = useState(null);
  const [tradeData, setTradeData] = useState({ quantity: 1, price: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!token || !userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));
    fetchStocks();
    fetchPortfolio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, navigate]);

  const fetchStocks = async () => {
    try {
      const response = await stockAPI.getAllStocks();
      setStocks(response.data);
    } catch (error) {
      toast.error('Failed to fetch stocks');
    }
  };

  const fetchPortfolio = async () => {
    try {
      const response = await tradeAPI.getPortfolio(token);
      setPortfolio(response.data);
    } catch (error) {
      toast.error('Failed to fetch portfolio');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      fetchStocks();
      return;
    }
    try {
      const response = await stockAPI.searchStocks(searchQuery);
      setStocks(response.data);
    } catch (error) {
      toast.error('Search failed');
    }
  };

  const handleBuyStock = async () => {
    if (!selectedStock || !tradeData.quantity) {
      toast.error('Please select stock and quantity');
      return;
    }
    try {
      await tradeAPI.buyStock(
        {
          stockId: selectedStock._id,
          quantity: parseInt(tradeData.quantity),
          price: selectedStock.currentPrice,
        },
        token
      );
      toast.success('Stock purchased successfully!');
      fetchPortfolio();
      setSelectedStock(null);
      setTradeData({ quantity: 1, price: 0 });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Purchase failed');
    }
  };

  const handleSellStock = async (holding) => {
    const quantity = prompt('Enter quantity to sell:');
    if (!quantity) return;

    try {
      await tradeAPI.sellStock(
        {
          stockId: holding.stockId,
          quantity: parseInt(quantity),
          price: selectedStock?.currentPrice || holding.averageBuyPrice,
        },
        token
      );
      toast.success('Stock sold successfully!');
      fetchPortfolio();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Sale failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="dashboard">
      <header className="navbar">
        <h1>Stock Trading App</h1>
        <div className="user-section">
          <span>{user?.name}</span>
          <span className="balance">Balance: ${user?.balance?.toFixed(2)}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      <div className="container">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search stocks by symbol or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="main-content">
          <aside className="portfolio-section">
            <h2>Your Portfolio</h2>
            {portfolio?.holdings?.length > 0 ? (
              <div className="holdings-list">
                {portfolio.holdings.map((holding) => (
                  <div key={holding.stockId} className="holding-card">
                    <h4>{holding.symbol}</h4>
                    <p>Qty: {holding.quantity}</p>
                    <p>Avg Price: ${holding.averageBuyPrice.toFixed(2)}</p>
                    <p>Total: ${holding.totalInvested.toFixed(2)}</p>
                    <button 
                      onClick={() => {
                        setSelectedStock(
                          stocks.find(s => s._id === holding.stockId)
                        );
                        handleSellStock(holding);
                      }}
                      className="sell-btn"
                    >
                      Sell
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>No stocks in portfolio</p>
            )}
          </aside>

          <main className="stocks-section">
            <h2>Available Stocks</h2>
            <div className="stocks-grid">
              {stocks.map((stock) => (
                <div
                  key={stock._id}
                  className={`stock-card ${selectedStock?._id === stock._id ? 'selected' : ''}`}
                  onClick={() => setSelectedStock(stock)}
                >
                  <h3>{stock.symbol}</h3>
                  <p>{stock.name}</p>
                  <p className="price">${stock.currentPrice.toFixed(2)}</p>
                  {stock.marketCap && <p className="market-cap">Market Cap: {stock.marketCap}</p>}
                </div>
              ))}
            </div>

            {selectedStock && (
              <div className="trade-modal">
                <div className="modal-content">
                  <button className="close-btn" onClick={() => setSelectedStock(null)}>×</button>
                  <h3>Buy {selectedStock.symbol}</h3>
                  <p>Current Price: ${selectedStock.currentPrice.toFixed(2)}</p>
                  <input
                    type="number"
                    min="1"
                    value={tradeData.quantity}
                    onChange={(e) => setTradeData({ ...tradeData, quantity: e.target.value })}
                    placeholder="Quantity"
                  />
                  <p className="total-cost">
                    Total Cost: ${(selectedStock.currentPrice * tradeData.quantity).toFixed(2)}
                  </p>
                  <button onClick={handleBuyStock} className="buy-btn">
                    Buy Stock
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Dashboard;
