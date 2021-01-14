var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var generate_uid = require('./controllers/generate_uid');

var users = require('./controllers/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', users);
app.use('/api/v1/generate_uid', generate_uid);

module.exports = app;
