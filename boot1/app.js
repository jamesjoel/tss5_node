var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
	res.render("home");
});
app.get("/nav", function(req, res){
	res.render("nav");
});

app.listen(3000);