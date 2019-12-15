const User = require('../models/User');
const Order = require('../models/Order');

exports.placeOrder=(req, res, next)=>{
    const {userId, name, surname, address, delivery} = req.body,
    orderData = {
        name,
        surname,
        address,
        delivery
    } 
    User.findById(userId)
    .then(user=>{
        if(!user){
            const err = new Error('User not founded');
            err.statusCode = 404;
            throw err;
        }
        const orderDate = Date.now();
        const order = new Order({
            userId,
            orderDate,
            orderData,
            cart:user.cart
        })
        order.save()
        .then(result=>{
                user.cart.items = [];
                user.cart.totalPrice = 0;
                user.save()
                .then(result=>{
                    res.status(200).json({
                        message:'Order succesfuly placed'
                    })
                })
                .catch(err=>{
                    next(err);
                })
            })
        .catch(err=>{
            next(err)
        })
    })
    .catch(err=>{
        next(err);
    })
}