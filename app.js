"use strict";
var express = require('express');
var app = express();
var path = require('path');
const database = require('./databases')
database.authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');

}).catch(err => {
    console.error('Unable to connect to the database:', err);
});


app.use(express.static('public'))
app.use(express.static('files'))
app.use('/static', express.static('public'))



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});



app.listen(5000);
