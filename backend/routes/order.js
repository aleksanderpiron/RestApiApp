const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order');

router.post('/place-order', orderController.placeOrder);
router.post('/orders-history', orderController.getOrdersHistory);

module.exports = router;