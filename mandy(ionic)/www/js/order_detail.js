angular.module('app.order_detail', [])

.controller('order_detailCtrl', function($scope, $state) {
	$scope.totalprice = 0;
	$scope.order_name = 'DNM399294';
	$scope.favouriteFlag = true;
	$scope.favourite_title = 'ADD AS FAVOURITE';
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

	var ss = 18.98;
	var tt = 14.975;
	var ttt = ss * tt/100;
	$scope.tax = ttt.toFixed(3);
	console.log($scope.tax);
	$scope.subtotal = ss.toFixed(3);
	$scope.taxpro = tt.toFixed(3);
	var tttt = ss + ttt;
	$scope.total = tttt.toFixed(3);

	$scope.favourite = function() {
		$scope.favouriteFlag = !$scope.favouriteFlag;
		$scope.favourite_title = 'REMOVE AS FAVOURITE';
	}

	$scope.reorder = function() {
		$state.go('cart');
	}
})