var express = require('express');
var app = express();

var http = require("http").Server(app);
var io = require("socket.io")(http);
var bodyParser = require("body-parser");

app.use(bodyParser());


var arr = [];


io.on("connection", function(socket){
	io.emit("onlineUser", arr);
	// sending all client
});

app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});
app.post("/", function(req, res){
	// console.log(req.body);
	arr.push(req.body.name);
	res.redirect("/chat");
});

app.get("/chat", function(req, res){
	res.sendFile(__dirname+"/chat.html");

});
// var port = process.env.PORT || 3000;


http.listen(3000, function(){
	console.log("Server Running");
});