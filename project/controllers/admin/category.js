var express = require('express');
var routes = express.Router();
var category = require("../../models/category");

routes.get("/", function(req, res){
	var pageData = { title : "Add Category", pagename : "admin/category/index", msg : req.flash("msg")};
	res.render("admin_layout", pageData);
	// res.render("home/index");
});
routes.post("/", function(req, res){
	// console.log(req.body);
	category.insert(req.body, function(err, result){
		console.log(result);
		req.flash("msg", "Category Added !");
		res.redirect("/admin/add_category");
	});
});






module.exports=routes;