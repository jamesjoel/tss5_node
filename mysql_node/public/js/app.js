var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
	$scope.data={};
	$scope.data.city="Select";
	$scope.allData=[];

	$scope.save=function(){
		$http({
			url : "/employee",
			method : "post",
			data : $scope.data
		}).then(function(res){
			$scope.allData.push(res.data);
		});
	}


	
	$http({
		url : "/employee",
		method :"get"
	}).then(function(res){
		console.log(res.data);
		$scope.allData = res.data;
	});
});