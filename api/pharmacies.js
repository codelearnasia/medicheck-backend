/*var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'medicheck_db'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err
  console.log('The solution is: ', rows[0].solution)
})

connection.end()
*/

let PharmacyController = {
	getAllPharmacies : (req,res,next) => {
    let params = req.query;
	return res.send({data:[
	  {
	    name: "Raffles Pharmacy",
	    address: {
	      postalcode: 048942,
	      street: "63 Market Street"
	    },
	    GEO: {
	    	lat: 1.2841647,
	    	lng: 103.8502117
	    },
	    id: 0
	  },
	  {
	    name: "Stamford Pharmacy",
	    address: {
	      postalcode: 178905,
	      street: "15 Stamford Road"
	    },
	    GEO:{
	    	lat: 1.2939789,
	    	lng: 103.8506287
	    },
	    id: 1
	  },
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
  }
};

module.exports = PharmacyController;