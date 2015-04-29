'use strict';

angular.module('nextgroup', ['ngAnimate', 'ngTouch', 'ui.router', 'ui.bootstrap', 'duScroll', 'headroom'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);
    $stateProvider
      .state('test', {
        url: '/test',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('home', {
        url: '',
        views: {
          nav: {
            templateUrl: 'components/navbar/navbar.html',
            controller: 'NavbarCtrl as vm'
          },
          content: {
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl as vm'
          },
          footer: {
            templateUrl: 'components/footer/footer.html',
            controller: 'FooterCtrl as vm'
          }
        }
      })
      .state('home.who-we-are', {
        url: '/quem-somos',
        views: {
          'content@': {
            templateUrl: 'app/who-we-are/who-we-are.html',
            controller: 'WhoWeAreCtrl as vm'
          }
        }
      })
      .state('home.about-tht', {
        url: '/sobre-tht',
        views: {
          'content@': {
            templateUrl: 'app/about-tht/about-tht.html',
            controller: 'AboutThtCtrl as vm'
          }
        }
      })
      .state('home.free-test', {
        url: '/teste-gratis',
        views: {
          'content@': {
            templateUrl: 'app/free-test/free-test.html',
            controller: 'FreeTestCtrl as vm'
          }
        }
      })
    ;

    $urlRouterProvider.otherwise('');
  })
  .run(function($rootScope){
    $rootScope.$on("$stateChangeError", console.log.bind(console));
  })
;
