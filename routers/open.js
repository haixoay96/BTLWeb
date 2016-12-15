var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../utils/db.js').db;
var async = require('async');
var send = require('../utils/sendMail').send;


// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
router.use(bodyParser.json());
router.post('/', (req, res) => {
    console.log(req.body);
    if (req.session.Username) {
        async.waterfall([
            (callback) => {
                db.query('SELECT Dk FROM Khoa WHERE MaKhoa = ? ', [req.session.Username], (error, rows) => {
                    if (error) {
                        callback(error);
                        return;
                    }
                    callback(null, rows);
                });
            },
            (result, callback) => {
                if (result[0].Dk === '0') {
                    async.parallel({
                        one: (callback) => {
                            db.query('UPDATE Khoa SET Dk = ? WHERE MaKhoa =? ', ['1', req.session.Username], (error, rows) => {
                                if (error) {
                                    callback(error);
                                    return;
                                }
                                callback(null, rows);
                            });
                        },
                        two: (callback) => {
                            db.query('SELECT SinhVien.Email As Email FROM SinhVien JOIN Nganh ON SinhVien.MaNganh = Nganh.MaNganh JOIN Khoa ON Nganh.MaKhoa = Khoa.MaKhoa AND Khoa.MaKhoa = ? AND SinhVien.Dk = "1"', [req.session.Username], (error, rows) => {
                                if (error) {
                                    callback(error);
                                    return;
                                }
                                callback(null, rows);
                            });
                        }
                    }, (error, result) => {
                        if (error) {
                            callback(error);
                            return;
                        }
                        callback(null, result);
                    });
                    return;
                }
                db.query('UPDATE Khoa SET Dk = ? WHERE MaKhoa =? ', ['0', req.session.Username], (error, rows) => {
                    if (error) {
                        callback(error);
                        return;
                    }
                    callback(null, rows);
                });
            }
        ], (error, result) => {
            if(error){
                console.log(error);
                return;
            }
            res.redirect('/admin');
            console.log(result);
        });
    }
});
module.exports = router;
