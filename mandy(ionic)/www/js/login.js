angular.module('app.login', [])

.controller('loginCtrl', function($scope, $state) {
	$scope.goDelivery = function(){
		$state.go('delivery_address');
	};
})