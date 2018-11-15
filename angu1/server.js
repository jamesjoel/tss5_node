var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var fileupload = require("express-fileupload");


app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(fileupload());


app.get("/", function(req, res){
	res.sendFile(__dirname+"/fileupload.html");
});


app.post("/upload", function(req, res){
	console.log(req.body);
});

app.listen(3000, function(){
	console.log("Server Running");
});