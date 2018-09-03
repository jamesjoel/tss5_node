var express = require('express');
var routes = express.Router();


var data = [
	{
		name : "rohit",
		age : 25,
		fee : 2500
	},
	{
		name : "james",
		age : 23,
		fee : 5000
	},
	{
		name : "gaurav",
		age : 25,
		fee : 8000
	},
	{
		name : "mukesh",
		age : 25,
		fee : 3250
	}
];




routes.get("/", function(req, res){






	var pageData = {title : "Student", pagename : "student/index", data : data};
	res.render("layout", pageData);
});

module.exports=routes;