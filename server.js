const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path:__dirname+'/.env'});
const cors = require('cors')

const quizRoutes = require('./router/quiz');
const articleRoutes = require('./router/article');

const app = express(); 

//middleware
app.use(express.json());

app.use(cors());


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });


app.use('/quiz', quizRoutes);
app.use('/articles', articleRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(process.versions.node) 
            console.log('Port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })