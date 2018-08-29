var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));

app.use(function(req, res, next){
	res.locals.logo="My LOGO";
	next();
});



app.get("/", function(req, res){
	var pageData = { title : "Home Page", pagename : "home" };
	res.render("layout", pageData);
});

app.get("/about", function(req, res){
	var pageData = { title : "About Page", pagename : "about" };
	res.render("layout", pageData);
});

app.get("/contact", function(req, res){
	var pageData = { title : "Contact Page", pagename : "contact" };
	res.render("layout", pageData);
});

app.get("/help", function(req, res){
	var pageData = { title : "Help Page", pagename : "help" };
	res.render("layout", pageData);
});


app.listen(3000, function(){
	console.log("Server Running");
});