var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {
    res.render('Faculty/Faculty');
});
router.get('/views/course', (req,res)=>{
    res.render('Faculty/views/course');
});
router.get('/views/courseprogram', (req,res)=>{
    res.render('Faculty/views/courseprogram');
});
router.get('/views/dissertation', (req,res)=>{
    res.render('Faculty/views/dissertation');
});
router.get('/views/home', (req,res)=>{
    res.render('Faculty/views/home');
});
router.get('/views/lecturer', (req,res)=>{
    res.render('Faculty/views/lecturer');
});
router.get('/views/register_dissertation', (req,res)=>{
    res.render('Faculty/views/register_dissertation');
});
router.get('/views/students', (req,res)=>{
    res.render('Faculty/views/students');
});
module.exports = router;
