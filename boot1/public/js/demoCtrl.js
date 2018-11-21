app.controller("myCtrl", function($scope, $http){
	$scope.test=function(){
		$http({
			url : "/test",
			data : { name : "rohit" },
			method : "post"
		}).then(function(res){
			console.log(res.data);
		});
	}
});