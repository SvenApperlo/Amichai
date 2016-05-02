angular.module('app.category', [])

.controller('categoryCtrl', function($ionicHistory, $rootScope, $scope, $state) {
	$scope.names = [{
		index:0, name: 'Gourmat Salads'}
		];
	$scope.goPrice = function(index){
		$state.go('price');
	};
	$scope.goCart = function() {
		$state.go('cart');
	}
	$scope.goBack = function(){
		$ionicHistory.goBack();
	};
})