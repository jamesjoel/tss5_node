var express = require("express");
var app = express();



app.set("view engine", "ejs");


app.use(express.static(__dirname+"/public"));

app.use(function(req, res, next){
	console.log("hello world");
	res.locals.name="JAMES"; // This is a global variable(res.locals) avalable for every ejs (view) page
	next();
});



app.get('/', function(req, res){
	var pageData = { title : "Home Page"};
	res.render("home", pageData);
});
app.get('/about', function(req, res){
	var pageData = { title : "About Page"};
	res.render("about", pageData);
});
app.get('/contact', function(req, res){
	var pageData = { title : "Contact Page"};
	res.render("contact", pageData);
});
app.get('/help', function(req, res){
	var pageData = { title : "Help Page"};
	res.render("help", pageData);
});


app.listen(3000);
