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
                //    db.query('SELECT * FROM Khoa WHERE MaKhoa = ? ', [req.session.Username], (error, rows) => {
                res.render('admin/lecturer', {});
                //    });
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
// handle faculty
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
router.get('/faculty/register_dissertation', (req, res) => {
    if (req.session.Username) {
        db.query('SELECT Dk FROM Khoa WHERE MaKhoa = ?', [req.session.Username], (error, rows) => {
            if (error) {
                console.log(error);
                return;
            }
            if (rows[0].Dk === '0') {
                res.render('admin/faculty/register_dissertation', {
                    status: 'Đăng ký chưa được mở!',
                    action: 'Mở'
                });
                return;
            }
            res.render('admin/faculty/register_dissertation', {
                status: 'Đang mở đăng ký!',
                action: 'Đóng'
            });
        });
        return;
    }
    res.redirect('/');
});
router.get('/faculty/cancel', (req, res) => {
    if (req.session.Username) {
        db.query('SELECT MaSv, HoTen FROM SinhVien JOIN Nganh ON SinhVien.MaNganh = Nganh.MaNganh JOIN Khoa ON Nganh.MaKhoa = Khoa.MaKhoa AND Khoa.MaKhoa = ? AND SinhVien.Dk = ?', [req.session.Username, '2'], (error, rows) => {
            if(error){
                console.log(error);
                return;
            }
            console.log(rows);
            res.render('admin/faculty/cancel',{
                svs: rows
            });
        });
    }
});
// handle lecturer
router.get('/lecturer/profile_lecturer', (req, res) => {
    if (req.session.Username) {
        async.waterfall([
            (callback) => {
                db.query('SELECT MaGv,HoTen, MaKhoa FROM GiangVien WHERE MaGv = ? ', [req.session.Username], (error, rows) => {
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
            res.render('admin/lecturer/profile_lecturer', {
                hoten: result.zero[0].HoTen,
                magv: result.zero[0].MaGv,
                khoa: result.one[0].TenKhoa,
                ncs: result.two,
                lvs: result.three
            });
        });
    }
});
router.get('/lecturer/field', (req, res) => {
    if (req.session.Username) {
        async.waterfall([
            (callback) => {
                db.query('SELECT MaLv FROM Lv_Gv WHERE MaGv = ?', [req.session.Username], (error, rows) => {
                    if (error) {
                        callback(error);
                        return;
                    }
                    console.log(rows);
                    callback(null, rows);
                });
            },
            (result, callback) => {
                console.log('Lv');
                console.log(JSON.stringify(result));
                if (result.length > 0) {
                    console.log('Duoc');
                    var list = [];;
                    for (var i = 0; i < result.length; i++) {
                        list.push(result[i].MaLv);
                    }
                    console.log(list);
                    db.query('SELECT MaLv, TenLv FROM LinhVuc WHERE MaLv NOT IN (?)', [list], (error, rows) => {
                        if (error) {
                            callback(error);
                            return;
                        }
                        callback(null, rows);
                    });
                    return;
                }
                db.query('SELECT MaLv, TenLv FROM LinhVuc', (error, rows) => {
                    if (error) {
                        callback(error);
                        return;
                    }
                    callback(null, rows);
                });
            }
        ], (error, result) => {
            if (error) {
                console.log(error);
                return;
            }
            res.render('admin/lecturer/field', {
                lvs: result
            });
            console.log(result);
        });
    }
});
// handle student
router.get('/student/profile_student', (req, res) => {
    if (req.session.Username) {
        async.waterfall([
            (callback) => {
                db.query('SELECT * FROM SinhVien WHERE MaSv = ?', [req.session.Username], (error, rows) => {
                    if (error) {
                        callback(error);
                        return;
                    }
                    callback(null, rows);
                });
            },
            (result, callback) => {
                db.query('SELECT MaKhoa, TenNganh FROM Nganh WHERE MaNganh = ?', [result[0].MaNganh], (error, rows) => {
                    if (error) {
                        callback(error);
                        return;
                    }
                    result[0].MaKhoa = rows[0].MaKhoa;
                    result[0].TenNganh = rows[0].TenNganh;
                    callback(null, result);
                });
            },
            (result, callback) => {
                db.query('SELECT TenKhoa FROM Khoa WHERE MaKhoa = ?', [result[0].MaKhoa], (error, rows) => {
                    if (error) {
                        callback(error);
                        return;
                    }
                    result[0].TenKhoa = rows[0].TenKhoa;
                    callback(null, result);
                });
            }
        ], (error, result) => {
            if (error) {
                return;
            }
            res.render('admin/student/profile_student', {
                hoten: result[0].HoTen,
                masv: result[0].MaSv,
                khoa: result[0].TenKhoa,
                nganh: result[0].TenNganh,
                mail: result[0].Email
            });
        });
    }
});

router.get('/student/register_dissertation', (req, res) => {
    if (req.session.Username) {
        async.waterfall([
            (callback) => {
                db.query('SELECT Khoa.Dk AS khoa, SinhVien.Dk AS sv  FROM Khoa JOIN Nganh ON Khoa.MaKhoa = Nganh.MaKhoa JOIN SinhVien ON SinhVien.MaNganh = Nganh.MaNganh AND SinhVien.MaSv = ?', [req.session.Username], (error, rows) => {
                    if (error) {
                        callback(error);
                        return;
                    }
                    callback(null, rows);
                });
            }
        ], (error, result) => {
            if (error) {
                return;
            }
            if (result[0].khoa === '0') {
                res.end('Khoa chưa mở đăng ký, quay lại sau!');
                return;
            }
            if (result[0].sv === '0') {
                res.end('Bạn không đủ điều kiện đăng ký!');
                return;
            }
            if (result[0].sv === '2') {
                res.end('Bạn đã đăng ký đề tài rồi!');
                return;
            }
            db.query('SELECT * FROM GiangVien', (error, rows) => {
                if (error) {
                    return;
                }
                res.render('admin/student/register_dissertation', {
                    gvs: rows
                });
            });
        });
    }
});

module.exports = router;
