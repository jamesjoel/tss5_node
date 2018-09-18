var express = require('express');
var routes = express.Router();
var category = require("../../models/category");

routes.get("/", function(req, res){
	category.find({}, function(err, result){
		var pageData = { title : "View Category", pagename : "admin/category/index", result : result};
		res.render("admin_layout", pageData);
	});	


	// res.render("home/index");
});
routes.get("/add", function(req, res){
	var pageData = { title : "Add Category", pagename : "admin/category/add", msg : req.flash("msg")};
	res.render("admin_layout", pageData);
	// res.render("home/index");
});



routes.post("/add", function(req, res){
	// console.log(req.body);
	category.insert(req.body, function(err, result){
		console.log(result);
		req.flash("msg", "Category Added !");
		res.redirect("/admin/add_category");
	});
});






module.exports=routes;