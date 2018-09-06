var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');





app.set("view engine", "ejs");
// app.set("views", "pages");

app.use(express.static(__dirname+"/public"));
// app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret : "TSS" }));



var counter = 0;
// app.get("/", function(req, res){
// 	counter++;
// 	res.send("total counter "+counter);
// });
app.get("/", function(req, res){
	if(! req.session.check)
	{
		counter++;
		req.session.check="hello";
	}
	res.send("total counter "+counter);
	
});






// app.get("/", function(req, res){
// 	res.render("a");
// });
// app.post("/save", function(req, res){
// 	console.log(req.body);
// 	var a = req.body.name;
// 	// console.log(req.session);
// 	req.session.demo=a;
// 	res.redirect("/b");
// });
// app.get("/b", function(req, res){
// 	res.send(req.session.demo);
// });
// app.get("/c", function(req, res){
// 	res.send(req.session.demo);
// });


// app.use(require("./config/routes"));

app.listen(3000, function(){
	console.log("Server Running");
});

