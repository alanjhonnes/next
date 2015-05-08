(function () {
  'use strict';
  angular.module('nextgroup')
    .controller('FreeTestCtrl', ['$scope', '$stateParams', '$document', '$timeout', '$http',
      function ($scope, $stateParams, $document, $timeout, $http) {
      var vm = this;
        $scope.$on("$viewContentLoaded", function(event){
          if($stateParams.section){
            $timeout(function(){
              $document.duScrollToElement(document.getElementById($stateParams.section), 0, 1000)
            }, 1000);
          }
        });

        vm.result = 'hidden';
        vm.resultMessage;
        vm.formData; //formData is an object holding the name, email, subject, and message
        vm.submitButtonDisabled = false;
        vm.submitted = false; //used so that form errors are shown only after the form has been submitted
        vm.submit = function(contactform) {
          vm.submitted = true;
          vm.submitButtonDisabled = true;
          if (contactform.$valid) {
            $http({
              method  : 'POST',
              url     : 'http://nxtgroup.com.br/contact-test-form.php',
              data    : {
                name: vm.name,
                lastName: vm.lastname,
                email: vm.email,
                phone: vm.phone,
                company: vm.company,
                employees: vm.employees,
                position: vm.position
              },
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
              console.log(data);
              if (data.success) { //success comes from the return json object
                vm.submitButtonDisabled = false;
                vm.resultMessage = data.message;
                vm.result = 'alert-success';
              } else {
                vm.submitButtonDisabled = false;
                vm.resultMessage = data.message;
                vm.result = 'alert-danger';
              }
            });
          } else {
            vm.submitButtonDisabled = false;
            vm.resultMessage = 'Preencha todos os campos.';
            vm.result = 'alert-danger';
          }
        }
    }]);
})();
