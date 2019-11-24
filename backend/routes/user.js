const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/register', userController.postRegister);

module.exports = router