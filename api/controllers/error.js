var express = require('express');
var routes = express.Router();

routes.get("/", function(req, res){
	var pageData = { title : "Error Page", pagename : "error/index"};
	res.render("layout", pageData);

});
module.exports=routes;