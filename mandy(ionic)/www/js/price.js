angular.module('app.price', [])

.controller('priceCtrl', function($ionicHistory, $scope, $rootScope, $state) {
	$scope.categoryName = 'Gourmet Salads';
	$scope.names = [
	{
		index: 1,
		name: 'Asian Salad',
		price: '$8.99'
	}
	];
	$scope.goBack = function(){
		$ionicHistory.goBack();
	};
	$scope.goPriceDetail = function() {
		$state.go('price_detail');
	}
})