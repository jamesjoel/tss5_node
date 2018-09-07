var express = require('express');
var routes = express.Router();
var user = require("../models/user");





routes.get("/", function(req, res){
	var pageData = { title : "Signup Page", pagename : "signup/index"};
	res.render("layout", pageData);
	// res.render("home/index");
});

routes.post("/", function(req, res){
	var obj = req.body;
	user.insert(obj, function(err, result){
		res.redirect("/login");
	});
});

module.exports=routes;















	// MongoClient.connect(config.url, function(err, client){
	// 	var db = client.db(config.database);
	// 	db.collection("user").insert(obj, function(err, result){
	// 		console.log(result);
	// 		res.redirect("/login");
	// 	});
	// });