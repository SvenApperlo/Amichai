angular.module('app.changePw', [])

.controller('changePwCtrl', function($scope, $state) {
	$scope.goChangePassword = function(){
		$state.go('main.changePw');
	};

})