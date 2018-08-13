var express = require('express');
var router = express.Router();

let PharmacyController = require('../api/pharmacies.js');

let MedicineController = require('../api/medicines.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mediccheck CodeLearn' });
});

/* GET ALL PHARMACIES*/
router.get('/api/v1/getAllPharmacies', PharmacyController.getAllPharmacies);

/* GET 5 closest PHARMACIES*/
router.get('/api/v1/getClosestPharmacies', PharmacyController.getAllPharmacies);

/* GET AllPharmacies with Medicine*/
router.get('/api/v1/getAllMedicines', MedicineController.getMedicinePharmacies);

//Get medicines and pharmacy quanitity
router.get('/api/v1/getAllStock', MedicineController.getAllStock);

module.exports = router;


