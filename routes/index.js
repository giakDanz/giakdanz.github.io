var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/esika', function(req, res, next) {
  res.render('esika', { title: 'Esika!' });
});

module.exports = router;
