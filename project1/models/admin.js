var con = require("../config/connect");
var config = require("../config/config");


module.exports.find=function(obj, cb){
	con(function(err, client){
		var db = client.db(config.database);
		db.collection("admin").find(obj).toArray(cb);
	});
}