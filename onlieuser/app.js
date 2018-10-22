var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var clients = [];
io.sockets.on('connect', function(client) {
    clients.push(client); 
    console.log(clients.length);
    client.on('disconnect', function() {
        clients.splice(clients.indexOf(client), 1);
    	io.emit("totalUser", clients.length);
    });
    io.emit("totalUser", clients.length);
});


app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});



app.get("/show", function(req, res){
	res.sendFile(__dirname+"/show.html");
});



http.listen(3000, function(){
	console.log("Server Running");
});