var express = require('express');
var routes = express.Router();


routes.use("/", require("./login"));
routes.use("/dashboard", adminBackdoor, require("./dashboard"));

routes.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/admin");
});

// routes.use("/signup", require("../controllers/signup"));
// routes.use("/login", require("../controllers/login"));
// routes.use("/show", require("../controllers/show"));



// routes.use("/dashboard",userBackdoor, require("../controllers/dashboard"));
// routes.get("/logout", function(req, res){
// 	req.session.destroy();
// 	res.redirect("/login");
// });

// routes.use("/admin", require("../controllers/admin/index"));






function adminBackdoor(req, res, next)
{
	if(! req.session.is_admin_logged_in)
	{
		res.redirect("/admin");
		return;
	}
	next();
}





module.exports=routes;