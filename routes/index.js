var express = require('express');
var router = express.Router();

let PharmacyController = require('../api/pharmacies.js');

let MedicineController = require('../api/medicines.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mediccheck CodeLearn' });
});

//Get medicines and pharmacy quanitity
router.get('/health_check', function(req, res, next) {
	res.send({"statusCode":200})
});

// v1 - hardcoded //

/* GET ALL PHARMACIES*/
router.get('/api/v1/getAllPharmacies', PharmacyController.getAllPharmacies);

/* GET 5 closest PHARMACIES*/
router.get('/api/v1/getClosestPharmacies', PharmacyController.getAllPharmacies);

/* GET AllPharmacies with Medicine*/
router.get('/api/v1/getAllMedicines', MedicineController.getMedicinePharmacies);

/* GET Single Medicine and Pharmacies that have it*/
router.get('/api/v1/getSingleMedicine/:medicineName', MedicineController.getSingleMedicine);

//Get medicines and pharmacy quanitity
router.get('/api/v1/getAllStock', MedicineController.getAllStock);


// v2 - from Database //

/* GET ALL PHARMACIES*/
router.get('/api/v2/getAllPharmacies', PharmacyController.getAllDbPharmacies);


module.exports = router;
