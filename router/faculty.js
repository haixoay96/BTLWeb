var express = require('express');
var router = express.Router();
router.use('/', (req, res)=>{
    res.render('indexFaculty');
});
module.exports = router;
