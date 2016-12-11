var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../utils/db.js').db;
router.get('/', (req, res) => {
    if (req.session.Username) {
        var Type = req.session.Type;
        console.log(Type);
        switch (Type) {
            case 1:
                db.query('SELECT * FROM Khoa WHERE MaKhoa = ? ', [req.session.Username], (error, rows) => {
                    res.render('admin/faculty', {
                        khoa:
                    });
                });
                break;
            case 2:
                res.render('admin/lecturer');
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
module.exports = router;
