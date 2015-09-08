var express = require('express');
var router = express.Router();

var mytitle="פח חכם - מטבח חכם";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: mytitle, currentpage: 'Home' });
});

router.get('/code', function(req, res, next) {
  res.render('code', { title: mytitle, currentpage: 'Code' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: mytitle, currentpage: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: mytitle, currentpage: 'Contact' });
});

module.exports = router;
