(function () {
  'use strict';
  angular.module('nextgroup')
    .controller('HomeCtrl', function () {
      var vm = this;
      vm.slides = [
        { image: 'assets/images/banner1.jpg'},
        { image: 'assets/images/banner2.jpg'},
        { image: 'assets/images/banner3.jpg'},
        { image: 'assets/images/banner4.jpg'},
        { image: 'assets/images/banner5.jpg'},
        { image: 'assets/images/banner6.jpg'}
      ]
    });
})();
