var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var async = require('async');
var db = require('../utils/db.js').db;

router.get('/:id', (req, res) => {
    var MaLv = req.params.id;
    async.parallel({
        one: (callback) => {
            db.query('SELECT TenLv FROM LinhVuc WHERE MaLv=? ', [MaLv], (error, rows) => {
                if (error) {
                    callback(error);
                    return;
                }
                callback(null, rows);
            });
        },
        two: (callback) => {
            db.query('SELECT GiangVien.MaGv AS MaGv ,GiangVien.HoTen AS HoTen FROM GiangVien JOIN Lv_Gv ON GiangVien.MaGv=Lv_Gv.MaGv JOIN LinhVuc ON LinhVuc.MaLv = Lv_Gv.MaLv AND LinhVuc.MaLv =?', [MaLv], (error, rows) => {
                if (error) {
                    callback(error);
                    return;
                }
                callback(null, rows);
            });
        }
    }, (error, result) => {
        if(error){
            console.log(error);
            res.end('Lôi hệ thống thử lại sau!');
            return;
        }
        res.render('common/detail', {
            TenLv : result.one[0].TenLv,
            gvs: result.two
        });
    })
})
module.exports = router;
