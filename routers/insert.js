var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../utils/db.js').db;
var async = require('async');
var send = require('../utils/sendMail.js').send;
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
router.use(bodyParser.json());

router.post('/gv', (req, res) => {
    if (req.session.Username) {
        async.waterfall([
            (callback) => {
                if (req.body.MaGv !== '') {
                    db.query('INSERT INTO User (Username, Password, Type) VALUES (?,?,?)', [req.body.MaGv, '123456', 2], (err, rows) => {
                        if (err) {
                            callback(err);
                            return;
                        }
                        callback(null, rows);
                    });
                }
            }
        ], (error, result) => {
            db.query('INSERT INTO GiangVien (MaGv, HoTen , MaKhoa, Email) VALUES (?,?,?,?)', [req.body.MaGv, req.body.HoTen, req.session.Username, req.body.Email], (err, rows) => {
                res.redirect('/admin');
                if (err) {
                    return;
                }
                var mailOptions = {
                    from: '"Admin !" <koolsok96@gmail.com>', // sender address
                    to: req.body.Email, // list of receivers
                    subject: 'Get start!', // Subject line
                    text: 'Username:' + req.body.MaGv + ' password:123456', // plaintext body
                    html: '<b>' + 'Username:' + req.body.MaGv + ' password:123456' + '</b>' // html body
                };
                //send(mailOptions);
            });
        });
        return;
    }
    res.redirect('/admin');
});
router.post('/sv', (req, res) => {
    if (req.session.Username) {
        async.waterfall([
            (callback) => {
                db.query('INSERT INTO User (Username, Password, Type) VALUES (?,?,?)', [req.body.MaSv, '123456', 3], (err, rows) => {
                    if (err) {
                        callback(err);
                        return;
                    }
                    callback(null, rows);
                });
            }
        ], (error, result) => {
            db.query('INSERT INTO SinhVien (MaSv, HoTen ,MaKh, MaNganh , Email,Dk) VALUES (?,?,?,?,?,?)', [req.body.MaSv, req.body.HoTen, req.body.MaKh, req.body.MaNganh, req.body.Email, '0'], (err, rows) => {
                res.redirect('/admin');
                if (err) {
                    return;
                }
                var mailOptions = {
                    from: '"Admin !" <koolsok96@gmail.com>', // sender address
                    to: req.body.Email, // list of receivers
                    subject: 'Get start!', // Subject line
                    text: 'Username:' + req.body.MaSv + ' password:123456', // plaintext body
                    html: '<b>' + 'Username:' + req.body.MaSv + ' password:123456' + '</b>' // html body
                };
            //    send(mailOptions);
            });
        });
        return;
    }
    res.redirect('/admin');
});
router.post('/hd', (req, res)=>{
    if(req.session.Username){
        console.log(req.body);
        db.query('INSERT INTO HoiDong (TenHd, TenDt, MaGv) VALUES(?,?,?)', [req.body.TenHd, req.body.TenDt, req.body.MaGv], (error, rows)=>{
            res.redirect('/admin');
            if(error){
                console.log(error);
                return;
            }
            console.log(rows);
        });
    }
})
module.exports = router;
