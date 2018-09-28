var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";




app.get("/", function(req, res){
	MongoClient.connect(url, function(err, client){
		var db = client.db("tss5");
		// db.collection("student").count(function(err, result){
		// 	console.log(result);
		// });
		db.collection("student").find({city : "indore"}).count(function(err, result){
			console.log(result);
		});
	});

});


app.listen(3000, function(){
	console.log("Server Running");
});