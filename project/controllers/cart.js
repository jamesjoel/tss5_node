var express = require('express');
var routes = express.Router();
var user = require("../models/user");
var mongo = require("mongodb");
var product = require("../models/product");

routes.get("/add/:id", function(req, res){
	var id = req.params.id;
	var mytime = 1000*60*60*24*30;
	if(req.cookies.pid)
	{
		var oldid=req.cookies.pid;
		var newids = id+"#"+oldid;

		res.cookie("pid", newids, {expire : new Date(Date.now()+mytime), httpOnly : true});
	}
	else
	{
		res.cookie("pid", id, {expire : new Date(Date.now()+mytime), httpOnly : true});
	}

	res.redirect("/");
});

routes.get("/mycart", function(req, res){
	var pids = req.cookies.pid;
	var arr = pids.split("#");
	var newarr = [];
	for(var i=0; i < arr.length; i++)
	{
		var obj = { _id : mongo.ObjectId(arr[i])};
		newarr.push(obj);
	}
	
	product.find({ $or : newarr }, function(err, result){

		var pageData = { title : "My Cart Page", pagename : "cart/index", result : result};
		res.render("layout", pageData);
	})

});
routes.get("/clear", function(req, res){
	res.clearCookie("pid");
	res.redirect("/");
});


module.exports=routes;