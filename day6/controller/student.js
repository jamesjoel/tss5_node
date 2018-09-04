var express = require('express');
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;


var url = "mongodb://localhost:27017";


// MongoClient.connect(url, function(err, client){
// 	if(err){
// 		console.log("Error in Connect", err);
// 		return;
// 	}
// 	var db = client.db("tss5");
// 	db.collection("student").find().toArray(function(err, result){
// 		if(err){
// 			console.log("Error in Query", err);
// 			return;
// 		}
// 		console.log(result);
// 	});


// });




routes.get("/", function(req, res){
	MongoClient.connect(url, function(err, client){
		if(err){
			console.log("Error in Connect", err);
			return;
		}
		var db = client.db("tss5");
		db.collection("student").find().toArray(function(err, result){
			if(err){
				console.log("Error in Query", err);
				return;
			}
			console.log(result);
			var pageData = {title : "Student", pagename : "student/index", data : result};
			res.render("layout", pageData);
		});


	});


});

routes.post("/", function(req, res){
	var obj = req.body;
	/*
	var obj = {};
	obj.name = req.body.stu_name;
	obj.fee = req.body.stu_fee;
	obj.city = req.body.stu_city;


	*/


	MongoClient.connect(url, function(err, client){
		var db = client.db("tss5");
		db.collection("student").insert(obj, function(err, result){
			if(err){
				console.log("Error in Insert", err);
				return;
			}
			console.log(result);
			res.redirect("/student");
		});
	});
});





module.exports=routes;