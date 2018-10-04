var express = require('express');
var routes = express.Router();
var user = require("../models/user");

routes.get("/add/:id", function(req, res){
	var id = req.params.id;
	var mytime = 1000*60*60*24*30;
	if(req.cookies.pid)
	{
		var oldid=req.cookies.pid;
		var newids = id+"#"+oldid;

		res.cookie("pid", newids, {expire : new Date(Date.now()+mytime), httpOnly : true});
	}
	else
	{
		res.cookie("pid", id, {expire : new Date(Date.now()+mytime), httpOnly : true});
	}

	res.redirect("/");
});




module.exports=routes;