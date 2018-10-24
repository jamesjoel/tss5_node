var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());

app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});

app.get("/getdata", function(req, res){
	MongoClient.connect("mongodb://localhost:27017", function(err, client){
		var db = client.db("tss5");
		db.collection("student").find({}).toArray(function(err, result){
			res.send(result);
		});
	});
});

app.post("/getdata", function(req, res){
	MongoClient.connect("mongodb://localhost:27017", function(err, client){
		var db = client.db("tss5");
		db.collection("student").insert(req.body,function(err, result){
			console.log(result);
		});
	});
});


app.listen(3000, function(){
	console.log("Server Running");
});