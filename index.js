var http = require('http');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
http.createServer(app).listen(3000, ()=>{
    console.log('Server running at Port 3000!');
});
app.use('/', express.static('public'));
app.use('/', require('./router/home.js'));
