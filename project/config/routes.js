var express = require('express');
var routes = express.Router();


routes.use("/", require("../controllers/home"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/login", require("../controllers/login"));
routes.use("/show", require("../controllers/show"));



routes.use("/dashboard",userBackdoor, require("../controllers/dashboard"));
routes.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/login");
});

function userBackdoor(req, res, next)
{
	if(! req.session.full_name)
	{
		res.redirect("/login");
		return;
	}
	next();
}




routes.use("*", require("../controllers/error"));

module.exports=routes;