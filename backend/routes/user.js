const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const User = require('../models/User');
const userController = require('../controllers/user');
const cartController = require('../controllers/cart');

router.post('/register',
[
    body('name').isLength({min:3}).withMessage('Name must be at least 3 characters'),
    body('email').isEmail().withMessage('Please enter valid email address')
    .custom(value=>{
        return User.findOne({email: value})
        .then(findedUser=>{
            if(findedUser){
                return Promise.reject('This email is already registered! Please try different');
            }
        })
    }),
    body('password')
    .custom((value)=>{
        if(!/\d/.test(value)){
            throw new Error('Password must contain at least one number');
        }
        return true;
    })
    .custom((value)=>{
        if(!/^(?=.*[A-Z])/.test(value)){
            throw new Error('Password must contain at least one uppercase character');
        }
        return true;
    })
    .custom((value)=>{
        if(!/^(?=.*[a-z])/.test(value)){
            throw new Error('Password must contain at least one lowercase character');
        }
        return true;
    })
    .isLength({min:6}).withMessage(`Password isn't long enough`),
],
userController.register);
router.post('/login',
[
    body('email').isEmail().withMessage('Please enter valid email address')
    .custom(value=>{
        return User.findOne({email: value})
        .then(findedUser=>{
            if(!findedUser){
                return Promise.reject(`This email address isn't registered yet!`);
            }
        })
    }),
],
userController.login);
router.post('/add-to-cart', cartController.addToCart);
router.post('/cart', cartController.viewCart);

module.exports = router