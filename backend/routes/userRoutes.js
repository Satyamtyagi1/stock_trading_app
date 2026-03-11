const express = require('express');
const { getUserProfile, updateBalance } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', authMiddleware, getUserProfile);
router.post('/balance', authMiddleware, updateBalance);

module.exports = router;
