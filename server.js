//constants
const hbs = require('hbs');
const express = require('express');
const geocode = require('request');

//static content
var app = express();
app.use(express.static(__dirname + '/public'))

//main page
app.get('/main', (request, response) => {

})

app.listen(8080);

//im linden
