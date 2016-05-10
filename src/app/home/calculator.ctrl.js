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
      var schedulingTime = 300; //5 minutes
      //R$ value per Analyst hour
      var valueAnalystPerHour = 12.2;


      var testDuration = 3600; //one hour

      var interviewsPerPositionWithoutTHT = 7;
      var interviewsPerPositionWithTHT = 3;
      var timePerInterview = 1200; // 20 minutes
      var minutesPerHour = 60;
      var secondsPerHour = 3600;

      var testCorrectionTime = 480; //8 minutes

      var candidatesForTests = 3;

      var globalAnalysisTimeWithoutTHT = 900; // 15 minutes
      var globalAnalysisTimeWithTHT = 300; //5 minutes

      var testsPerProcess = 4;

      var pricePerTest = 78;

      var totalTimeWithoutTHT = 0;
      var totalTimeWithTHT = 0;



      // $26.5
      var baseTestPrice = 40;

      var calculatedProcessesPerMonth = 0;
      var testsDiscountRatio = 1;

      function getDiscount(){
        var processesPerMonth = vm.processes;
        if(processesPerMonth <= 5){
          return 1.18; //+18%
        }
        else if(processesPerMonth <= 10){
          return 1.18 - 0.036 * (processesPerMonth - 5);
        }
        else if(processesPerMonth <= 15) {
          return 1 - (0.008 * (processesPerMonth - 10));
        }
        //more than 15 processes per month
        else {
          //max discount of 20%
          return Math.max(1 - 0.04 - (0.0009 * (processesPerMonth - 15)), 0.8);
        }
      }

      function getPricePerTest(){
        var pricePerTest = baseTestPrice;
        var processesPerMonth = vm.processes;
        if(processesPerMonth <= 110){
          pricePerTest -= processesPerMonth * 0.1;
        }
        else {
          pricePerTest -= 11;
          pricePerTest -= (processesPerMonth - 110) * 0.066;
        }
        //console.log(pricePerTest);
        return pricePerTest * 3;
      }

      $scope.$watch('vm.employees', function(employees){
        //calculatedProcessesPerMonth = vm.employees * positionsPerMonthRatio;

        recalculateValues();
      });
      $scope.$watch('vm.processes', function(processes){
        calculatedProcessesPerMonth = vm.processes;
        if(calculatedProcessesPerMonth > 150){
          vm.showWarningMessage = false;
        }
        else {
          vm.showWarningMessage = false;
        }
        testsDiscountRatio = getDiscount();

        vm.discountPercentage = - Math.round((testsDiscountRatio - 1) * 100);
        vm.unlimitedPricePercentage = Math.round(testsDiscountRatio * 100);
        //console.log('desconto nos tests', vm.discountPercentage);
        //console.log('desconto nos tests', vm.unlimitedPricePercentage);
        vm.processes = processes;
        if(vm.processes > 150){
          vm.showWarningMessage = true;
        }
        else {
          vm.showWarningMessage = false;
        }
        //calculatedProcessesPerMonth = vm.processes;
        //testsDiscountRatio = getDiscount();
        //vm.discountPercentage = (testsDiscountRatio - 1) * 100;
        recalculateValues();
      });

      function recalculateValues(){
        if(vm.processes > 0){
          vm.showResults = true;
        }
        else {
          vm.showResults = false;
        }

        pricePerTest = getPricePerTest();



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

        //console.log(processTimeWithoutTHT);
        //console.log(processTimeWithTHT);


        vm.hoursPerProcessWithoutTHT = processTimeWithoutTHT / secondsPerHour;
        vm.hoursPerProcessWithTHT = processTimeWithTHT / secondsPerHour;

        vm.percentageSavedPerProcess = (processTimeWithTHT / processTimeWithoutTHT) * 100;



        vm.percentageTime = 100 - ((processTimeWithTHT * 100) / processTimeWithoutTHT);

        var hoursTotalPerMonthWithoutTHT = processTimeWithoutTHT * vm.processes / secondsPerHour;
        var hoursTotalPerMonthWithTHT = processTimeWithTHT * vm.processes / secondsPerHour;

        vm.hoursSavedPerProcess = ((processTimeWithoutTHT - processTimeWithTHT) / secondsPerHour) / vm.processes;
        vm.hoursSavedPerMonth = vm.hoursSavedPerProcess * vm.processes;
        vm.hoursSavedPerYear = vm.hoursSavedPerMonth * 12;

        var testsPerMonth = calculatedProcessesPerMonth * testsPerProcess;

        var totalMoneySpentInTestsWithoutTHT = (testsPerMonth * pricePerTest * 12);
        var totalMoneySpentInTestsWithTHT = (testsPerMonth * pricePerTest * 12 * testsDiscountRatio);

        //console.log('testes without', totalMoneySpentInTestsWithoutTHT);
        //console.log('testes with', totalMoneySpentInTestsWithTHT);

        var moneyTotalWithoutTHT = (hoursTotalPerMonthWithoutTHT * valueAnalystPerHour * 12)
          + totalMoneySpentInTestsWithoutTHT;
        var moneyTotalWithTHT = (hoursTotalPerMonthWithTHT * valueAnalystPerHour * 12)
          + totalMoneySpentInTestsWithTHT;
        //console.log('total without', moneyTotalWithoutTHT);
        //console.log('total with', moneyTotalWithTHT);


        vm.percentageMoney = 100 - (moneyTotalWithTHT * 100) / moneyTotalWithoutTHT;

        //vm.moneySavedPerYear = moneyTotalWithoutTHT - moneyTotalWithTHT;
        //vm.mo = vm.hoursSavedPerMonth * valueAnalystPerHour * 12;

      }



    }]);
})();
