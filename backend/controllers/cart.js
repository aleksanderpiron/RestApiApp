const User = require('../models/User');

exports.addToCart =(req, res, next)=>{
    userId = req.body.userId;
    User.findById(userId)
    .then(user=>{
        if(!user){
            const err = new Error('User not fouded');
            throw err;
        }
        const cartItem = {
            productId:req.body.prodId,
            qty:req.body.qty
        }
        const totalPrice =+ parseInt(req.body.price);

        user.cart.items.push(cartItem);
        user.cart.totalPrice = totalPrice;
        console.log(totalPrice);
        user.save()
        .then(result=>{
            console.log('hello');
            res.status(200).json({
                message:'Item was added to cart successfuly!'
            })
        })
        .catch(err=>{
        console.log(err)
            next(err);
        })
    })
    .catch(err=>{
        console.log(err)

        next(err);
    });
}
exports.getCart =(req, res, next)=>{

}