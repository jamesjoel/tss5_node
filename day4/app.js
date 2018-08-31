var express = require('express');
var app = express();
var routes = require("./routes");






app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));

app.use(function(req, res, next){
	res.locals.logo="My LOGO";
	next();
});

app.use(routes);




app.listen(3000, function(){
	console.log("Server Running");
});