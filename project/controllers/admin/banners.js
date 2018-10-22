var express = require('express');
var routes = express.Router();
var banners = require("../../models/banners");
var changename = require("../../helpers/changename");
var path = require("path");
// var mongo = require("mongodb");




routes.get("/", function(req, res){
	banners.find({}, function(err, result){

		var pageData = { title : "View Banners", pagename : "admin/banners/index", result : result};
		res.render("admin_layout", pageData);
	});


	// res.render("home/index");
});
routes.post("/", function(req, res){
	var file = req.files.banner;
	var newname = changename(file.name);
	var image_path = path.resolve()+"/public/banner_image/"+newname;
	file.mv(image_path, function(err){

		banners.insert({ name : newname }, function(err, result){
			res.redirect("/admin/banners");
		});
	});

});

/*
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



*/

module.exports=routes;