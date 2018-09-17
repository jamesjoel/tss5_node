var express = require('express');
var routes = express.Router();


routes.use("/login", isLoggedIn, require("./login"));
routes.use("/dashboard", adminBackdoor, require("./dashboard"));
routes.use("/add_category", adminBackdoor, require("./category"));





routes.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/admin/login");
});
function adminBackdoor(req, res, next)
{
	if(! req.session.is_admin_logged_in)
	{
		res.redirect("/admin/login");
		return;
	}
	next();
}
function isLoggedIn(req, res, next)
{
	if(req.session.is_admin_logged_in)
	{
		res.redirect("/admin/dashboard");
		return;
	}
	next();
}





module.exports=routes;