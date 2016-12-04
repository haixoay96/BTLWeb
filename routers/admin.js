var express = require('express');
var router = express.Router();
var path = require('path');
router.get('/faculty', (req, res) => {
	res.render('admin/faculty');
});
router.get('/lecturer', (req,res)=>{
	res.render('admin/lecturer');
});
router.get('/student', (req, res)=>{
	res.render('admin/student');
});
module.exports = router;
