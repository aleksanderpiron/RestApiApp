const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.register=(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json(errors.errors)
    }
    const {name, email} = req.body,
    productCreateData = new Date();
    let password = req.body.password;
    bcrypt.hash(password, 12)
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
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json(errors.errors)
    }
    const {email, password} = req.body;
    User.findOne({email: email})
    .then(user=>{
        bcrypt.compare(password, user.password)
        .then(correct=>{
            if(!correct){
                return res.status(422).json(
                    [{
                        param:'email',
                        msg:'Wrong email or password'
                    }]
                )
            }
            const token = jwt.sign({
                userId:user._id,
                email:user.email
            }, 'yurfcjxhuqxsqjotkhqw', {expiresIn:'1h'})
            res.status(200).json({
                message:'User logged successfuly',
                userId:user.id,
                userName:user.name,
                token,
            })
        })
    })
    .catch(err=>{
        next(err)
    })
}