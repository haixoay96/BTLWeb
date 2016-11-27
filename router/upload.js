var express = require('express');
var router = express.Router();
node_xj = require("xls-to-json");
var formidable = require('formidable');
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

    form.on('file', function(name, file) {
        console.log('Uploaded ' + file.name);
        console.log(file.path);
        node_xj({
            input: file.path, // input xls
            output: "output.json"
        }, function(err, result) {
            if (err) {
                console.error(err);
            } else {
                res.json(result);            
                console.log(result);
            }
        })

    });

});
module.exports = router;
/*excel2Json('sample.xls', function(err, output) {

});

excel2Json('../test/sample.xls', {
    'convert_all_sheet': false,
    'return_type': 'File',
    'sheetName': 'survey'
}, function(err, output) {

});*/
