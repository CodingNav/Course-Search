var express = require('express')
var app = express()
var api = require('./api-routes.js')

app.use('/api', api)

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)