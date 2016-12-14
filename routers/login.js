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
    var Username = req.body.Username;
    var Password = req.body.Password;
    db.query('SELECT * FROM User WHERE Username = ? AND Password = ? ', [Username, Password], (err, rows) => {
        if (err) {
            console.error(err);
            res.end('System error!');
            return;
        }
        if (rows.length > 0) {
            console.log(rows);
            req.session.Username = Username;
            req.session.Type = rows[0].Type;
            console.log('successfull!');
            res.redirect('/');
            return;
        }
        console.log('Failure!');
        res.end('Login failure!');
    });
});

module.exports = router;
