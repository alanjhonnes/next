(function () {
  'use strict';
  angular.module('nextgroup')
    .controller('AppCtrl', ['$window', '$scope', function ($window, $scope) {
      var w = angular.element($window);
      $scope.viewportHeight = $window.innerHeight;
      console.log($scope.viewportHeight);
      w.bind('resize', function(){
        $scope.viewportHeight = $window.innerHeight;
        console.log($scope.viewportHeight);
        //$scope.$apply();
      })
        .trigger('resize');
      $scope.$on("$destroy",function (){
        w.off("resize");
      });
    }]);
})();
