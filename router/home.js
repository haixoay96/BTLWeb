var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {
    console.log(req.session);
    if(req.session.username){
        res.render('homeLogin/index', {
            username: req.session.username
        });
        return;
    }
    res.render('home/index');
});
module.exports = router;
