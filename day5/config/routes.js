var express = require('express');
var routes = express.Router();


routes.use("/", require("../controller/home"));
routes.use("/about", require("../controller/about"));
routes.use("/signup", require("../controller/signup"));


routes.use("*", require("../controller/error"));

module.exports=routes;