var app = angular.module("uploadApp", []);

app.directive('uploadDir', function($parse){
	return {
		restrict : 'A',
		link: function(scope, element, attrs) {
	       element.bind('change', function(){
            scope.$apply(function(){
            	// console.log(element[0].files);
               $parse(attrs.uploadDir).assign(scope, element[0].files);
            });
        });
    	}																						

	}
});









app.controller("myCtrl", function($scope, $http){

	$scope.upload=function(){
		// console.log($scope.myfile);
		var frm = new FormData();
		frm.append("image",$scope.myfile[0]);
		console.log(frm);
		$http({
			url : "/upload",
			data : frm,
			method : "post"
		}).then(function(res){
			console.log(res.data);
		});
	}


});


// app.directive("myDir", function($parse){
// 	return {
// 		restrict : "A",
// 		link : function(scope, element, attrs){
// 			element.bind("click", function(){
// 				scope.$apply(function(){
// 					// console.log(attrs.myDir);
// 					$parse(attrs.myDir).assign(scope, "hello world");
// 				});
// 			});
// 		}
// 	}
// });








// $(document).ready(function(){
// 	$("#btn").click(function(){
// 		alert();
// 	})

// 	$("#btn").bind("click", function(){
// 		alert();
// 	});
// });