var express = require('express');
var app = express();
var http = require("http");



/*


http.get("http://localhost:3000/search?city=indore", function(res){
	var data = "";
	res.on("data", function(x){
		data += x;
	});
	res.on("end", function(){
		console.log(JSON.parse(data));
	});
});

*/


app.set("view engine", "ejs");
app.get("/", function(req, res){
	res.render("second/index");
});

app.get('/getdata', function(req, res){
	var city = req.query.city;
	http.get("http://localhost:3000/search?apikey=124578&city="+city, function(res){
		var data = "";
		res.on("data", function(x){
			data += x;
		});
		res.on("end", function(){
			console.log(JSON.parse(data));

		});
	});
});



app.listen(4000, function(req, res){
	console.log("Second Server Running On 4000");
});