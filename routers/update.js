var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../utils/db.js').db;
var bodyParser = require('body-parser');
var async = require('async');
var send = require('../utils/sendMail.js').send;
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
                if (error) {
                    console.log(item);
                    console.log(error);
                    callback(error);
                    return;
                }
                callback(null, item);
            });
        }, (error, result) => {
            console.log(error);
            console.log(result);
            res.redirect('/admin');
        });
        return;
    }
    res.redirect('/');
});
router.post('/detai', (req, res) => {
    console.log(req.body);
    if (req.session.Username) {
        async.waterfall([
            (callback) => {
                db.query('INSERT INTO DeTai (TenDt, MaGv, MaSv) VALUES(?,?,?)', [req.body.detai, req.body.MaGv, req.session.Username], (error, rows) => {
                    if (error) {
                        callback(error);
                        return;
                    }
                    callback(null, rows);
                });
            },
            (result, callback) => {
                db.query('UPDATE SinhVien SET Dk = ? WHERE MaSv = ?', ['2', req.session.Username], (error, rows) => {
                    if (error) {
                        callback(error);
                        return;
                    }
                    console.log(rows);
                    callback(null, rows);
                });
                res.redirect('/admin');
            },
            (result, callback) => {
                db.query('SELECT Email FROM GiangVien WHERE MaGv = ?', [req.body.MaGv], (error, rows) => {
                    if (error) {
                        console.log('error find mail');
                        callback(error);
                        return;
                    }
                    callback(null, rows);
                });
            }
        ], (error, result) => {
            if (error) {
                console.log('That bai');
                console.log(error);
                return;
            }
            console.log(result[0].Email);
            var mailOptions = {
                from: '"Admin !" <koolsok96@gmail.com>', // sender address
                to: result[0].Email, // list of receivers
                subject: 'Đăng ký đề tài!', // Subject line
                text: 'Sinh viên có mã ' + req.session.Username + ' muốn đăng ký đề tài:' + req.body.detai + ' với thầy!', // plaintext body
                html: '<b>' + 'Sinh viên có mã ' + req.session.Username + ' muốn đăng ký đề tài:' + req.body.detai + ' với thầy!' + '</b>' // html body
            };
            send(mailOptions);
        });

    }
});
router.post('/cancel', (req, res)=>{
    if(req.session.Username){
        db.query('DELETE DeTai WHERE ')
    }
});
module.exports = router;
