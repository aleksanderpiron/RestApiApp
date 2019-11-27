const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    const token = req.get('Authorization');
    try{
        decodedToken = jwt.verify(token, 'yurfcjxhuqxsqjotkhqw');
    }catch(err){
        console.log('wrong');
        return res.status(550).json({
            message:'Permission denied'
        })
    }
    if(!decodedToken){
        console.log('nie ma')
    }
    next();
}