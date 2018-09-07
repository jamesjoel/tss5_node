var express = require('express');
var routes = express.Router();
var user = require("../models/user");

routes.get("/", function(req, res){
	user.find(function(err, result){
		console.log(result);
		var pageData = { data : result };
		res.render("show", pageData);
	});
});



module.exports=routes;