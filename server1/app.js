var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";


app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home", { list : ""});
});
app.get("/search", function(req, res){
	// req.host();
	var city = req.query.city;
	MongoClient.connect(url, function(err, client){
		var db = client.db("tss5");
		db.collection('hotels').find( { city : city }).toArray(function(err, result){
			console.log(result);
			// res.render("home", { list : result });
			res.send(result);
		});
	});
});


var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("Server Running on ", port);
});

