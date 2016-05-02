angular.module('app.order', [])

.controller('orderCtrl', function($scope, $rootScope, $ionicHistory, $state) {
	$scope.goBack = function(){
		$ionicHistory.goBack();
	};
	$scope.goPostal = function(type) {
		$rootScope.storeType = type;
		$state.go('postal');
	}
})