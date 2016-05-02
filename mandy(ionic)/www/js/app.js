// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app',
  ['ionic',
    'ngAnimate',
   'app.routes',
   'app.services',
   'app.load',
   'app.order',
   'app.postal',
   'app.category',
   'app.cart',
   'app.checkout',
   'app.checkguest',
   'app.delivery_address',
   'app.delivery_add',
   'app.credit',
   'app.different',
   'app.confirm',
   'app.price',
   'app.price_detail',
   'app.extra',
   'app.login',
   'app.forgot',
   'app.account',
   'app.changePw',
   'app.address',
   'app.past',
   'app.order_detail',
   'app.favourite',
   'app.reorder'
 ])
.controller('AppCtrl', function ($rootScope, $scope, $state, $ionicPopup, $ionicModal, $timeout) {
    $rootScope.isCart = false;
    // Form data for the login modal
    $scope.goMenu = function() {
      console.log('Show Menu..');
      $state.go('app.category');
    };

    $scope.goLogin = function() {
      console.log('Show Login..');
      $state.go('app.login');
    }
    $scope.goAccount = function() {
      console.log('Show Account..');
      $state.go('app.account');
    }
    $scope.goAddress = function() {
      console.log('Show Address..');
      $state.go('app.address');
    }
    $scope.goOrder = function() {
      console.log('Show Order..');
      $state.go('app.past');
    }
    $scope.goFavourite = function() {
      console.log('Show Favourite..');
      $state.go('app.favourite');
    }
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
