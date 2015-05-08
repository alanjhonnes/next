(function () {
  'use strict';
  angular.module('nextgroup')
    .controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
      var vm = this;
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
            url     : 'http://nxtgroup.com.br/contact-form.php',
            data    : { inputName: vm.name, inputEmail: vm.email, inputPhone: vm.phone, inputMessage: vm.message  },  //param method from jQuery
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
    }])
})();
