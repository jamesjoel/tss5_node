var express = require('express');
var routes = express.Router();


// console.log(app.get("io"));
routes.use("/", require("../controllers/home"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/login", require("../controllers/login"));
routes.use("/show", require("../controllers/show"));
routes.use("/cart", require("../controllers/cart"));
routes.use("/student", require("../controllers/student"));


routes.use("/db", require("../controllers/db"));



routes.use("/dashboard",userBackdoor, require("../controllers/dashboard"));
routes.use("/account",userBackdoor, require("../controllers/account"));
routes.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/login");
});

routes.use("/admin", require("../controllers/admin/index"));






function userBackdoor(req, res, next)
{
	if(! req.session.is_user_logged_in)
	{
		res.redirect("/login");
		return;
	}
	next();
}




routes.use("*", require("../controllers/error"));

module.exports=routes;