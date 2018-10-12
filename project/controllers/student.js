var express = require('express');
var routes = express.Router();
var student = require("../models/student");

routes.get("/", function(req, res){
	var arr = [{ $lookup : { from : "student", localField : "city", foreignField : "cityName", as : "stuData"}}];
	student.lookup(arr, function(err, result){
		// console.log(result);
		res.render("show", { result : result});
	});
});



module.exports=routes;