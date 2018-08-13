let  MedicineController = {
	getAllStock:(req,res,next)=>{
	let params = req.query;
	return res.send({
	data:[
    {
        "Clinics": "Raffles Pharmacy",
        "Medicine": {
            "Panadol": "5",
            "Oral Sodium Phosphates": "10",
            "Chlorpheniramine": "5",
            "Dextromethorphan": "3",
            "Pholcodine": "7",
            "Lidocaine": "6",
            "Xylometazoline": "3"
        }
    },
    {
        "Clinics": " Guardian Pharmacy -Kim San Leng",
        "Medicine": {
            "Panadol": "3",
            "Betadine": "5",
            "Mentholatum": "7",
            "BIOGAIA": "3",
            "Oral Sodium Phosphates ": "8",
            "Chlorpheniramine": "2",
            "Dextromethorphan": "8",
            "Pholcodine": "2",
            "Lidocaine": "1"
        }
    },
    {
        "Clinics": "Unity Pharmacy -Bedok",
        "Medicine": {
            "Panaodl": "5",
            "Betadine": "4",
            "Mentholatum": "3",
            "Oral Sodium Phosphates": "3",
            "Chlorpheniramine": "6",
            "Dextromethorphan": "4",
            "Pholcodine": "3",
            "Lidocaine": "2"
        }
    },
    {
        "Clinics": "Guardian Singapore",
        "Medicine": {
            "Panadol": "4",
            "Betadine": "3",
            "Oral Sodium Phosphates": "2",
            "Chlorpheniramine": "6",
            "Dextromethorphan": "2",
            "Pholcodine": "5",
            "Lidocaine": "7"
        }
    },
    {
        "Clinics": "Unity Pharmacy -White Sand Shopping Centre",
        "Medicine": {
            "Panadol": "2",
            "Betadine": "6",
            "Mentholatum": "5",
            "Oral Sodium Phosphates": "5",
            "Chlorpheniramine": "4",
            "Dextromethorphan": "4",
            "Pholcodine": "4",
            "Lidocaine": "4"
        }
    },
    {
        "Clinics": "Unity Pharmacy",
        "Medicine": {
            "Panadol": "1",
            "Betadine": "7",
            "Mentholatum": "4",
            "Oral Sodium Phosphates": "3",
            "Chlorpheniramine": "5",
            "Dextromethorphan": "4",
            "Pholcodine": "8",
            "Lidocaine": "3"
        }
    },
    {
        "Clinics": "Guardian",
        "Medicine": {
            "Panadol": "4",
            "Betadine": "6",
            "BIOGAIA": "4",
            "Oral Sodium Phosphates": "5",
            "Chlorpheniramine": "3",
            "Dextromethorphan": "5",
            "Pholcodine": "8",
            "Lidocaine": "4",
            "Xylometazoline": "8"
        }
    },
    {
        "Clinics": "Avicenna Pharmacy",
        "Medicine": {
            "Panadol": "4",
            "BIOGAIA": "5",
            "MAXIGESIC": "7",
            "Oral Sodium Phosphates": "4",
            "Chlorpheniramine ": "6",
            "Dextromethorphan": "6",
            "Pholcodine": "7"
        }
    },
    {
        "Clinics": "Essential Pharmacy",
        "Medicine": {
            "Panadol": "7",
            "BIOGAIA": "7",
            "MAXIGESIC": "8",
            "Oral Sodium Phosphates": "9",
            "Chlorpheniramine": "5",
            "Dextromethorphan": "5",
            "Pholcodine": "7"
        }
    },
    {
        "Clinics": "Orchard Pharmacy",
        "Medicine": {
            "Panadol": "6",
            "BIOGAIA": "6",
            "MAXIGESIC": "9",
            "Oral Sodium Phosphates": "7",
            "Chlorpheniramine": "7"
        }
    },
    {
        "Clinics": "Discharge Pharmacy",
        "Medicine": {
            "Panadol": "7",
            "BIOGAIA": "8",
            "MAXIGESIC": "5",
            "Oral Sodium Phosphates": "7",
            "Chlorpheniramine": "9"
        }
    },
    {
        "Clinics": "Stamford Pharmacy",
        "Medicine": {
            "Panadol": "9",
            "BIOGAIA": "6",
            "MAXIGESIC": "7",
            "Oral Sodium Phosphates": "7",
            "Chlorpheniramine": "7",
            "Dextromethorphan": "6",
            "Pholcodine": "8",
            "Lidocaine": "8",
            "Xylometazoline": "9"
        }
    }
]
});
},

getMedicinePharmacies:(req,res,next)=>{

let params = req.query;

return res.send({
	data:[
	{medicine : "Triptal",
	Pharmacy:[
	{name:"Raffles Pharmacy",quant:50},
	{name:"Stamford Pharmacy",quant:70}
	],
	id:0
	},
	{
	medicine :"Adderall",
	Pharmacy:[
	{name:"Raffles Pharmacy",quant:100},
	{name:"Stamford Pharmacy",quant:80}
	],
	id:1
	},
	{
	medicine:"Amphetamine",
	Pharmacy:[
	{name:"Raffles Pharmacy",quant:70},
	{name:"Stamford Pharmacy",quant:60}
	],
	id:2
	}
	]
	})
}
};

module.exports = MedicineController;

