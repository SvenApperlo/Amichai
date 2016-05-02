angular.module('app.favourite', [])

.controller('favouriteCtrl', function($scope, $state) {
	$scope.edit_title = 'EDIT';
	$scope.editFlag = false;

	$scope.items = [
	{
		index: 1,
		name: 'GMN39923',
		subitem: [{
			index:1,
			name:'Salad'
		},
		{
			index:2,
			name:'Soups'
		},
		{
			index:1,
			name:'Drink'
		}
		]
	}];

	$scope.doEdit = function() {
		$scope.editFlag = !$scope.editFlag;
		console.log($scope.edit_title);
		$scope.edit_title = $scope.edit_title === "EDIT" ? "DONE": "EDIT";
	}

	$scope.reorder = function() {
		$state.go('reorder');
	}
})