var express = require('express');
var routes = express.Router();


routes.use("/", require("../controllers/home"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/login", require("../controllers/login"));

routes.use("*", require("../controllers/error"));

module.exports=routes;