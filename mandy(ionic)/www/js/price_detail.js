angular.module('app.price_detail', [])

.controller('price_detailCtrl', function($ionicHistory, $scope, $rootScope, $state) {
	$scope.priceName = 'Asian Salad';
	$scope.overview = 'Served with our asian garlic vinigrate Romaine lettuce, mixed greens, avocado, crunchy noodles, mandarin oranges, cherry tomatoes, shredded carrots, toasted sesame seeds';
	$scope.price = '$8.99';

	$scope.goBack = function(){
		$ionicHistory.goBack();
	};
	$scope.addToCart = function() {
		$rootScope.isCart = true;
		$state.go('app.category');
	}
	$scope.goExtra = function() {
		$state.go('extra');
	}
})