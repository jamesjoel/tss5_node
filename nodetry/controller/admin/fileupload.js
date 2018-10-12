var express=require('express');
var routes=express.Router();
var path = require("path");
var fileupload=require("../../models/fileupload");

routes.get("/",function(req,res)
{
	
	var pageData={title:"Upload Photo", pagename : "admin/category/fileupload"};
	res.render("admin_layout", pageData);
});
routes.post("/",function(req,res)
{
	console.log(req.files);
	//var file= req.files.image;
	console.log(req.body);
	/* var filename= changename(file.name);
	var image_path= path.resolve()+"/public/categoryimage/"+filename;
	file.mv(image_path,function(err){
		if(err)
		{
			console.log(err);
			return;
		}
		req.body.image= filename;
		fileupload.insert(req.body,function(err,result)
		{
			conosle.log(result);
		});
	}); */
	//fileupload.insert(obj,function(err,result){
		
		
	});
	

module.exports=routes;