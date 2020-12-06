var path = require("path");
var express = require('express')
var app = express()
var api = require('./api-routes.js')

var PORT = process.env.PORT || 3000;

app.use('/api', api)
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})
 
app.listen(PORT, function() {
    console.log("App Listening on: http://localhost:"+PORT)
})