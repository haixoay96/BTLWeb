var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../utils/db').db;
var async = require('async');
router.get('/:id', (req, res) => {
    var MaGv = req.params.id;
    async.waterfall([
        (callback) => {
            db.query('SELECT MaGv,HoTen, MaKhoa FROM GiangVien WHERE MaGv = ? ', [MaGv], (error, rows) => {
                if (error) {
                    callback(error);
                    return;
                }
                callback(null, rows);
            })
        },
        (rows, callback) => {
            async.parallel({
                one: (callback) => {
                    db.query('SELECT TenKhoa FROM Khoa WHERE MaKhoa = ?', [rows[0].MaKhoa], (error, rows) => {
                        if (error) {
                            callback(error);
                            return;
                        }
                        console.log(rows[0].TenKhoa);
                        callback(null, rows);
                    });
                },
                two: (callback) => {
                    db.query('SELECT TenNc FROM NghienCuu WHERE MaGv = ?', [rows[0].MaGv], (error, rows) => {
                        if (error) {
                            callback(error);
                            return;
                        }
                        callback(null, rows);
                    });
                },
                three: (callback) => {
                    db.query('SELECT LinhVuc.TenLv FROM LinhVuc JOIN Lv_Gv ON LinhVuc.MaLv = Lv_Gv.MaLv AND Lv_Gv.MaGv = ?', [rows[0].MaGv], (error, rows) => {
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
                result.zero = rows;
                callback(null, result);

            });
        }
    ], (error, result) => {
        if (error) {
            console.error(error);
            return;
        }
        res.render('profile/profile', {
            hoten: result.zero[0].HoTen,
            magv: result.zero[0].MaGv,
            khoa: result.one[0].TenKhoa,
            ncs: result.two,
            lvs: result.three
        });
    });
});
module.exports = router;
