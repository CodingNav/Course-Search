// Requiring packages
var path = require("path");
var express = require('express')
var cors = require('cors')
var app = express()

// Requiring api-routes file
var api = require('./api-routes.js')

var PORT = process.env.PORT || 3000;


// Connects express to api routes file
app.use('/api', api)


// Allows static content within public folder to load
app.use(express.static('public'))

// Allows for other sites to use my project's resources 
app.use(cors())

// GET route for the index.html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})
 
// Starts app
app.listen(PORT, function() {
    console.log("App Listening on: http://localhost:"+PORT)
})