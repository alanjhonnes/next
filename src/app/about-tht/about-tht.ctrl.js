(function(){
  'use strict';
  angular.module('nextgroup')
    .controller('AboutThtCtrl', ['$scope', '$document', '$stateParams', '$timeout',
      function($scope, $document, $stateParams, $timeout){
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
