'use strict';

angular.module('nextgroup', ['ngAnimate', 'ngTouch', 'ui.router', 'ui.bootstrap', 'duScroll',
  'headroom', 'angular-parallax'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);
    $stateProvider
      .state('home', {
        url: '/:section',
        views: {
          content: {
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl as vm'
          }
        }
      })
      .state('who-we-are', {
        url: '/quem-somos/:section',
        views: {
          'content@': {
            templateUrl: 'app/who-we-are/who-we-are.html',
            controller: 'WhoWeAreCtrl as vm'
          }
        }
      })
      .state('about-tht', {
        url: '/sobre-tht/:section',
        views: {
          'content@': {
            templateUrl: 'app/about-tht/about-tht.html',
            controller: 'AboutThtCtrl as vm'
          }
        }
      })
      .state('free-test', {
        url: '/teste-gratis/:section',
        views: {
          'content@': {
            templateUrl: 'app/free-test/free-test.html',
            controller: 'FreeTestCtrl as vm'
          }
        }
      })
    ;

    $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope, $document){

  })
  .filter('numberFixedLen', function () {
    return function (n, len) {
      var num = parseInt(n, 10);
      len = parseInt(len, 10);
      if (isNaN(num) || isNaN(len)) {
        return n;
      }
      num = ''+num;
      while (num.length < len) {
        num = '0'+num;
      }
      return num;
    };
  });
;
