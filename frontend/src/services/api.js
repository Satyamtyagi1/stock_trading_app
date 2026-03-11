import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const authAPI = {
  register: (data) => axios.post(`${API_URL}/auth/register`, data),
  login: (data) => axios.post(`${API_URL}/auth/login`, data),
};

export const stockAPI = {
  getAllStocks: () => axios.get(`${API_URL}/stocks`),
  getStockById: (id) => axios.get(`${API_URL}/stocks/${id}`),
  searchStocks: (query) => axios.get(`${API_URL}/stocks/search?query=${query}`),
  createStock: (data, token) =>
    axios.post(`${API_URL}/stocks`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  updateStock: (id, data, token) =>
    axios.put(`${API_URL}/stocks/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export const tradeAPI = {
  buyStock: (data, token) =>
    axios.post(`${API_URL}/trades/buy`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  sellStock: (data, token) =>
    axios.post(`${API_URL}/trades/sell`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  getPortfolio: (token) =>
    axios.get(`${API_URL}/trades/portfolio`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  getTransactionHistory: (token) =>
    axios.get(`${API_URL}/trades/history`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};
