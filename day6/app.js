var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require("./config/routes");

/*------- Here we can setting the application--------*/
app.set("view engine", "ejs");

/*------- set a public folder for static files --------*/
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());

/*------- app.use call when any url call --------*/

app.use(routes);



/*------- Here we can start our NODE server with 3000 Port --------*/


app.listen(3000, function(){
	console.log("Server Running");
});