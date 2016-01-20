angular.module('btnLog', []) 

angular.module('btnLog').controller('btnLogController', ['$scope', function($scope) {
	$scope.showMe = false
	$scope.clickMe = function(){
		console.log("Pushed!")
		$scope.showMe = !$scope.showMe
	}
	$scope.showMenu = false
	$scope.clickMenu = function(){
		$scope.showMenu = !$scope.showMenu
	}
}])