var con = require("../config/connect");
var config = require("../config/config");

module.exports.insert=function(obj, cb){
	con(function(err, client){
		var db = client.db(config.database);
		db.collection("product").insert(obj, cb);
	});
	
}
module.exports.find=function(obj, cb){
	con(function(err, client){
		var db = client.db(config.database);
		db.collection("product").find(obj).toArray(cb);
	});
}
module.exports.remove=function(obj, cb){
	con(function(err, client){
		var db = client.db(config.database);
		db.collection("product").remove(obj, cb);
	});
}