var express = require('express');
var routes = express.Router();

routes.get("/",function (req,res){
	var PageData= {title:"Home Page",pagename:"home"};
	res.render("layout",PageData)
	
});


module.exports=routes;