var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');
var nocache = require('nocache');
var upload = require('express-fileupload');



var routes = require("./config/routes");
var category = require("./models/category");


app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS" }));
app.use(flash());
app.use(nocache());
app.use(upload());


app.use(function(req, res, next){
	category.find({}, function(err, result){
	res.locals.session = req.session;
	res.locals.category=result;
	next();

	});
});

app.use(routes);



app.listen(3000, function(){
	console.log("Server Running");
});