var express = require('express');
var router = express.Router();
var path = require('path');
var list = ['', 'student', 'lecturer', 'faculty'];
router.get('/', (req, res) => {
	if (req.session.Username) {
		var Type = req.session.Type;
		console.log(Type);
		switch (Type) {
			case 1:
				res.render('admin/faculty');
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
