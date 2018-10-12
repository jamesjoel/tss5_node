var express = require('express');
var routes = express.Router();
var user = require("../models/user");

routes.get("/", function(req, res)
{
	//var pageData= {name:"Signup",Pagename:"signup"};
	res.send("home");
});
routes.post("/",function(req, res){
var obj = req.body;
user.insert(obj, function(err, result){
				
				req.flash("msg", "Successful Signup, Pls Login Here...");
				res.redirect("/login");
			});
});

module.exports=routes;