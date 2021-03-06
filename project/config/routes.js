var express = require('express');
var routes = express.Router();


routes.use("/", require("../controllers/home"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/login", require("../controllers/login"));
routes.use("/show", require("../controllers/show"));
routes.use("/cart", require("../controllers/cart"));
routes.use("/student", require("../controllers/student"));
routes.use("/dashboard", require("../controllers/student"));


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
	var chat = res.set.chat;


	chat.on("connection", function(socket){
		var sid = socket.id;
		var uid = req.session._id;
		var full_name = req.session.full_name;
		var arr = [sid, full_name];

		res.set.onlineUser[uid]=arr;
		chat.emit("onlineUser", res.set.onlineUser);

	});


	if(! req.session.is_user_logged_in)
	{
		res.redirect("/login");
		return;
	}
	next();
}




routes.use("*", require("../controllers/error"));

module.exports=routes;