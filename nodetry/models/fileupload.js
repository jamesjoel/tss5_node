var con = require("../config/connect");
var config = require("../config/config");

module.exports.insert=function(obj,cb)
{
	con(function(err,client){
	var db = client.db(config.database);
	db.collection("categoryimage").insert(obj,cb);
	});
}