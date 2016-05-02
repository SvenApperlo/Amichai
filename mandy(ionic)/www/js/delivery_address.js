angular.module('app.delivery_address', [])

.controller('delivery_addressCtrl', function($scope, $state, $ionicHistory) {
	$scope.items = [
	{
		index:1,
		name: '740 Atwater Ave.',
		checked: true,
		postal: 'H4C 2G5'
	},
	{
		index:2,
		name: '4491 St Jacques.',
		checked: false,
		postal: 'H3M 2N0'
	}];
	$scope.goBack = function(){
		$ionicHistory.goBack();
	};
	$scope.goDelivery_add = function() {
		$state.go('delivery_add');
	}
})