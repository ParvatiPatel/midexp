var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET people page. */
router.get('/people', function(req, res, next) {
  res.render('people', { title: 'People I like' });
});

module.exports = router;
