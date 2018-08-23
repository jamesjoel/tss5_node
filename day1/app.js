var express = require("express");
var app = express();
var port = 3000;

// console.log(__dirname);
// console.log(__filename);
// console.log(console);
// console.log(process.version);
// console.log(module);



app.listen(port, function(){
	console.log("Server Running with the port ", port);
}); // Create a Web Server with a specific PORT