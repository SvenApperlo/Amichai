angular.module('app.extra', [])

.controller('extraCtrl', function($ionicHistory, $scope, $rootScope, $state) {
	
	$scope.items = [
	{
		index: 1,
		name: 'Lettuce',
		subitem: [
		{
			index: 1,
			name: 'Organic greens',
			checked: false
		},
		{
			index: 2,
			name: 'Lomanie lettuce',
			checked: true
		}]}
	];

	$scope.goBack = function(){
		$ionicHistory.goBack();
	};
	$scope.done = function() {
		$state.go('price_detail');
	}

	$scope.toggleGroup = function(item) {
		if ($scope.isGroupShown(item)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = item;
		}
	};

	$scope.isGroupShown = function(item) {
		return $scope.shownGroup === item;
	}
})