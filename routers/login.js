var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
router.use(bodyParser.json());
router.post('/', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    connection.query('SELECT * FROM User WHERE username = ? AND password = ? ', [username, password], (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        if (rows) {
            req.session.username = req.body.username;
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
