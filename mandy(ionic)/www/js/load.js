angular.module('app.load', [])

.controller('loadCtrl', function($scope, $state) {
	$scope.goOrder = function(){
		$state.go('order');
	};
})