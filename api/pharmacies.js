var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'medicheck1234',
  database : 'medicheck',
  insecureAuth: true
});


let PharmacyController = {
	getAllPharmacies : (req,res,next) => {
    let params = req.query;
	return res.send({data:[
      {
       "name": "Raffles Pharmacy",
        "address": {
          "postalcode": "048942",
          "street": "63 Market Street"
        },
        "GEO": {
            "lat": 1.2841647,
            "lng": 103.8502117
        },
        "id": 0
      },
      {
       "name": "Stamford Pharmacy",
        "address": {
          "postalcode": "178905",
          "street": "15 Stamford Road"
        },
        "GEO":{
            "lat": 1.2939789,
            "lng": 103.8506287
        },
        "id": 1
      },
      {
        "name": "Guardian Pharmacy -Kim San Leng",
         "address": {
           "postalcode": "048618",
           "street": "#B1-37-40 /43-45, 5 Raffles Place, Raffles Place MRT"
         },
         "GEO":{
             "lat": 1.283930, 
             "lng": 103.851464
         },
         "id": 2
       },
       {
        "name": "Discharge Pharmacy",
         "address": {
           "postalcode": "169854",
           "street": "16 College Road , Block 8 Level 2, Singapore General Hospital"
         },
         "GEO":{
             "lat":1.2791572, 
             "lng": 103.8342762
         },
         "id": 3
       },
       {
        "name": "Orchard Pharmacy",
         "address": {
           "postalcode": "238875",
           "street": "400 Orchard Road"
         },
         "GEO":{
             "lat":1.3070129, 
             "lng": 103.8291585
         },
         "id": 4
       },
       {
        "name": "Essential Pharmacy",
         "address": {
           "postalcode": "058357",
           "street": "101 Upper Cross St #01-23 People's Park Centre"
         },
         "GEO":{
             "lat":1.2853033, 
             "lng": 103.8439643
         },
         "id": 5
       },
       {
        "name": "Unity Pharmacy -Bedok",
         "address": {
           "postalcode": "460212",
           "street": "212 Bedok North Street 1"
         },
         "GEO":{
             "lat":1.3260623, 
             "lng": 103.9315177
         },
         "id": 6
       },
       {
        "name": "Guardian Singapore",
         "address": {
           "postalcode": "467360",
           "street": "311 New Upper Changi Road #01-175"
         },
         "GEO":{
             "lat":1.324674, 
             "lng": 103.929498
         },
         "id": 7
       },
       {
        "name": "Unity Pharmacy -White Sand Shopping Centre",
         "address": {
           "postalcode": "518457",
           "street": "1 Pasir Ris Central Street 3"
         },
         "GEO":{
             "lat":1.3725535,
             "lng": 103.9499384 
         },
         "id": 8
       },
       {
        "name": "Unity Pharmacy",
         "address": {
           "postalcode": "820168",
           "street": "BLk 168 Punngol Field, #03-01/02 Punggol Plaza" 
         },
         "GEO":{
             "lat":1.3941766,
             "lng": 103.9130419 
         },
         "id": 9
       },
       {
        "name": "Guardian",
         "address": {
           "postalcode": "731678",
           "street": "#01, Admiralty Place, 39 Woodlands Avenue 6, blk 678a"
         },
         "GEO":{
             "lat":1.439905,
             "lng": 103.8015425 
         },
         "id": 10
       },
       {
        "name": "Avicenna Pharmacy",
         "address": {
           "postalcode": "730547",
           "street": "548 Woodlands Drive 44"
         },
         "GEO":{
             "lat":1.4305524,
             "lng": 103.7939197 
         },
         "id": 11
       }
    ]});
  },	
  getClosestPharmacies : (req,res,next) => {
    let params = req.query;

	return res.send({data:[
	  {
	    name: "Raffles Pharmacy",
	    address: {
	      postalcode: 1234,
	      street: "Raffles Street"
	    },
	    medicine: [
	      { name: "Triptal", quant: 50 },
	      { name: "Adderall", quant: 100 },
	      { name: "Amphetamine", quant: 70 }
	    ],
	    id: 0
	  },
	  {
	    name: "Stamford Pharmacy",
	    address: {
	      postalcode: 2345,
	      street: "Stamford Street"
	    },
	    medicine: [
	      { name: "Triptal", quant: 70 },
	      { name: "Adderall", quant: 80 },
	      { name: "Amphetamine", quant: 60 }
	    ],
	    id: 1
	  },
	]});
  },
  getDbPharmacies : (req,res,next) => {
  connection.connect()
    connection.query('SELECT * FROM medicheck.pharmacies', function (err, rows, fields) {
      if (err) throw err
        res.send({data:rows[0]});
    })
  connection.end()
  }
};

module.exports = PharmacyController;