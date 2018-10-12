var express = require('express');
var routes = express.Router();
var user = require("../models/user");
var sha1 = require("sha1");




routes.get("/", function(req, res){
	var pageData = { title : "Signup Page", pagename : "signup/index", msg : req.flash("msg")};
	res.render("layout", pageData);
	// res.render("home/index");
});

routes.post("/", function(req, res){
	var obj = req.body;
	obj.color = "#FAFAFA";
	var where = { username : obj.username };
	user.find(where, function(err, result){
		console.log(result.length);
		if(result.length==0)
		{
			obj.password = sha1(obj.password);
			user.insert(obj, function(err, result){
				
				req.flash("msg", "Successful Signup, Pls Login Here...");
				res.redirect("/login");
			});
		}
		else
		{
			req.flash("msg", "This username Already Exists");
			res.redirect("/signup");
		}

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