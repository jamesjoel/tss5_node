var express=require('express');
var routes=express.Router();
var category= require("../../models/category");
var mongo = require("mongodb");

routes.get("/",function(req,res){
	category.find({}, function(err, result){
	 pageData={title:"View Category", pagename : "admin/category/index",result : result};
	res.render("admin_layout", pageData);
	});
});
routes.get("/add", function(req, res){
	var pageData = { title : "Add Category", pagename : "admin/category/add", msg : req.flash("msg")};
	res.render("admin_layout", pageData);
	// res.render("home/index");
});
routes.post("/add",function(req,res){
	category.insert(req.body,function(err,result)
	{
		req.flash("msg", "Category Added !");
		res.redirect("/admin/category/add");
	});
	
});

routes.post("/update",function(req,res){
	var id= mongo.ObjectId(req.body.id);
	category.update({_id:id},req.body,function(err,result)
	{
		req.flash("msg", "Category Updated !");
		res.redirect("/admin/category");
	});
	
});
routes.get("/edit/:id", function(req, res){
	var id = req.params.id;
	category.find({_id:mongo.ObjectId(id)}, function(err,result){
	var pageData = { title : "Add Category", pagename : "admin/category/add", msg : req.flash("msg"),result:result[0]};
	res.render("admin_layout", pageData);
	// res.render("home/index");
		
	});
	
});
module.exports=routes;