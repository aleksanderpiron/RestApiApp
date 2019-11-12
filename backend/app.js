const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const feedRouter = require('./routes/feed');

app.use(bodyparser.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
})
app.use(feedRouter);

app.listen(8080);