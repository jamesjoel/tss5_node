var express = require("express");
var app = express(); // Calling express constructor


app.set("view engine", "ejs"); // setting


// app.set("views", "pages");


app.get("/", function(req, res){
	var a = "rohit";
	var b = "indore";

	var obj = { first : a, second : b, third : "my name is james"};


	res.render("home", obj);
});
app.get("/contact", function(req, res){
	var obj = { name : "Gaurav", age : 25, city : "indore"};
	res.render("contact", obj);
});
app.get("/about", function(req, res){
	res.render('about');
});









app.all("*", function(req, res){
	res.sendFile(__dirname+"/error.html")
});




// app.get("/user", function(){
// 	console.log("USER CALLING");
// });




app.listen(3000, function(){
	console.log("Server Running");
});