var express = require('express');
var routes = express.Router();
var user = require("../models/user");
var mongo = require("mongodb");

var clients = {};
routes.get("/", chatting, function(req, res){
	
	var pageData = { title : "Dashboard", pagename : "dash/index"};
	res.render("layout", pageData);
	// res.render("home/index");
});

var arr = [];
function chatting(req, res, next){
	var io = res.set.io;
	io.on('connection', function(socket){
		if(! clients[req.session._id])
		{
			clients[req.session._id]=socket.id;
			var obj = { _id : mongo.ObjectId(req.session._id)};
			arr.push(obj);

		}

		var findObj = { $or : arr};
		user.find(findObj, function(err, result){
			io.emit("onlineUser", result);
		});

	});
	next();
}


module.exports=routes;