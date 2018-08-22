var express = require("express");
var app = express();
var port = 3000;
app.listen(port, function(){
	console.log("Server Running with the port ", port);
}); // Create a Web Server with a specific PORT