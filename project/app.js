var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');



var routes = require("./config/routes");


app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS" }));
app.use(flash());


app.use(function(req, res, next){
	res.locals.session = req.session;
	next();
});


app.use(routes);


app.listen(3000, function(){
	console.log("Server Running");
});