var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
	$scope.newData={};
	$scope.msg="";
	

	$scope.data=[];
	$http({
		method : "get",
		url : "/getdata"

	}).then(function(res){
		console.log(res.data);
		$scope.data=res.data;
	});

	$scope.save=function(){
		if($scope.newData._id)
		{
			$http({
				method : "post",
				url : "/updatestudent",
				data : $scope.newData
			}).then(function(res){
				console.log(res.data);
				/* var n = $scope.data.indexOf($scope.selectedObj);
				$scope.data[n]=$scope.newData; */
				for(var i = 0; i < $scope.data.length; i++)
				{
					if($scope.data[i]._id == $scope.newData._id)
					{
						$scope.data[i]=$scope.newData;	
					}
				}
				$scope.msg="Data Update Successful !";
				$("#msgModal").modal("show");
			});	
		}
		else
		{
			$http({
				method : "post",
				url : "/getdata",
				data : $scope.newData
			}).then(function(res){
				console.log(res.data);
				$scope.data.push(res.data);
				$scope.msg="Data Add Successful !";
				$("#msgModal").modal("show");
			});
			
		}
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
			var n = $scope.data.indexOf($scope.selectedObj);
			console.log(n);
			$scope.data.splice(n, 1);
			$scope.msg="Data Delete Successful !";
			$("#msgModal").modal("show");
			
		});
	}
	$scope.edit=function(obj){
		// $scope.newData=obj;
		$scope.selectedObj=obj;
		angular.copy(obj, $scope.newData);
	}
});