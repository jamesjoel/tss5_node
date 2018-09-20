var express = require('express');
var routes = express.Router();
var product = require("../models/product");

routes.get("/", function(req, res){

	product.find({}, function(err, result){

		var pageData = { title : "Home Page", pagename : "home/index", result : result};
		res.render("layout", pageData);
		// res.send(result);
	})
	// res.render("home/index");
});

module.exports=routes;