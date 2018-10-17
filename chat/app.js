var express = require('express');
var app = express();

var http = require("http").Server(app);
var io = require("socket.io")(http);
var bodyParser = require("body-parser");

app.use(bodyParser());


var arr = [];
var name = "";
var obj = {};

io.on("connection", function(socket){
	
	obj[socket.id]=name;
	// arr.push(obj);



	socket.emit("me", name);
	io.emit("onlineUser", obj);

	socket.on("chat", function(data){
		// console.log(data);
		var to = data.to;
		var sendobj = { name : data.sender, msg : data.msg };

		socket.broadcast.to(to).emit("chat", sendobj);
		io.emit("clearmsg", {});
	});
	socket.on("disconnect", function(){
		delete obj[socket.id];
		io.emit("onlineUser", obj);
		console.log(socket.id);
		console.log("hello");
	});
	socket.on("typing", function(data){
		socket.broadcast.emit("typing1", data);
	});

	// sending all client
});

app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});
app.post("/", function(req, res){
	// console.log(req.body);
	name = req.body.name;
	

	
	res.redirect("/chat");
});

app.get("/chat", function(req, res){
	res.sendFile(__dirname+"/chat.html");

});
// var port = process.env.PORT || 3000;


http.listen(3000, function(){
	console.log("Server Running");
});