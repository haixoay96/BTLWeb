var express = require('express');
var router = express.Router();
var node_xj = require("xls-to-json");
var formidable = require('formidable');
var db = require('../utils/db.js').db;
var async = require('async');
var send = require('../utils/sendMail.js').send;
router.get('/', (req, res) => {
    //res.send('ok');
    res.redirect('/upload.html');
});
router.post('/lecturer', (req, res) => {
    console.log('upload');
    if (req.session.Username) {
        var form = new formidable.IncomingForm();
        form.parse(req);
        form.on('fileBegin', function(name, file) {
            file.path = __dirname + '/../uploads/' + file.name;
        });
        async.waterfall([
            (callback) => {
                form.on('file', (name, file) => {
                    console.log('Uploaded ' + file.name);
                    console.log(file.path);
                    callback(null, file.path);
                });
            },
            (path, callback) => {
                console.log(path);
                node_xj({
                    input: path,
                    output: 'output.json'
                }, (err, result) => {
                    if (err) {
                        console.error(err);
                        callback(err);
                        return;
                    }
                    console.log(result);
                    res.redirect('/admin');
                    callback(null, result);
                })
            }
        ], (err, result) => {
            async.every(result, (item, callback) => {
                console.log(item);
                async.waterfall([
                    (callback) => {
                        if (item.MaGv !== '') {
                            db.query('INSERT INTO User (Username, Password, Type) VALUES (?,?,?)', [item.MaGv, '123456', 2], (err, rows) => {
                                if (err) {
                                    callback(err);
                                    return;
                                }
                                callback(null, rows);
                            });
                        }
                    }
                ], (error, result) => {
                    db.query('INSERT INTO GiangVien (MaGv, HoTen , MaKhoa, Email) VALUES (?,?,?,?)', [item.MaGv, item.HoTen, req.session.Username, item.Email], (err, rows) => {
                        if (err) {
                            callback(err);
                            return;
                        }
                        var mailOptions = {
                            from: '"Admin !" <koolsok96@gmail.com>', // sender address
                            to: item.Email, // list of receivers
                            subject: 'Get start!', // Subject line
                            text: 'Username:' + item.MaGv + ' password:123456', // plaintext body
                            html: '<b>' + 'Username:' + item.MaGv + ' password:123456' + '</b>' // html body
                        };
                        send(mailOptions);
                        callback(null, rows);
                    });
                });

            }, (err, result) => {
                if (err) {
                    console.log(1);
                    console.log(err);
                    return;
                }
                console.log(result);
            });
        });
    }
});
router.post('/student', (req, res) => {
    console.log('upload');
    if (req.session.Username) {
        var form = new formidable.IncomingForm();
        form.parse(req);
        form.on('fileBegin', function(name, file) {
            file.path = __dirname + '/../uploads/' + file.name;
        });
        async.waterfall([
            (callback) => {
                form.on('file', (name, file) => {
                    console.log('Uploaded ' + file.name);
                    console.log(file.path);
                    callback(null, file.path);
                });
            },
            (path, callback) => {
                console.log(path);
                node_xj({
                    input: path,
                    output: 'output.json'
                }, (err, result) => {
                    if (err) {
                        console.error(err);
                        callback(err);
                        return;
                    }
                    console.log(result);
                    res.redirect('/admin');
                    callback(null, result);
                })
            }
        ], (err, result) => {
            async.every(result, (item, callback) => {
                console.log(item);
                async.waterfall([
                    (callback) => {
                        db.query('INSERT INTO User (Username, Password, Type) VALUES (?,?,?)', [item.MaSv, '123456', 3], (err, rows) => {
                            if (err) {
                                callback(err);
                                return;
                            }
                            callback(null, rows);
                        });
                    }
                ], (error, result) => {
                    db.query('INSERT INTO SinhVien (MaSv, HoTen ,MaKh, MaNganh , Email,Dk) VALUES (?,?,?,?,?,?)', [item.MaSv, item.HoTen, item.MaKh, item.MaNganh, item.Email, '0'], (err, rows) => {
                        if (err) {
                            callback(err);
                            return;
                        }
                        var mailOptions = {
                            from: '"Admin !" <koolsok96@gmail.com>', // sender address
                            to: item.Email, // list of receivers
                            subject: 'Get start!', // Subject line
                            text: 'Username:' + item.MaSv + ' password:123456', // plaintext body
                            html: '<b>' + 'Username:' + item.MaSv + ' password:123456' + '</b>' // html body
                        };
                        send(mailOptions);
                        callback(null, rows);
                    });
                });
            }, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            });
        });
    }
});

router.post('/detai', (req, res) => {
    console.log('upload');
    if (req.session.Username) {
        var form = new formidable.IncomingForm();
        form.parse(req);
        form.on('fileBegin', function(name, file) {
            file.path = __dirname + '/../uploads/' + file.name;
        });
        async.waterfall([
            (callback) => {
                form.on('file', (name, file) => {
                    console.log('Uploaded ' + file.name);
                    console.log(file.path);
                    callback(null, file.path);
                });
            },
            (path, callback) => {
                console.log(path);
                node_xj({
                    input: path,
                    output: 'output.json'
                }, (err, result) => {
                    if (err) {
                        console.error(err);
                        callback(err);
                        return;
                    }
                    console.log('Duoc dk');
                    console.log(result);
                    res.json(result);
                    callback(null, result);
                })
            }
        ], (err, result) => {
            async.every(result, (item, callback) => {
                console.log(item);
                db.query('UPDATE SinhVien SET Dk = ? WHERE MaSv = ?', ['1', item.MaSv], (error, rows) => {
                    if (error) {
                        callback(error);
                        return;
                    }
                    var mailOptions = {
                        from: '"Admin !" <koolsok96@gmail.com>', // sender address
                        to: item.Email, // list of receivers
                        subject: 'Mở đăng ký!', // Subject line
                        text: 'Bạn đủ điều kiện đăng ký khoa luận vui lòng vào đăng ký!', // plaintext body
                        html: '<b>' + 'Bạn đủ điều kiện đăng ký khoa luận vui lòng vào đăng ký!' + '</b>' // html body
                    };
                    send(mailOptions);
                    callback(null, rows);
                });

            }, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            });
        });
    }
});

module.exports = router;
