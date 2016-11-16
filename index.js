var http = require('http');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
http.createServer(app).listen(3000, () => {
    console.log('Server running at Port 3000!');
});
app.use('/', express.static('public'));
app.use('/', express.static('node_modules/bootstrap/dist'));
app.use('/', express.static('node_modules/jquery/dist'));
app.use('/', express.static('bower_components'));
app.use('/', require('./router/home.js'));
app.use('/faculty', require('./router/faculty.js'));
