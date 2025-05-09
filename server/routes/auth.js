const express = require('express');
const { register, login, getCurrentUser, getRecentUploads } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Routes
router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getCurrentUser);
router.get('/recent-uploads', protect, getRecentUploads);

module.exports = router;
