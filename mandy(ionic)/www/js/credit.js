angular.module('app.credit', [])

.controller('creditCtrl', function($scope, $state, $ionicHistory) {
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

	$scope.goConfirm = function(){
		$state.go('confirm');
	};

	$scope.goDifferent = function() {
		$state.go('different');		
	}
})