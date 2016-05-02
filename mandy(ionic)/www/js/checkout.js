angular.module('app.checkout', [])

.controller('checkoutCtrl', function($scope, $state, $ionicHistory) {
	$scope.goLogin = function(){
		$state.go('app.login');
	};

	$scope.goGuest = function(){
		$state.go('checkguest');
	};

	$scope.goBack = function(){
		$ionicHistory.goBack();
	};
})