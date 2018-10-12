var express = require('express');
var routes = express.Router();

routes.get("/",function(req,res){
var pageData= {title:"Dashbaord",pagename:"admin/dashboard/index"};
res.render("admin_layout", pageData);

});
module.exports=routes;