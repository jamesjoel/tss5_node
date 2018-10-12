var express = require('express');
var routes = express.Router();

routes.get("/",function(req,res){
	var pageData= {title:"Help",pagename:"help"};
	res.render("layout",pageData);
});
module.exports=routes;