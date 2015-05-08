(function () {
  angular.module('nextgroup')
    .directive('mouseActivatable', function(){
      return {
        restrict: 'A',
        link: function(scope, element){
          element.children().css('pointer-events', 'none');
          element.on('click', function(){
            element.children().css('pointer-events', 'all');
          })
            .on('mouseleave', function(){
              element.children().css('pointer-events', 'none');
            });
          scope.$on('$destroy', function() {
            element.off('click').off('mouseleave');
          });
        }
      }
    })
})();
