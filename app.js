var http = require('http');
var express = require('express');
var app = express();

var redis = require('redis');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var redisClient;
var mysql = require('mysql');
var async = require('async');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'duclinh',
    password: '123456',
    database: 'btlweb'
});
app.set('view engine', 'ejs');
http.createServer(app).listen(3000, () => {
    console.log('Server running at Port 3000!');
});
// connect
async.parallel({
    one: (callback) => {
        redisClient = redis.createClient();
        redisClient.once('connect', () => {
            console.log('Redis ready!');
            redisClient.removeAllListeners('error');
            callback(null);
        });
        redisClient.once('error', (error) => {
            callback(error);
        });
    },
    two: (callback) => {
        connection.connect((error) => {
            if (error) {
                callback(error);
                return;
            }
            console.log('Mysql ready!');
            callback(null);
        });
    }
}, (err, results) => {
    if (err) {
        process.exit(0);
    }
    console.log('All database ready!');
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
var home = require('./routers/home.js');
var upload = require('./routers/upload.js');

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
