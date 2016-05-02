angular.module('app.cart', [])

.controller('cartCtrl', function($ionicHistory, $scope, $rootScope, $state) {
	$scope.editFlag = false;
	$scope.edit_title="EDIT";
	$scope.totalprice = 0;
	$scope.items = [
	{
		index: 1,
		name: 'Asian Salad',
		price: 10.99,
		subitem: [
		{
			index: 1,
			name: 'Romaine lettuce'
		},{
			index: 2,
			name: 'Baby spinach'
		},{
			index: 3,
			name: 'Kale(one portion)'
		}]
	},
	{
		index: 1,
		name: 'Mexican Salad',
		price: 9.99,
		subitem: [
		]
	}];
	function cal_totalPrice() {
		for (var i = 0; i < $scope.items.length; i++) {
			$scope.totalprice += $scope.items[i].price;
		};
	}
	cal_totalPrice();

	$scope.doEdit = function() {
		$scope.editFlag = !$scope.editFlag;
		console.log($scope.edit_title);
		$scope.edit_title = $scope.edit_title === "EDIT" ? "DONE": "EDIT";
	}

	$scope.check = function() {
		$state.go('checkout');
	}

	$scope.goBack = function(){
		$ionicHistory.goBack();
	};
})