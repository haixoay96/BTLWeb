var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../utils/db.js').db;
var bodyParser = require('body-parser');
var async = require('async');
router.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
router.use(bodyParser.json());

router.post('/nc', (req, res) => {
    if (req.session.Username) {
        db.query('INSERT INTO NghienCuu (MaGv, TenNc) VALUES (?,?)', [req.session.Username, req.body.nc], (error, rows) => {
            if (error) {
                res.redirect('/');
                return;
            }
            res.redirect('/admin');
        });
        return;
    }
    res.redirect('/');
});
router.post('/lv', (req, res) => {
    console.log(req.body);
    if (req.session.Username) {
        var list = [];
        for (var x in req.body) {
            list.push(x);
        }
        async.every(list, (item, callback) => {
            db.query('INSERT INTO Lv_Gv (MaLv, MaGv) VALUES(?,?)', [item, req.session.Username], (error, result) => {
                if(error){
                    console.log(item);
                    console.log(error);
                    callback(error);
                    return;
                }
                callback(null, item);
            });
        }, (error, result)=>{
            console.log(error);
            console.log(result);
            res.redirect('/admin');
        });
        return;
    }
    res.redirect('/');
});
module.exports = router;
