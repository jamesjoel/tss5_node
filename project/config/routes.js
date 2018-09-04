var express = require('express');
var routes = express.Router();


routes.use("/", require("../controllers/home"));

routes.use("*", require("../controllers/error"));

module.exports=routes;