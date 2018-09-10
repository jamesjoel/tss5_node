var express = require('express');
var routes = express.Router();
var user = require("../models/user");

routes.get("/", function(req, res){
	var pageData = { title : "Login Page", pagename : "login/index", msg : req.flash("msg")};
	res.render("layout", pageData);
	// res.render("home/index");
});


routes.post("/", function(req, res){
	// console.log(req.body);
	var where = { username : req.body.username };
	user.find(where, function(err, result){
		if(result.length==0)
		{
			req.flash("msg", "This Username is Incorrect");
			res.redirect("/login");
		}
		else
		{
			if(result[0].password == req.body.password)
			{
				req.session.full_name = result[0].name;
				res.redirect("/dashboard");
			}
			else
			{
				req.flash("msg", "This Username And Password is Incorrect");
				res.redirect("/login");
			}
		}
	});
});


module.exports=routes;