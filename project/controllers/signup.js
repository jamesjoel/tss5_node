var express = require('express');
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;

var config = require("../config/config");



routes.get("/", function(req, res){
	var pageData = { title : "Signup Page", pagename : "signup/index"};
	res.render("layout", pageData);
	// res.render("home/index");
});

routes.post("/", function(req, res){
	var obj = req.body;
	MongoClient.connect(config.url, function(err, client){
		var db = client.db(config.database);
		db.collection("user").insert(obj, function(err, result){
			console.log(result);
			res.redirect("/login");
		});
	});
});

module.exports=routes;