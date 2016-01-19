angular.module('btnLog', []) 

angular.module('btnLog').controller('btnLogController', ['$scope', function($scope) {

	$scope.count = 0
	if ($scope.count > 0) {
		console.log('button pushed')
	}

}])