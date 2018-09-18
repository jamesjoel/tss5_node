var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var upload = require('express-fileupload');





app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret : "TSS" }));
app.use(upload());

app.get("/", function(req, res){
	res.render("demo");
});

app.post("/", function(req, res){
	console.log(req.files);
	var file = req.files.image;
	var path = __dirname+"/upload/"+file.name;
	file.mv(path, function(err){
		if(err){
			console.log("upload error", err);
			return;
		}
		console.log("file uploaded");
	});
});


app.listen(3000, function(){
	console.log("Server Running");
});

