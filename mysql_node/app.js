var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require("mysql");

var con = mysql.createConnection({
	host : "localhost",
	user : "admin",
	password : "admin",
	database : "demo4"
});




app.use(bodyParser());
app.use(express.static(__dirname+"/public"));
app.get("/employee", function(req, res){
	con.connect(function(err){
		con.query("SELECT * FROM employee", function(err, result){
			var data = JSON.stringify(result);
			res.send(JSON.parse(data));
		});
	});

});

app.post("/employee", function(req, res){
	var data=req.body;
	console.log(data);
	con.connect(function(err){
		var que = "INSERT INTO employee (name, salary, city) VALUES ('"+req.body.name+"', '"+req.body.salary+"', '"+req.body.city+"')";
		con.query(que, function(err, result){
			var data = JSON.parse(JSON.stringify(result));
			// console.log(data);
			var id = data.insertId;
			con.query("SELECT * FROM employee WHERE id="+id, function(err, result){
				var data = JSON.parse(JSON.stringify(result));
				res.send(data[0]);
			});

		});
	});

});



app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});

app.listen(3000);