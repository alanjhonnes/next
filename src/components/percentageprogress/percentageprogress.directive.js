(function () {
  angular.module('nextgroup')
    .directive('percentageProgress', [function(){
      return {
        restrict: 'E',
        scope: {
          ratio: "="
        },
        templateUrl: 'components/percentageprogress/percentageprogress.tmpl.html',
        controller: 'PercentageProgressCtrl as vm',
        bindToController: true,
        link: function(scope, element, attrs){

        }
      }
    }])
    .controller('PercentageProgressCtrl', ['$scope', function($scope){
      var vm = this;
      vm.progress = 0;
      $scope.$watch('vm.ratio', function(ratio){
        vm.progress = Math.round(ratio);
        vm.circleProgress = Math.min(vm.progress, 100);
      });
    }])
  ;
})();
