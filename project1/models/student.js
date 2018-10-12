var con = require("../config/connect");
var config = require("../config/config");


module.exports.find=function(obj, cb){
	con(function(err, client){
		var db = client.db(config.database);
		db.collection("student").find(obj).toArray(cb);
	});
}
module.exports.findAggregate=function(array, cb){
	con(function(err, client){
		var db = client.db(config.database);
		db.collection("student").aggregate(array).toArray(cb);
	})
}






module.exports.lookup=function(array, cb){
	con(function(err, client){
		var db = client.db(config.database);
		db.collection("cityTbl").aggregate(array).toArray(cb);
	})
}