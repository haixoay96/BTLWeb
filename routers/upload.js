var express = require('express');
var router = express.Router();
var node_xj = require("xls-to-json");
var formidable = require('formidable');
var async = require('async');
router.get('/', (req, res) => {
    //res.send('ok');
    res.redirect('/upload.html');
});
router.post('/', function(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function(name, file) {
        file.path = __dirname + '/../uploads/' + file.name;
    });
    async.waterfall([
        (callback) => {
            form.on('file', (name, file) => {
                console.log('Uploade ' + file.name);
                console.log(file.path);
                callback(null, file.path);
            });
        },
        (path, callback) => {
            node_xj({
                input: path
            }, (err, result) => {
                if (err) {
                    console.error(err);
                    callback(err);
                    return;
                }
                console.log(result);
                res.json(result);
                callback(null, result);
            });
        }
    ], (err, result) => {
        //up date to database
        //send mail
    });
});

module.exports = router;
