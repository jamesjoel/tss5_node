var express = require('express');
var routes = express.Router();
var admin = require("../../models/admin");

routes.get("/", function(req, res){
	var pageData = { title : "Admin Login Page", pagename : "admin/login/index", msg : req.flash("msg")};
	res.render("admin_layout", pageData);

});


// routes.post("/", function(req, res){
// 	// console.log(req.body);
// 	var obj = req.body;
// 	admin.find({ username : obj.username }, function(err, result){
// 		if(result.length==0)
// 		{
// 			req.flash("msg", "This username and password not matched");
// 			res.redirect("/admin/login");
// 		}
// 		else
// 		{
// 			if(result[0].password == obj.password)
// 			{
// 				req.session.is_admin_logged_in=true;
// 				res.redirect("/admin/dashboard");
// 			}
// 			else
// 			{
// 				req.flash("msg", "This password not matched");
// 				res.redirect("/admin/login");		
// 			}
// 		}
// 	});

// });

// For AJAX Request

routes.post("/", function(req, res){
	console.log(req.body);
	
	var obj = req.body;
	admin.find({ username : obj.username }, function(err, result){
		if(result.length==0)
		{
			res.send("1"); //This username and password not matched
		}
		else
		{
			if(result[0].password == obj.password)
			{
				req.session.is_admin_logged_in=true;
				res.send("3");
			}
			else
			{
				res.send("2"); // wrong password
			}
		}
	});

});




module.exports=routes;