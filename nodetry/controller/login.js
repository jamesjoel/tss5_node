var express = require('express');
var routes = express.Router();
var user = require("../models/user");

routes.get("/",function(req,res){
	var pageData={"title":"Login",pagename:"login",msg : req.flash("msg")};
	res.render("layout",pageData);
	
});
routes.post("/",function(req,res)
{
	var where= {username:req.body.username};
	user.find(where,function(err,result)
	{
		if(err)
		{
			console.log(err);
			return;
		}
		if(result.length==0)
		{
			req.flash("msg", "This username is incorrect");
			res.redirect("/login");
		}
		else
		{
			
			if(result[0].password == req.body.password)
			{
				req.session.full_name = result[0].name;
				req.session._id = result[0]._id;
				req.session.is_user_logged_in=true;
				res.redirect("/dashboard");
			}
			else
			{
				req.flash("msg", "This username and password is incorrect");
			} 
		}
	});
});
module.exports=routes;