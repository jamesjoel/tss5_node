var express = require('express');
var routes = express.Router();
var product = require("../../models/product");
var category = require("../../models/category");

routes.get("/", function(req, res){
	product.find({}, function(err, result){
		var pageData = { title : "View Product", pagename : "admin/product/index", result : result};
		res.render("admin_layout", pageData);
	});	


	// res.render("home/index");
});
routes.get("/add", function(req, res){
	category.find({}, function(err, result){

		var pageData = { title : "Add Product", pagename : "admin/product/add", msg : req.flash("msg"), result : result};
		res.render("admin_layout", pageData);
	});
});



routes.post("/add", function(req, res){
	console.log(req.body);
	// var obj = {};
	// obj.product_name = req.body.name;

	product.insert(req.body, function(err, result){
		console.log(result);
		req.flash("msg", "Product Added !");
		res.redirect("/admin/product/add");
	});
});






module.exports=routes;