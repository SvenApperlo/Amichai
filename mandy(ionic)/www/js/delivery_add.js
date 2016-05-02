angular.module('app.delivery_add', [])

.controller('delivery_addCtrl', function($scope, $state, $ionicHistory) {
	$scope.goBack = function(){
		$ionicHistory.goBack();
	};

	$scope.goCredit = function() {
		$state.go('credit');
	}
})