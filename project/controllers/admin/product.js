var express = require('express');
var routes = express.Router();
var product = require("../../models/product");
var category = require("../../models/category");
var changename = require("../../helpers/changename");
var path = require("path"); // for get root path and this is default module
var mongo = require("mongodb");
var fs = require('fs');

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
	// console.log(req.body);
	var file = req.files.image;
	console.log(file.name);
	var newname = changename(file.name);
	var image_path = path.resolve()+"/public/product_images/"+newname;
	// console.log(image_path);
	file.mv(image_path, function(err){
		if(err){
			console.log("upload error", err);
			return;
		}
		req.body.image = newname;
		product.insert(req.body, function(err, result){
			console.log(result);
			req.flash("msg", "Product Added !");
			res.redirect("/admin/product/add");
		});
		
	});
	
	// file.mv()
	// var obj = {};
	// obj.product_name = req.body.name;

});

routes.get("/demo", function(req, res){
	// console.log(req.params);
	console.log(req.query);
	return;
});

routes.get("/delete/:id/:name", function(req, res){
	// console.log(req.params.id);
	var id = req.params.id;
	var name = req.params.name;
	var image_path = path.resolve()+"/public/product_images/"+name;
	fs.unlink(image_path, function(err){
		if(err){
			console.log("delete error", err);
			return;
		}
		product.remove({ _id : new mongo.ObjectId(id) }, function(err, result){
			console.log(result);
			res.redirect("/admin/product");
		});
		
	})


});




module.exports=routes;