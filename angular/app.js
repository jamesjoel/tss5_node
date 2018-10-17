var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));


app.use(require("./config/routes"));

app.listen(3000, function(){
	console.log("Server Running");
});