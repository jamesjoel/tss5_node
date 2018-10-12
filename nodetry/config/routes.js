var express = require('express');
var routes = express.Router();
routes.use("/", require("../controller/home"));
routes.use("/about", require("../controller/about"));
routes.use("/help", require("../controller/help"));
routes.use("/signup", require("../controller/signup"));
routes.use("/show", require("../controller/show"));
routes.use("/login", require("../controller/login"));
routes.use("/admin", require("../controller/admin/index"));

routes.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/login");
});
module.exports=routes;