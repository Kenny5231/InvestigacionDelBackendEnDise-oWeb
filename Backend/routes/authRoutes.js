const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { registerValidator } = require('../utils/validate');
router.post('/register', registerValidator, register);
router.post('/login', login);
module.exports = router;
