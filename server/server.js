const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');




const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:flase}));


app.use(session({
    maxAge: 10 * 60 *1000,
    name : 'tid',
    resave : false,
    saveUninitialized: false,
    secret: 'react cnode class'
}));




app.use(function (error, req, res, next) {
    console.log(error)
    res.status(500).send(error)
})

app.listen(3333, function () {
    console.log('server is listening on 3333')
})
