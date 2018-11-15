var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");
var mongo = require("mongodb");

// app.set("views", "views");
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
app.get("/demo", function(req, res){
	res.sendFile(__dirname+"/views/demo.html");
});

app.post("/test", function(req, res){
	console.log(req.body);
	res.send({ city : "ujjain"});
});




app.post("/getdata", function(req, res){
	MongoClient.connect("mongodb://localhost:27017", function(err, client){
		var db = client.db("tss5");
		db.collection("student").insert(req.body,function(err, result){
			console.log(result);
			res.send(result.ops[0]);
		});
	});
});

app.post("/deletestudent", function(req, res){
	console.log(req.body);
	var id = req.body._id;
	MongoClient.connect("mongodb://localhost:27017", function(err, client){
		var db = client.db("tss5");
		db.collection("student").remove({ _id : mongo.ObjectId(id) },function(err, result){
			// console.log(result);
			res.send(result);
		});
	});
});


app.post("/updatestudent", function(req, res){
	var id = req.body._id;
	delete req.body._id;
	MongoClient.connect("mongodb://localhost:27017", function(err, client){
		var db = client.db("tss5");
		db.collection("student").update({ _id : mongo.ObjectId(id) },{ $set : req.body },function(err, result){
			// console.log(result);
			res.send(result);
		});
	});
});






app.listen(3000, function(){
	console.log("Server Running");
});