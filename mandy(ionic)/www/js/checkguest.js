angular.module('app.checkguest', [])

.controller('checkguestCtrl', function($scope, $state, $ionicHistory) {
	$scope.goDelivery_address = function(){
		$state.go('delivery_address');
	};

	$scope.goBack = function(){
		$ionicHistory.goBack();
	};
})