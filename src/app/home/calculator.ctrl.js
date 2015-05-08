(function () {
  'use strict';
  angular.module('nextgroup')
    .controller('CalculatorCtrl', ['$scope', function ($scope) {
      var vm = this;
      vm.employees = 0;
      vm.processes = 0;
      vm.percentageTime = 0;
      vm.percentageMoney = 0;
      vm.hoursSavedPerProcess = 0;
      vm.showResults = false;
      var positionsPerMonth = 0;
      //average positions available per month on average based on the total number of employees.
      var positionsPerMonthRatio = 0.075;
      //how many CVs in average
      var CVsPerPosition = 100;
      //how long does it take to review each CV in seconds
      var revisionTimePerCV = 10;
      //number of sites to publish the position too.
      var numberOfPublications = 5;
      //publication time in seconds
      var publicationTime = 180; //3 minutes
      //scheduling time per position in seconds
      var schedulingTime = 900; //15 minutes
      //R$ value per Analyst hour
      var valueAnalystPerHour = 12.2;


      var testDuration = 3600; //one hour

      var interviewsPerPositionWithoutTHT = 10;
      var interviewsPerPositionWithTHT = 5;
      var timePerInterview = 1200; // 20 minutes
      var minutesPerHour = 60;
      var secondsPerHour = 3600;

      var testCorrectionTime = 480; //8 minutes

      var candidatesForTests = 7;

      var globalAnalysisTimeWithoutTHT = 900; // 15 minutes
      var globalAnalysisTimeWithTHT = 300; //5 minutes

      var testsPerProcess = 3;

      var pricePerTest = 120;

      var totalTimeWithoutTHT = 0;
      var totalTimeWithTHT = 0;

      function getDiscount(employees){
        var calculatedProcesses = employees * positionsPerMonthRatio;
        if(calculatedProcesses <= 5){
          return 1.18; //+18%
        }
        else if(calculatedProcesses <= 10){
          return 1.18 - 0.036 * (calculatedProcesses - 5);
        }
        //more than 10 processes per month
        else {
          return 1 - 0.008 * (calculatedProcesses - 10);
        }
      }

      $scope.$watch('vm.employees', function(employees){
        //positionsPerMonth = employees * positionsPerMonthRatio;
        vm.discount = (getDiscount(employees) - 1) * 100;
        recalculateValues();
      });
      $scope.$watch('vm.processes', function(processes){
        vm.processes = processes;
        if(vm.processes > 150){
          vm.showWarningMessage = true;
        }
        else {
          vm.showWarningMessage = false;
        }
        recalculateValues();
      });

      function recalculateValues(){
        if(vm.employees > 0 && vm.processes > 0){
          vm.showResults = true;
        }
        else {
          vm.showResults = false;
        }
        var processTimeWithoutTHT =
          (vm.processes * numberOfPublications * publicationTime)
        + (vm.processes * CVsPerPosition * revisionTimePerCV)
        + (vm.processes * schedulingTime)
        + (vm.processes * interviewsPerPositionWithoutTHT * timePerInterview) + testDuration
        + (vm.processes * candidatesForTests * testCorrectionTime)
          + globalAnalysisTimeWithoutTHT;

        var processTimeWithTHT =
          (vm.processes * numberOfPublications * publicationTime) * 0.85
        + (vm.processes * CVsPerPosition * revisionTimePerCV)
        + (vm.processes * schedulingTime)
        + (vm.processes * interviewsPerPositionWithTHT  * timePerInterview)
          + globalAnalysisTimeWithTHT;

        console.log(processTimeWithoutTHT);
        console.log(processTimeWithTHT);


        vm.hoursPerProcessWithoutTHT = processTimeWithoutTHT / secondsPerHour;
        vm.hoursPerProcessWithTHT = processTimeWithTHT / secondsPerHour;



        vm.percentageTime = 100 - ((processTimeWithTHT * 100) / processTimeWithoutTHT);

        var hoursTotalPerMonthWithoutTHT = processTimeWithoutTHT * vm.processes / secondsPerHour;
        var hoursTotalPerMonthWithTHT = processTimeWithTHT * vm.processes / secondsPerHour;

        vm.hoursSavedPerProcess = ((processTimeWithoutTHT - processTimeWithTHT) / secondsPerHour) / vm.processes;
        vm.hoursSavedPerMonth = vm.hoursSavedPerProcess * vm.processes;
        vm.hoursSavedPerYear = vm.hoursSavedPerMonth * 12;

        var moneyTotalWithoutTHT = hoursTotalPerMonthWithoutTHT * valueAnalystPerHour * 12;
        var moneyTotalWithTHT = hoursTotalPerMonthWithTHT * valueAnalystPerHour * 12;

        vm.percentageMoney = (moneyTotalWithTHT * 100) / moneyTotalWithoutTHT;
        vm.moneySavedPerYear = moneyTotalWithoutTHT - moneyTotalWithTHT;
        //vm.mo = vm.hoursSavedPerMonth * valueAnalystPerHour * 12;

        var testsCostsWithoutTHT = (vm.employees * positionsPerMonthRatio * 12) * testsPerProcess * pricePerTest;
       // var testsCostsWithTHT =

      }



    }]);
})();
