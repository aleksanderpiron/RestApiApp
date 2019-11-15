const express = require('express');
const router = express.Router();

const productController = require('../controllers/product');

router.get('/products', productController.getProducts);
router.post('/add-product', productController.postAddProduct);

module.exports = router;