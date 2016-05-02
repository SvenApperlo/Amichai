angular.module('app.forgot', [])

.controller('forgotCtrl', function($rootScope,  $ionicPopup, $scope, $state) {
	$scope.doReset = function(){
		console.log('Reset password');
		$scope.showAlert('Email Sent', 'An email has been sent to willem@gmail.com. Please click on the link to reset your password.');
	};

	$scope.showAlert = function(title, msg) {
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: msg,
        buttons:[{text:'BACK TO LOGIN'}]
      });
      alertPopup.then(function(res){
        console.log('Email alert shown.');
        $state.go('app.login');
      });
    }
})