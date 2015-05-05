(function () {
  'use strict';
  angular.module('nextgroup')
    .directive('thtMap', [function(){
      return {
        restrict: 'E',
        link: function(scope, element, attrs){
          element.load('assets/map.svg',function(response){

            console.log('svg loaded');

            if(!response){
              // Error loading SVG!
              // Make absolutely sure you are running this on a web server or localhost!
            }

          });
        }
      }
    }]);
})();
