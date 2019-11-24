const User = require('../models/User');
const mongoose = require('mongoose');
const crypto = require('crypto-js');

exports.postAddUser=(req, res)=>{
    const {name, email} = req.body,
    productCreateData = new Date();
    let password = req.body.password;
    password = crypto.AES.encrypt(password, 'secretABC');
    console.log(password);
    console.log(typeof password);
    newUser = new User({
        name,
        email,    
        password,
        creationDate: productCreateData
    });
    console.log(newUser);
    newUser.save()
    .then(resp=>{
        res.status(201).json({
            message:'User successfuly created! You can now login'
        })
    })
    .catch(err=>{
            console.log(err);
            res.status(400).json({
                message:'Wrong data provided'
            })
    });
}