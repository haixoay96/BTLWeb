var http = require('http');
var express = require('express');
var app = express();
var db = require('./utils/db.js');
var redis = require('redis');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var redisClient = redis.createClient();

app.set('view engine', 'ejs');
http.createServer(app).listen(process.env.PORT || 3000, () => {
    console.log('Server running at Port ' + (process.env.PORT || 3000));
});

redisClient.on('connect', () => {
    console.log('Redis ready!');
});

redisClient.on('error', (error) => {
    console.log('Redis have error!');
});

// handle session
app.use(session({
    secret: 'ssshhhhh',
    store: new redisStore({
        host: '127.0.0.1',
        port: 6379,
        client: redisClient,
        ttl: 260
    }),
    saveUninitialized: false,
    resave: false

}));

// set static file
app.use('/', express.static('public'));
app.use('/', express.static('node_modules/bootstrap/dist'));
app.use('/', express.static('node_modules/jquery/dist'));
app.use('/', express.static('node_modules/angular'));
app.use('/', express.static('node_modules/angular-route'));
app.use('/', express.static('node_modules/angular-ui-router'));
app.use('/', express.static('node_modules/font-awesome'));
app.use('/', require('./routers/home.js'));
app.use('/upload', require('./routers/upload.js'));
app.use('/faculty', require('./routers/faculty.js'));
app.use('/login', require('./routers/login.js'));
app.use('/admin', require('./routers/admin.js'));
app.use('/logout', require('./routers/logout.js'));
app.use('/update', require('./routers/update.js'));
app.use('/changepassword', require('./routers/changepassword.js'));
