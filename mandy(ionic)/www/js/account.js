angular.module('app.account', [])

.controller('accountCtrl', function($scope, $state) {
	$scope.goChangePassword = function(){
		$state.go('changePw');
	};

})