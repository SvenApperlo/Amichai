angular.module('app.past', [])

.controller('pastCtrl', function($scope, $state) {
	$scope.items = [
	{
		index: 1,
		name: 'GNM399294',
		datetime: 'March 13, 4:00 pm'
	},
	{
		index: 2,
		name: 'GNM399294',
		datetime: 'Feb 12, 4:00 pm'
	}
	];

	$scope.goDetail = function(index) {
		console.log(index);
		$state.go('app.order_detail');
	}
})