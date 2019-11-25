const express = require('express');
const bodyparser = require('body-parser');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

const databaseUrl = 'mongodb+srv://pironaleksander:mongodbpass123$@cluster1-5o9ek.mongodb.net/shop?retryWrites=true&w=majority';

const fileStorage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'images');
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now().toString()+'_'+file.originalname)
    }
});

const fileFilter = (req, file, cb)=>{
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use(bodyparser.json());
app.use(multer({storage:fileStorage, fileFilter}).single('image'));
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(userRouter);
app.use(productRouter);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const fieldName = error.fieldName || null;
  res.status(status).json({ message, fieldName});
});

mongoose.connect(databaseUrl, {useNewUrlParser: true, useUnifiedTopology:true})
.then(res=>{
    app.listen(8080);
})
.catch(err=>console.log(err));