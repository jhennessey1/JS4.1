// angular.module('btnLog', []) //Part 1!!

// angular.module('btnLog').controller('btnLogController', ['$scope', function($scope) {
// 	$scope.showMe = false
// 	$scope.clickMe = function(){
// 		console.log("Pushed!")
// 		$scope.showMe = !$scope.showMe
// 	}
// 	$scope.showMenu = false
// 	$scope.clickMenu = function(){
// 		$scope.showMenu = !$scope.showMenu
// 	}
// }])

// angular.module('hotMod', []) //Part 2!!

// angular.module('hotMod').controller('hotRoller', ['$scope', function($scope) {
// 		$scope.addPink = function() {
// 			$scope.paragraphPink = true
// 		}
// 		$scope.removePink = function(){
// 			$scope.paragraphPink = false
// 		}

// 		$scope.addPoint = '!'

// 		$scope.hideLinkExercises = false
// 		$scope.hideLinkProgram = false
// 		$scope.hideLinkResources = false

// 		$scope.linkClick = function(event, which) {
// 			if(which === 'exercises') {

// 				if(!confirm("Are you sure?")) {
// 					event.preventDefault()
// 					$scope.hideLinkExercises = true
// 				}
// 			}
// 			else if(which === 'program') {
// 				if(!confirm("Are you sure?")) {
// 					event.preventDefault()
// 					$scope.hideLinkProgram = true
// 				}
// 			}
// 			else if(which === 'resources') {
// 				if(!confirm("Are you sure?")) {
// 					event.preventDefault()
// 					$scope.hideLinkResources = true
// 				}
// 			}
// 		}
// 	}])