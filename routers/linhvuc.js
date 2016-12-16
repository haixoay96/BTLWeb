var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../utils/db').db;
var async = require('async');

router.get('/', (req, res) => {
    db.query('SELECT MaLv, TenLv FROM LinhVuc', (error, rows) => {
        if (error) {
            return;
        }
        res.render('common/linhvuc',{
            lvs: rows
        })
    });
});
module.exports = router;
