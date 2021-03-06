const Product = require('../models/Product');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

exports.getProducts = (req, res, next)=>{
    const limit = parseInt(req.query.limit),
    skip = parseInt(req.query.skip),
    {sort} = req.query;
    let {search} = req.query;
    if(typeof search !== 'undefined'){
        search = {name: {$regex: '.*' + search + '.*', $options: 'i'}};
    }else{
        search = {};
    }
    Product.find(search, null, {limit, skip, sort})
    .then(products=>{
        Product.countDocuments(search, (err, count)=>{
            if(err){
                throw new Error('Something went wrong with counting products');
            }
            const data = {
                count,
                products
            }
            res.status(200).json(data);
        })
    })
    .catch(err=>{
        if(err){
            next(err);
        }
    })
}

exports.getSingleProduct=(req, res, next)=>{
    Product.findById({_id: req.params.productId})
    .then(prod=>{
        if(!prod){
            const err = new Error('Product not found');
            err.statusCode = 404;
            throw err;
        }
        res.status(200).json(prod)
    })
    .catch(err=>{
        if(err){
            next(err);
        }
    })
}

exports.postAddProduct = (req, res)=>{
    const {userId, name, price, description} = req.body;
    let imageUrl;
    if(req.file){
        imageUrl = '/images/'+req.file.filename;
    }else{
        imageUrl = null
    }
    const productCreateData = new Date();
    const createdBy = mongoose.Types.ObjectId(userId);
    const product = new Product({
        name,
        price: parseFloat(price),
        description,
        imageUrl,
        creationDate: productCreateData,
        createdBy,
    })
    product.save()
    .then(resp=>{
        res.status(201).json({
            message:'Product successfuly added!'
        })
    })
    .catch(err=>{
            res.status(400).json({
                message:'Wrong data provided'
            })
    });
}

exports.postEditProduct=(req, res)=>{
    const {id, name, price, description} = req.body;
    Product.findById(id)
    .then(prod=>{
        if(!prod){
            return res.status(404).json({
                message:'Product not found'
            })
        }
        prod.name = name;
        prod.price = price;
        prod.description = description;
        if(req.file){
            const oldImageUrl = path.join(__dirname, '../'+prod.imageUrl);
            fs.unlink(oldImageUrl, err=>{
                if(err){
                    console.log(err);
                }
            });
            prod.imageUrl = '/images/'+req.file.filename;
        }
        prod.save()
        .then(result=>{
            return res.status(204).json({
                message:'Product edited'
            })
        })
        .catch(err=>{
            console.log(err);
            return res.status(400).json({
                message:'Product editing failed'
            })
        });
    })
    .catch(err=>{
        return res.status(500).json({
            message:'Somethink went wrong'
        })
    })
}

exports.postDeleteProduct=(req, res)=>{
    Product.findByIdAndDelete(req.body.id)
    .then(prod=>{
        if(!prod){
            return res.status(404).json({
                message:'Product not found'
            })
        }
        const oldImageUrl = path.join(__dirname, '../'+prod.imageUrl);
        fs.unlink(oldImageUrl, err=>{
            if(err){
                console.log(err);
            }
        });
        return res.status(200).json({
            message:'Product deleted successfuly'
        })
    })
    .catch(err=>{
        return res.status(500).json({
            message:'Somethink went wrong'
        })
    })
}