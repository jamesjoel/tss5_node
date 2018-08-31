var express = require('express');
var routes = express.Router();

routes.get("/", function(req, res){
	var pageData = { title : "About Page", pagename : "about"};
	res.render("layout", pageData);
});
routes.get("/info", function(req, res){
	var pageData = { title : "Info Page", pagename : "info"};
	res.render("layout", pageData);
});
routes.get("/info/data", function(req, res){
	var pageData = { title : "Info-Data Page", pagename : "data"};
	res.render("layout", pageData);
});

module.exports=routes;