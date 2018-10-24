var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
	$scope.newData={};

	$scope.data=[];
	$http({
		method : "get",
		url : "/getdata"

	}).then(function(res){
		console.log(res.data);
		$scope.data=res.data;
	});

	$scope.save=function(){
		$http({
			method : "post",
			url : "/getdata",
			data : $scope.newData
		}).then(function(res){
			console.log(res.data);
		});
	}
});