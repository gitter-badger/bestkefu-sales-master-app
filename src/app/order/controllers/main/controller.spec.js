'use strict';

describe('sales.order main controller test case', function(){
  var scope;

  beforeEach(module('sales.order'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    $controller('order.main', {
      $scope: scope
    });
  }));

  it('should define name', inject(function($controller) {

    expect(scope.name).toBeDefined();
    expect(scope.name).toBe('order.main');
  }));
});
