angular.module('app.postal', [])

.controller('postalCtrl', function($ionicHistory, $scope, $rootScope, $state) {
	$scope.goOrder = function(){
		$state.go('order');
	};
	$scope.checkCode = function() {
		console.log('show Categories');
		$state.go('app.category');
	};
	$scope.goBack = function() {
		$ionicHistory.goBack();
	}
})