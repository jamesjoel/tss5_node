var express = require('express');
var routes = express.Router();

routes.get("/", function(req, res){
	var pageData = { title : "Dashboard", pagename : "admin/dash/index"};
	res.render("admin_layout", pageData);
	// res.render("home/index");
});




module.exports=routes;