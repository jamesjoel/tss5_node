var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');
var nocache = require('nocache');
var upload = require('express-fileupload');

var server = require("http").Server(app);
var io = require("socket.io")(server);

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
	res.set.io=io;

	category.find({}, function(err, result){
	res.locals.session = req.session;
	res.locals.category=result;

	// console.log("-------------------", req.cookies);
	var total = 0;
	if(req.cookies.pid)
	{
		var arr = req.cookies.pid.split("#");
		total = arr.length;
	}
	res.locals.total=total;

	next();

	});
});

app.use(routes);



server.listen(3000, function(){
	console.log("Server Running");
});