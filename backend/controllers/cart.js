const User = require('../models/User');
const Product = require('../models/Product');

exports.addToCart =(req, res, next)=>{
    const {userId, prodId, qty} = req.body;
    User.findById(userId)
    .then(user=>{
        if(!user){
            const err = new Error('User not found');
            throw err;
        }
        Product.findById(prodId)
        .then(prod=>{
            if(!prod){
                const err = new Error('Product not found');
                throw err;
            }
            const alreadyExistIndex = user.cart.items.findIndex((item)=>{
                return item.product.toString() === prodId.toString();
            });
            if(alreadyExistIndex !== -1){
                user.cart.items[alreadyExistIndex].qty += 1;
            }
            else if(alreadyExistIndex === -1){
                const cartItem = {
                    product:prod._id,
                    qty:qty
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
exports.removeFromCart=(req, res, next)=>{
    const {prodId, userId} = req.body;
    User.findById(userId)
    .populate('cart.items.product', 'price')
    .then(user=>{
        if(!user){
            const err = new Error('User not found');
            throw err;
        }
        const targetId = user.cart.items.findIndex((item)=>{
            return item.product._id.toString() === prodId.toString();
        });
        if(targetId === -1){
            const err = new Error('Product not found in cart');
            throw err;
        }
        const newTotalPrice = user.cart.totalPrice - (user.cart.items[targetId].product.price * user.cart.items[targetId].qty);
        user.cart.totalPrice = newTotalPrice.toFixed(2);
        user.cart.items.splice(targetId, 1);
        user.save()
        .then(result=>{
            res.status(200).json({
                message:'Item successfuly remove from cart'
            })
        })
        .catch(err=>{
            next(err);
        })
    })
    .catch(err=>{
        next(err);
    })
}