var express = require('express');
var routes = express.Router();
var category = require("../../models/category");
var mongo = require("mongodb");

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
	var io = res.set.io;






	category.insert(req.body, function(err, result){
		console.log(result.ops[0]);

		io.emit("category", result.ops[0]);


		req.flash("msg", "Category Added !");
		res.redirect("/admin/category/add");
	});
});

routes.post("/update", function(req, res){
	// console.log(req.body);
	var id = req.body.id;
	category.update({ _id : mongo.ObjectId(id)}, req.body, function(err, result){
		console.log(result);
		
		res.redirect("/admin/category");
	});
});


routes.get("/edit/:id", function(req, res){
	var id = req.params.id;
	category.find({ _id : mongo.ObjectId(id)}, function(err, result){
		console.log(result[0]);
		var pageData = { title : "Add Category", pagename : "admin/category/add", msg : req.flash("msg"), result : result[0]};
		res.render("admin_layout", pageData);

	});
});


routes.get("/delete/:id", function(req, res){
	var id = req.params.id;
	category.delete({ _id : mongo.ObjectId(id)}, function(err, result){
		res.redirect("/admin/category");	
	});
});





module.exports=routes;