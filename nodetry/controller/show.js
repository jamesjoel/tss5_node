var express = require('express');
var routes = express.Router();
var user = require("../models/user");

routes.get("/", function(req, res){
	user.find('{}',function(err, result){
		console.log(result);
		var pageData = { title:"Show",data : result,pagename:"show" };
		//res.render("show", pageData);
		res.render("layout",pageData);
	});
});



module.exports=routes;