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
      var positionsPerMonth = 0;
      //average positions available per month on average based on the total number of employees.
      var positionsPerMonthRatio = 0.07;
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

      var interviewsPerPosition = 10;
      var timePerInterview = 1200; // 20 minutes
      var minutesPerHour = 60;
      var secondsPerHour = 3600;

      var testCorrectionTime = 480; //8 minutes

      var candidatesForInterview = 7;

      var globalAnalysisTimeWithoutTHT = 900; // 15 minutes
      var globalAnalysisTimeWithTHT = 300; //5 minutes


      var pricePerTest = 0;

      var totalTimeWithoutTHT = 0;
      var totalTimeWithTHT = 0;
      $scope.$watch('vm.employees', function(employees){
        positionsPerMonth = employees * positionsPerMonthRatio;
        recalculateValues();
      });
      $scope.$watch('vm.processes', function(processes){
        vm.processes = processes;
        recalculateValues();
      });

      function recalculateValues(){
        var processTimeWithoutTHT =
          (positionsPerMonth * numberOfPublications * publicationTime)
        + (positionsPerMonth * CVsPerPosition * revisionTimePerCV)
        + (positionsPerMonth * schedulingTime)
        + positionsPerMonth * interviewsPerPosition * timePerInterview + testDuration
        + positionsPerMonth * candidatesForInterview * testCorrectionTime + globalAnalysisTimeWithoutTHT;

        var processTimeWithTHT =
          positionsPerMonth * numberOfPublications * publicationTime * 0.85
        + positionsPerMonth * CVsPerPosition * revisionTimePerCV
        + positionsPerMonth * schedulingTime
        + positionsPerMonth * candidatesForInterview + globalAnalysisTimeWithTHT;

        vm.hoursPerProcessWithoutTHT = processTimeWithoutTHT / secondsPerHour;
        vm.hoursPerProcessWithTHT = processTimeWithTHT / secondsPerHour;

        vm.percentageTime = (processTimeWithTHT * 100) / processTimeWithoutTHT;

        var hoursTotalPerMonthWithoutTHT = processTimeWithoutTHT * vm.processes / secondsPerHour;
        var hoursTotalPerMonthWithTHT = processTimeWithTHT * vm.processes / secondsPerHour;



        vm.hoursSavedPerProcess = (processTimeWithoutTHT - processTimeWithTHT) / secondsPerHour;
        vm.hoursSavedPerMonth = vm.hoursSavedPerProcess * vm.processes;
        vm.hoursSavedPerYear = vm.hoursSavedPerMonth * 12;

        var moneyTotalWithoutTHT = hoursTotalPerMonthWithoutTHT * valueAnalystPerHour * 12;
        var moneyTotalWithTHT = hoursTotalPerMonthWithTHT * valueAnalystPerHour * 12;

        vm.percentageMoney = (moneyTotalWithTHT * 100) / moneyTotalWithoutTHT;
        vm.moneySavedPerYear = moneyTotalWithoutTHT - moneyTotalWithTHT;
        //vm.mo = vm.hoursSavedPerMonth * valueAnalystPerHour * 12;

      }



    }]);
})();
