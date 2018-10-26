var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
	$scope.newData={};
	$scope.newData.city="Select";

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
			$scope.data.push(res.data);
		});
	}
	$scope.askDelete=function(obj){
		$scope.selectedObj=obj;
		// console.log("calling", obj);
	}
	$scope.delete=function(){
		$http({
			url : "/deletestudent",
			method :"post",
			data : $scope.selectedObj
		}).then(function(res){
			console.log(res);
			// var n = $scope.data.indexOf($scope.selectedObj);
			// console.log(n);
			// $scope.data.splice(n, 1);
		});
	}
});