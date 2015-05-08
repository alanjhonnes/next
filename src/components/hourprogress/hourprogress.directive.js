(function () {
  angular.module('nextgroup')
    .directive('hourProgress', [function(){
      return {
        restrict: 'E',
        scope: {
          hours: "="
        },
        templateUrl: 'components/hourprogress/hourprogress.tmpl.html',
        controller: 'HourProgressCtrl as vm',
        bindToController: true,
        link: function(scope, element, attrs){

        }
      }
    }])
    .controller('HourProgressCtrl', ['$scope', function($scope){
      var vm = this;
      vm.progress = 0;
      $scope.$watch('vm.hours', function(hours){
        vm.progress = Math.round((hours / 24) * 100);
        vm.hour = Math.floor(hours);
        vm.minutes = Math.round((hours - vm.hour) * 100 / 60);
      });
    }])
  ;
})();
