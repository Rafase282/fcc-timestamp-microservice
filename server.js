'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var app = express();
require('dotenv').config({
  silent: true
});
app.use('/public', express.static(process.cwd() + '/public'));
routes(app);
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('Node.js listening on port 3000...');
});