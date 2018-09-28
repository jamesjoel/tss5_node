var express = require('express');
var routes = express.Router();
var student = require("../models/student");

routes.get("/", function(req, res){

	var obj = { $and : [{ fee : {$gt : 2500}}, { city : { $ne : "ujjain"}}]};
	student.find(obj, function(err, result){
		console.log(result);
	});


});


routes.get("/show", function(req, res){

	var obj = { $or : [{ fee : {$gt : 2500}}, { city : { $ne : "ujjain"}}]};
	student.find(obj, function(err, result){
		console.log(result);
	});


});


module.exports=routes;