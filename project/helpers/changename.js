var crypto = require("crypto"); // this is a default module
module.exports=function(name){ // 1.jpg
	var arr = name.split(".");
	var n = arr.length;
	var ext = arr[n-1];
	var str = crypto.randomBytes(16).toString('hex');
	return str+"."+ext;
}