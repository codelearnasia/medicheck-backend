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
	getMatchStats : (req,res,next) => {
    let params = req.query;
    if(!params.matchId) return res.status(400).send('Match ID is required in getting the live text');
    if(!params.matchLink) return res.status(400).send('Match LINK is required in getting the live text');
    console.log('Params:',params);
    redisClient.get(`matchStats:${params.matchId}`)
     .then(results => {
       if(!results || results == '[]'){
          publisher.publish('scrape',JSON.stringify({to:'liveMatch',type:'matchStats',matchId:params.matchId,matchLink:params.matchLink}));
          return res.send({matchStats:[]});
       }else{
          res.send({matchStats:JSON.parse(results)});
       }
     })
     .catch((err) => {
       console.log('Err:',err);
       res.status(400).send(err);
     });
  },	
  getAllPharmacies : (req,res,next) => {
    let params = req.query;
	return res.send({data:[
	  {
	    pharmacy: "Raffles Pharmacy",
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
	    pharmacy: "Stamford Pharmacy",
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