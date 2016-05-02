angular.module('app.confirm', [])

.controller('confirmCtrl', function($filter, $scope, $state, $ionicHistory) {
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

	var dd = new Date();
	$scope.hr = $filter('date')(dd, 'HH:mm');
	console.log(dd);
	var ss = 18.98;
	var tt = 14.975;
	var ttt = ss * tt/100;
	$scope.tax = ttt.toFixed(3);
	console.log($scope.tax);
	$scope.subtotal = ss.toFixed(3);
	$scope.taxpro = tt.toFixed(3);
	var tttt = ss + ttt;
	$scope.total = tttt.toFixed(3);

	$scope.goBack = function(){
		$ionicHistory.goBack();
	};
})