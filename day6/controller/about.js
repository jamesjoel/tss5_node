var express = require('express');
var routes = express.Router();

routes.get("/", function(req, res){
	var pageData = { title : "About Page", pagename : "about/index"};
	res.render("layout", pageData);
});


module.exports=routes;