var express = require('express');
var routes = express.Router();
var user = require("../models/user");
var mongo = require("mongodb");
var changename = require("../helpers/changename");
var path = require("path");

routes.get("/", function(req, res){
	var id = req.session._id;
	user.find({ _id : mongo.ObjectId(id)}, function(err, result){
		var pageData = { title : "My Account", pagename : "user/index", result : result[0]};
		res.render("layout", pageData);
		
	})


	// res.render("home/index");
});

routes.get("/edit", function(req, res){
	var id = req.session._id;
	user.find({ _id : mongo.ObjectId(id)}, function(err, result){
		var pageData = { title : "My Account", pagename : "user/edit", result : result[0]};
		res.render("layout", pageData);
		
	})


	// res.render("home/index");
});

routes.post("/edit", function(req, res){
	var id = req.session._id;
	user.update({ _id : mongo.ObjectId(id)}, { $set : req.body }, function(err, result){
		res.redirect("/account");
	});
});

routes.get("/changeimage", function(req, res){
	// var id = req.session._id;
	// user.find({ _id : mongo.ObjectId(id)}, function(err, result){
		var pageData = { title : "My Account", pagename : "user/changeimage"};
		res.render("layout", pageData);
		
	// })


	// res.render("home/index");
});

routes.post("/changeimage", function(req, res){
	var file = req.files.image;
	var id = req.session._id;
	var newname = changename(file.name);
	var image_path = path.resolve()+"/public/user_images/"+newname;

	file.mv(image_path, function(err){
		user.update({ _id : mongo.ObjectId(id)}, {$set : { image : newname }}, function(err, result){
			res.redirect("/account")

		});
	});
});



module.exports=routes;