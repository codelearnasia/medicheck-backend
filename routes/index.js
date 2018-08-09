var express = require('express');
var router = express.Router();

let PharmacyController = require('../api/pharmacies.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mediccheck CodeLearn' });
});

/* GET ALL PHARMACIES*/
router.get('/api/v1/getAllPharmacies', PharmacyController.getAllPharmacies);

/* GET 5 closest PHARMACIES*/
router.get('/api/v1/getClosestPharmacies', PharmacyController.getAllPharmacies);

/* GET AllPharmacies with Medicine*/
router.get('/api/v1/getMedicines', PharmacyController.getAllPharmacies);

module.exports = router;
