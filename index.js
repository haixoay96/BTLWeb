var http = require('http');
var express = require('express');
var redis = require('redis');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var client = redis.createClient();
var app = express();
app.set('view engine', 'ejs');
http.createServer(app).listen(3000, () => {
    console.log('Server running at Port 3000!');
});
app.use(session({
    secret: 'ssshhhhh',
    store: new redisStore({
        host: '127.0.0.1',
        port: 6379,
        client: client,
        ttl: 260
    }),
    saveUninitialized: false,
    resave: false

}));
app.use('/', express.static('public'));
app.use('/', express.static('node_modules/bootstrap/dist'));
app.use('/', express.static('node_modules/jquery/dist'));
app.use('/', express.static('bower_components'));
app.use('/', require('./router/home.js'));
app.use('/faculty', require('./router/faculty.js'));
app.use('/login', require('./router/login.js'));
