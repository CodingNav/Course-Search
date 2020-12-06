// Requiring packages
var path = require("path");
var express = require('express')
var cors = require('cors')
var app = express()

// Requiring api-routes file
var api = require('./api-routes.js')

var PORT = process.env.PORT || 3000;

// Allows static content within public folder to load
app.use(express.static('public'))

// Allows for other sites to use my project's resources 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

// Connects express to api routes file
app.use('/api', api)

// GET route for the index.html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})
 
// Starts app
app.listen(PORT, function() {
    console.log("App Listening on: http://localhost:"+PORT)
})