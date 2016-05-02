angular.module('app.address', [])

.controller('addressCtrl', function($scope, $state) {
	$scope.editFlag=0;
	$scope.edit_title="EDIT";
	$scope.addressData = [
	{
		index:1,
		line1:'740 Atwater Ave.',
		line2:'430 suit 93',
		postal:'H4C 2G5',
		special:'Buzzer #34 watch out for the dogs',
		identified:true
	},
	{
		index:2,
		line1:'491 St Jacque.',
		line2:'',
		postal:'H3M 2N0',
		special:'',
		identified:false
	}];
	$scope.doEdit = function() {
		$scope.editFlag = !$scope.editFlag;
		console.log($scope.edit_title);
		$scope.edit_title = $scope.edit_title === "EDIT" ? "DONE": "EDIT";
	}
	$scope.doCheckItem = function(index) {
		
	}
})