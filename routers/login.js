var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../utils/db.js').db;
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
router.use(bodyParser.json());
router.post('/', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    db.query('SELECT * FROM users WHERE username = ? AND password = ? ', [username, password], (err, rows) => {
        if (err) {
            console.error(err);
            res.end('System error!');
            return;
        }
        if (rows) {
            console.log(rows[0].type);
            req.session.username = req.body.username;
            req.session.type = rows[0].type;
            console.log('successfull!');
            res.redirect('/');
            console.log(rows);
            return;
        }
        console.log('Failure!');
        res.end('Login failure!');
    });
});

module.exports = router;
