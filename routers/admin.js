var express = require('express');
var router = express.Router();
var path = require('path');
var list = ['', 'student', 'lecturer', 'faculty'];
router.get('/', (req, res) => {
	if (req.session.username) {
		var type = req.session.type;
		console.log(type);
		switch (type) {
			case 1:
				res.render('admin/student');
				break;
			case 2:
				res.render('admin/lecturer');
				break;
			case 3:
				res.render('admin/faculty');
				break
			default:
				res.redirect('/');
		}

	}
});
module.exports = router;
