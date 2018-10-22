var express = require('express');
var app = express();
var http = require("http").Server(app);

var io = require("socket.io")(http);




var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');
var nocache = require('nocache');
var upload = require('express-fileupload');



var routes = require("./config/routes");
var category = require("./models/category");
var banners = require("./models/banners");


app.set("view engine", "ejs");


var onlineUser = {};
var chat = io.of("/chat");







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
	res.set.io = io;
	res.set.chat=chat;
	res.set.onlineUser=onlineUser;
	banners.find({}, function(err, result1){
	res.locals.result1=result1;
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
});

app.use(routes);



http.listen(3000, function(){
	console.log("Server Running");
});