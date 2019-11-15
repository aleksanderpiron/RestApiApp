const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const productRouter = require('./routes/product');

const databaseUrl = 'mongodb+srv://pironaleksander:mongodbpass123$@cluster1-5o9ek.mongodb.net/test?retryWrites=true&w=majority';

app.use(bodyparser.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use(productRouter);

mongoose.connect(databaseUrl, {useNewUrlParser: true, useUnifiedTopology:true})
.then(res=>{
    app.listen(8080);
})
.catch(err=>console.log(err));