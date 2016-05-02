angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('top');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "views/menu.html",
        controller: 'AppCtrl'
    })
    .state('load', {
      url: '/load',
      templateUrl: 'views/load.html',
      controller: 'loadCtrl'
    })

    .state('order', {
      url: '/order',
      templateUrl: 'views/order.html',
      controller: 'orderCtrl'
    })

    .state('postal', {
      url: '/postal',
      templateUrl: 'views/postal.html',
      controller: 'postalCtrl'
    })

    .state('app.category', {
      url: '/category',
      cache:false,
      views: {
        'menuContent' :{
          templateUrl: 'views/category.html',
          controller: 'categoryCtrl'
        }
      }
    })

    .state('cart', {
      url: '/cart',
      cache:false,
      templateUrl: 'views/cart.html',
      controller: 'cartCtrl'
    })
    
    .state('checkout', {
      url: '/checkout',
      cache:false,
      templateUrl: 'views/checkout.html',
      controller: 'checkoutCtrl'
    })

    .state('checkguest', {
      url: '/checkguest',
      cache:false,
      templateUrl: 'views/checkguest.html',
      controller: 'checkguestCtrl'
    })

    .state('delivery_address', {
      url: '/delivery_address',
      cache:false,
      templateUrl: 'views/delivery_address.html',
      controller: 'delivery_addressCtrl'
    })

    .state('delivery_add', {
      url: '/delivery_add',
      cache:false,
      templateUrl: 'views/delivery_add.html',
      controller: 'delivery_addCtrl'
    })

    .state('credit', {
      url: '/credit',
      cache:false,
      templateUrl: 'views/credit.html',
      controller: 'creditCtrl'
    })

    .state('different', {
      url: '/different',
      cache:false,
      templateUrl: 'views/different.html',
      controller: 'differentCtrl'
    })    

    .state('confirm', {
      url: '/confirm',
      cache:false,
      templateUrl: 'views/confirm.html',
      controller: 'confirmCtrl'
    })

    .state('price', {
      url: '/price',
      cache:false,
      templateUrl: 'views/price.html',
      controller: 'priceCtrl'
    })

    .state('price_detail', {
      url: '/price_detail',
      cache:false,
      templateUrl: 'views/price_detail.html',
      controller: 'price_detailCtrl'
    })

    .state('extra', {
      url: '/extra',
      cache:false,
      templateUrl: 'views/extra.html',
      controller: 'extraCtrl'
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent' :{
          templateUrl: 'views/login.html',
          controller: 'loginCtrl'
        }
      }
    })

    .state('app.forgot', {
      url: '/forgot',
      views: {
        'menuContent' :{
          templateUrl: 'views/forgot.html',
          controller: 'forgotCtrl'
        }
      }
    })

    .state('app.account', {
      url: '/account',
      views: {
        'menuContent' :{
          templateUrl: 'views/account.html',
          controller: 'accountCtrl'
        }
      }
    })

    .state('changePw', {
      url: '/changepw',
      templateUrl: 'views/changePw.html',
      controller: 'changePwCtrl'
    })

    .state('app.address', {
      url: '/address',
      views: {
        'menuContent' :{
          templateUrl: 'views/address.html',
          controller: 'addressCtrl'
        }
      }
    })
    
    .state('app.past', {
      url: '/past',
      views: {
        'menuContent' :{
          templateUrl: 'views/past.html',
          controller: 'pastCtrl'
        }
      }
    })

    .state('app.order_detail', {
      url: '/order_detail',
      views: {
        'menuContent' :{
          templateUrl: 'views/order_detail.html',
          controller: 'order_detailCtrl'
        }
      }
    })

    .state('app.favourite', {
      url: '/favourite',
      views: {
        'menuContent' :{
          templateUrl: 'views/favourite.html',
          controller: 'favouriteCtrl'
        }
      }
    })

    .state('reorder', {
      url: '/reorder',
      templateUrl: 'views/reorder.html',
      controller: 'reorderCtrl'
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/load');

});