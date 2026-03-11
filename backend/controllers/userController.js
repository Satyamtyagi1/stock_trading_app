const mockDb = require('../mockDb');

const getUserProfile = async (req, res) => {
  try {
    const user = mockDb.users[req.userId] || Object.values(mockDb.users).find(u => u._id === req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBalance = async (req, res) => {
  try {
    const { amount } = req.body;
    const user = mockDb.users[req.userId] || Object.values(mockDb.users).find(u => u._id === req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.balance += amount;
    const { password, ...userWithoutPassword } = user;
    res.json({ message: 'Balance updated', user: userWithoutPassword });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserProfile, updateBalance };
