const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/isAuth');

const productController = require('../controllers/product');

router.get('/products', productController.getProducts);
router.get('/products/:productId', productController.getSingleProduct);
router.post('/delete-product', productController.postDeleteProduct);
router.post('/add-product', productController.postAddProduct);
router.post('/edit-product', productController.postEditProduct);

module.exports = router;