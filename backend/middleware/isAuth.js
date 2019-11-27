const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    const token = req.get('Authorization');
    try{
        decodedToken = jwt.verify(token, 'yurfcjxhuqxsqjotkhqw');
    }catch(err){
        console.log('wrong');
        res.status(550).json({
            message:'Permission denied'
        })
    }
    if(!decodedToken){
        console.log('nie ma')
    }
    console.log(decodedToken.email);
    console.log(decodedToken.userId);
    console.log(decodedToken.iat);
    console.log(decodedToken.exp);

    next();
}