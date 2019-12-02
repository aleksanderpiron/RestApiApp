const User = require('../models/User');
const Product = require('../models/Product');

exports.addToCart =(req, res, next)=>{
    userId = req.body.userId;
    User.findById(userId)
    .then(user=>{
        if(!user){
            const err = new Error('User not found');
            throw err;
        }
        Product.findById(req.body.prodId)
        .then(prod=>{
            if(!prod){
                const err = new Error('Product not found');
                throw err;
            }
            const alreadyExistIndex = user.cart.items.findIndex((item)=>{
                return item.product.toString() === req.body.prodId.toString();
            });
            if(alreadyExistIndex !== -1){
                user.cart.items[alreadyExistIndex].qty += 1;
            }
            else if(alreadyExistIndex === -1){
                const cartItem = {
                    product:prod._id,
                    qty:req.body.qty
                }
                user.cart.items.push(cartItem);
            }
            let totalPrice = user.cart.totalPrice + parseFloat(prod.price);
            totalPrice = totalPrice.toFixed(2);

            user.cart.totalPrice = totalPrice;
            user.save()
            .then(result=>{
                res.status(200).json({
                    message:'Item was added to cart successfuly!'
                })
            })
            .catch(err=>{
                next(err);
            })
        })
        .catch(err=>{
            next(err);
        })
    })
    .catch(err=>{
        next(err);
    });
}
exports.viewCart =(req, res, next)=>{
    const {userId} = req.body;
    User.findById(userId)
    .populate('cart.items.product')
    .then(user=>{
        if(!user){
            const err = new Error('User not found');
            throw err;
        }
        res.status(200).json({
            cart:user.cart
        })
    })
    .catch(err=>{
        next(err);
    })
}