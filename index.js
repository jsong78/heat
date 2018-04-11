var path = require('path');
var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static('./frontend/dist/'));


// Static routes
app.route('/').get(function(req, res) {
  return res.sendFile(path.join(__dirname, './frontend/static/index.html'));
});
app.route('/home').get(function(req, res) {
  return res.sendFile(path.join(__dirname, './frontend/static/index.html'));
});

// Get our routes
app.use('/', require('./routes/app')(router));

app.listen(3000, function(){console.log("started on port 3000")});

module.exports = app;
