var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            console.log('Error system!');
            res.end('Error system, try agian!');
            return;
        }
        res.redirect('/');
    });
});
module.exports = router;
