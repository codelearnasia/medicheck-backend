var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Eddie' });
});

/* GET ALL PHARMACIES*/

router.get('/api/v1/getAllPharmacies', function(req, res, next) {
  res.render('index', { title: 'we need to do some work here' });
});


module.exports = router;
