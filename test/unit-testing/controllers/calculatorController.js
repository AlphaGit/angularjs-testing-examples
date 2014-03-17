describe('CalculatorController', function() {
  var $scope,
    calculatorController;

  beforeEach(module('MyApp'));
	beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    calculatorController = $controller('CalculatorController', { $scope: $scope });
  }));

  it('should have operand1 defined', function() {
    expect($scope.operand1).toBeDefined();
  });

  it('should have operand2 defined', function() {
    expect($scope.operand2).toBeDefined();
  });
});