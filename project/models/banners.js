var con = require("../config/connect");
var config = require("../config/config");

module.exports.insert=function(obj, cb){
	con(function(err, client){
		var db = client.db(config.database);
		db.collection("banners").insert(obj, cb);
	});
	
}
module.exports.find=function(obj, cb){
	con(function(err, client){
		var db = client.db(config.database);
		db.collection("banners").find(obj).toArray(cb);
	});
}

module.exports.update=function(where, obj, cb){
	con(function(err, client){
		var db = client.db(config.database);
		db.collection("banners").update(where, obj, cb);
	});
}

module.exports.delete=function(obj, cb){
	con(function(err, client){
		var db = client.db(config.database);
		db.collection("banners").remove(obj, cb);
	});
}