var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../utils/db.js').db;
var async = require('async');
router.get('/', (req, res) => {
    if (req.session.Username) {
        var Type = req.session.Type;
        console.log(Type);
        switch (Type) {
            case 1:
                db.query('SELECT * FROM Khoa WHERE MaKhoa = ? ', [req.session.Username], (error, rows) => {
                    res.render('admin/faculty', {
                        khoa: rows[0].TenKhoa
                    });
                });
                break;
            case 2:
                db.query('SELECT * FROM Khoa WHERE MaKhoa = ? ', [req.session.Username], (error, rows) => {
                    res.render('admin/lecturer', {});
                });
                break;
            case 3:
                res.render('admin/student');
                break
            default:
                res.redirect('/');
        }
        return;
    }
    res.redirect('/');
});
router.get('/faculty/home', (req, res) => {
    if (req.session.Username) {
        db.query('SELECT TenKhoa FROM Khoa WHERE MaKhoa = ? ', [req.session.Username], (error, rows) => {
            res.render('admin/faculty/home', {
                khoa: rows[0].TenKhoa
            });
        });
    }

});
router.get('/faculty/course', (req, res) => {
    if (req.session.Username) {
        db.query('SELECT TenKh FROM KhoaHoc', (error, rows) => {
            console.log(rows);
            res.render('admin/faculty/course', {
                khoahocs: rows
            });
        });
    }
});
router.get('/faculty/courseprogram', (req, res) => {
    if (req.session.Username) {
        db.query('SELECT TenNganh FROM Nganh WHERE MaKhoa = ?', [req.session.Username], (error, rows) => {
            console.log(rows);
            res.render('admin/faculty/courseprogram', {
                nganhs: rows
            });
        });
    }
});

router.get('/lecturer', (req, res) => {

});
module.exports = router;
