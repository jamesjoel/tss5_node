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


var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("Server Running on ", port);
});

//https://git.heroku.com/frozen-plateau-76384.git
//https://frozen-plateau-76384.herokuapp.com/

//https://young-tundra-61365.herokuapp.com/
//https://git.heroku.com/young-tundra-61365.git
