var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../utils/db.js').db;
router.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
router.use(bodyParser.json());
router.get('/', (req, res) => {
    if (req.session.Username) {
        res.render('change/change');
        return;
    }
    res.end('Chưa đăng nhập!');
});
router.post('/', (req, res) => {
    console.log('Doi mk');
    if (req.session.Username) {
        db.query('UPDATE User SET Password = ? WHERE Username = ? ', [req.body.pass, req.session.Username], (error, rows) => {
            if(error){
                console.error(error);
                return;
            }
            res.end('Thang cong');
        });
        return;
    }
    res.end('Chua dang nhap');

});
module.exports = router;
