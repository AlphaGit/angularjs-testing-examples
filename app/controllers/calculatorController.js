angular
  .module('MyApp')
  .controller('CalculatorController',
    ['$scope',
    function ($scope) {
      $scope.operand1 = 0;
      $scope.operand2 = 0;
      $scope.result = 0;
    }]
  );