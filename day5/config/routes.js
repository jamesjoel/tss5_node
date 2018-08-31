var express = require('express');
var routes = express.Router();


routes.use("/", require("../controller/home"));
routes.use("/about", require("../controller/about"));


routes.all("*", require("../controller/error"));

module.exports=routes;