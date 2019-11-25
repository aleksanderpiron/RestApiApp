const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register=async (req, res, next)=>{
    const {name, email} = req.body,
    productCreateData = new Date();
    let password = req.body.password;
    password = bcrypt.hash(password, 12)
    .then(hashedPassword=>{
        newUser = new User({
            name,
            email,    
            password: hashedPassword,
            creationDate: productCreateData
        });
        newUser.save()
        .then(resp=>{
            res.status(201).json({
                message:'User successfuly created! You can now login'
            })
        })
        .catch(err=>{
            next(err)
        });
    })
};

exports.login=(req, res, next)=>{
    const {email, password} = req.body;
    User.findOne({email:email})
    .then(user=>{
        if(!user){
            const err = new Error(`User with this email address isn't registered yet!`);
            err.statusCode = 404;
            err.fieldName = 'email';
            next(err);
        }
        bcrypt.compare(password, user.password)
        .then(correct=>{
            if(!correct){
                const err = new Error(`Wrong email or password`);
                err.statusCode = 422;
                err.fieldName = 'email';
                next(err);
            }

        })
    })
}   