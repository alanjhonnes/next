(function () {
  'use strict';
  angular.module('nextgroup')
    .controller('AppCtrl', ['$window', '$scope', '$document', function ($window, $scope, $document) {
      var w = angular.element($window);
      $scope.showHelp = false;
      $scope.viewportHeight = $window.innerHeight;
      w.bind('resize', function(){
        $scope.viewportHeight = $window.innerHeight;
        //$scope.$apply();
      })
        .trigger('resize');
      $scope.$on("$destroy",function (){
        w.off("resize");
      });

      $document.on('scroll', function() {
        if($document.scrollTop() > 1200){
          $scope.showHelp = true;
        }
        else {
          $scope.showHelp = false;
        }
        $scope.$apply();
      });
      var container = angular.element(document.getElementById('container'));
      container.on('scroll', function() {
        console.log('Container scrolled to ', container.scrollLeft(), container.scrollTop());
      });
    }]);
})();
