var express = require('express');
var routes = express.Router();
var user = require("../models/user");

routes.get("/", function(req, res){
	var pageData = { title : "Dashboard", pagename : "dash/index"};
	res.render("layout", pageData);
	// res.render("home/index");
});




module.exports=routes;