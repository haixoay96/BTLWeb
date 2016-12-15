var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../utils/db').db;
router.get('/', (req, res) => {
    res.render('common/lecturer');
});
router.get('/:khoa', (req, res) => {
    var khoa = req.params.khoa;
    switch (khoa) {
        case 'cntt':
            db.query('SELECT MaGv, HoTen FROM GiangVien WHERE MaKhoa=?', ['CNTT'], (error, rows) => {
                res.render('common/lecturer/gv', {
                    gvs: rows
                });
            });
            break;
        case 'dtvt':
            db.query('SELECT MaGv, HoTen FROM GiangVien WHERE MaKhoa=?', ['DTVT'], (error, rows) => {
                res.render('common/lecturer/gv', {
                    gvs: rows
                });
            });
            break;
        case 'ckt':
            db.query('SELECT MaGv, HoTen FROM GiangVien WHERE MaKhoa=?', ['CKT'], (error, rows) => {
                res.render('common/lecturer/gv', {
                    gvs: rows
                });
            });
            break;
        case 'vlkt':
            db.query('SELECT MaGv, HoTen FROM GiangVien WHERE MaKhoa=?', ['VLKT'], (error, rows) => {
                res.render('common/lecturer/gv', {
                    gvs: rows
                });
            });
            break;
        default:
		res.redirect('/');
    }
});
module.exports = router;
