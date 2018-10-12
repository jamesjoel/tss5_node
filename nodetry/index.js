var express= require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressflash = require('express-flash');
var session = require('express-session');
var upload = require("express-fileupload");
app.use(bodyParser());
app.use(cookieParser());
app.use(expressflash());
app.use(session({ secret : "Nodetry" }));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
var routes=require("./config/routes");
app.use(function(req, res, next){
	res.locals.session = req.session;
	next();
});
console.log(session);
app.use(upload());
app.use(routes);
app.listen(3000,function(){
console.log("Server Running");
});