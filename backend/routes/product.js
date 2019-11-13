const express = require('express');
const router = express.Router();

const productController = require('../controllers/product');

router.get('/posts', productController.getProducts);
router.post('/add-product', productController.postAddProduct);

module.exports = router;