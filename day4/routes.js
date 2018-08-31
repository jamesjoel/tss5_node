var express = require('express');
var routes = express.Router();


// routes.use();
// routes.set()

routes.get("/", function(req, res){
	var pageData = { title : "Home Page", pagename : "home" };
	res.render("layout", pageData);
});

routes.get("/about", function(req, res){
	var pageData = { title : "About Page", pagename : "about" };
	res.render("layout", pageData);
});

routes.get("/contact", function(req, res){
	var pageData = { title : "Contact Page", pagename : "contact" };
	res.render("layout", pageData);
});

routes.get("/help", function(req, res){
	var pageData = { title : "Help Page", pagename : "help" };
	res.render("layout", pageData);
});

module.exports=routes;