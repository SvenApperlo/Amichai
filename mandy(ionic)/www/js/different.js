angular.module('app.different', ['ngCordova'])

.controller('differentCtrl', function($scope, $state, $ionicPopup, $ionicHistory) {
	var ss = 18.98;
	var tt = 14.975;
	var ttt = ss * tt/100;
	$scope.tax = ttt.toFixed(3);
	console.log($scope.tax);
	$scope.subtotal = ss.toFixed(3);
	$scope.taxpro = tt.toFixed(3);
	var tttt = ss + ttt;
	$scope.total = tttt.toFixed(3);
	
	/*
	document.addEventListener("deviceready", function () {
	    $cordovaDatePicker.show(options).then(function(date){
	        alert(date);

	    });
	}, false);*/

	$scope.goBack = function(){
		$ionicHistory.goBack();
	};

	$scope.goConfirm = function(){
		$state.go('confirm');
	};
	$scope.showCode = function() {
		$scope.showAlert('CVV2','<div class="popup-body"><div style="width: 100%;"><span style="float: left; width: 50%;">AMEX</span><span style="float: right; width: 50%;">VISA, MASTERCARD</span></div><div style="width: 100%;" class="popup-body"><div style="background-color: rgb(218, 218, 218); width: 40%; margin: 5%; height: 56px; border-radius: 4px; float: left;"><span style="border: 1px solid red;">123</span></div><div style="background-color: rgb(218, 218, 218); width: 40%; margin: 5%; height: 56px; border-radius: 4px; float: right;"><span style="border: 1px solid red;">123</span></div><span>The 3 digit security code on the back of your card</span></div></div>');
	};

	$scope.showAlert = function(title, msg) {
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: msg,
        buttons:[{text:'OK'}]
      });
      alertPopup.then(function(res){
        console.log('Security code shown.');
      });
    }
})