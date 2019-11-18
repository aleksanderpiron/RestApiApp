const Product = require('../models/Product');
const mongoose = require('mongoose');

exports.getProducts = (req, res)=>{
    Product.find()
    .then(products=>{
        res.status(200).json(products);
    })
    .catch(err=>{
        if(err){
            res.status(503).json({
                message:`Something went wrong, we're sorry!`
            });
        }
    })
}

exports.getSingleProduct=(req, res)=>{
    Product.findById({_id: req.params.productId})
    .then(prod=>{
        res.status(200).json(prod)
    })
    .catch(err=>{
        if(err){
            res.status(400).json({
                message:`Product not finded`
            });
        }
    })
}

exports.postAddProduct = (req, res)=>{
    const {name, price, description} = req.body;
    console.log(req.file);
    const imageUrl = '/images/'+req.file.filename;
    const productCreateData = new Date();
    const createdBy = mongoose.Types.ObjectId('123456789123456789123456');
    const product = new Product({
        name,
        price,
        description,
        imageUrl,
        creationDate: productCreateData,
        createdBy,
    })
    product.save()
    .then(resp=>{
        res.status(201).json({
            message:'Post successfuly added!'
        })
    })
    .catch(err=>{
            console.log(err);
            res.status(400).json({
                message:'Wrong data provided'
            })
    });
}