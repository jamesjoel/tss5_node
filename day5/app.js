var express = require('express');
var app = express();
var routes = require("./config/routes");

/*------- Here we can setting the application--------*/
app.set("view engine", "ejs");

/*------- set a public folder for static files --------*/
app.use(express.static(__dirname+"/public"));

/*------- app.use call when any url call --------*/
app.use(function(req, res, next){
	res.locals.logo="My LOGO";
	// when we set a property inside of locals then its directly avalable on view (ejs)
	next();
});
app.use(routes);



/*------- Here we can start our NODE server with 3000 Port --------*/


app.listen(3000, function(){
	console.log("Server Running");
});