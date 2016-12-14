var express = require('express');
var db = require('../utils/db.js').db;
var router = express.Router();
router.get('/', (req, res) => {
    console.log(req.session);
    if (req.session.Username) {
        switch (req.session.Type) {
            case 1:
                db.query('SELECT * FROM Khoa WHERE MaKhoa = ? ', [req.session.Username], (error, rows) => {
                    if(error){
                        res.render('home/index');
                        return;
                    }
                    res.render('homeLogin/index', {
                        name: rows[0].TenKhoa
                    });
                });
                break;
            case 2:
                db.query('SELECT * FROM GiangVien WHERE MaGv = ? ', [req.session.Username], (error, rows) => {
                    if(error){
                        res.render('home/index');
                        return;
                    }
                    res.render('homeLogin/index', {
                        name: rows[0].HoTen
                    });
                });
                break;
            case 3:
                db.query('SELECT * FROM SinhVien WHERE MaSv = ? ', [req.session.Username], (error, rows) => {
                    if(error){
                        res.render('home/index');
                        return;
                    }
                    res.render('homeLogin/index', {
                        name: rows[0].HoTen
                    });
                });
                break;
            default:
                res.render('home/index');
        }
        return;
    }
    res.render('home/index');
});
module.exports = router;
