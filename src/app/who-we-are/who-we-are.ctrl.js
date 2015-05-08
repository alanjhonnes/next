(function () {
  'use strict';
  angular.module('nextgroup')
    .controller('WhoWeAreCtrl', ['$scope', '$stateParams', '$document', '$timeout',
      function ($scope, $stateParams, $document, $timeout) {
        var vm = this;
        $scope.$on("$viewContentLoaded", function(event){
          if($stateParams.section){
            $timeout(function(){
              $document.duScrollToElement(document.getElementById($stateParams.section), 0, 1000)
            }, 1000);
          }
        });
      }]);
})();
