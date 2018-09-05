var express = require('express');
var routes = express.Router();

routes.get("/", function(req, res){
	var pageData = { title : "Login Page", pagename : "login/index"};
	res.render("layout", pageData);
	// res.render("home/index");
});

module.exports=routes;