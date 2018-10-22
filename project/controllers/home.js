var express = require('express');
var routes = express.Router();
var product = require("../models/product");
var banners = require("../models/banners");

routes.get("/", function(req, res){
	var io = res.set.io;
	io.on("connection", function(socket){
		
	});

	product.find({}, function(err, result){

			var pageData = { title : "Home Page", pagename : "home/index", result : result};
			res.render("layout", pageData);
		

		// res.send(result);
	})
	// res.render("home/index");
});

module.exports=routes;