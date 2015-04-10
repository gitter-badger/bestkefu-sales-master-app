'use strict';

describe('sales.goods main controller test case', function(){
  var scope;

  beforeEach(module('sales.goods'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    $controller('goods.main', {
      $scope: scope
    });
  }));

  it('should define name', inject(function($controller) {

    expect(scope.name).toBeDefined();
    expect(scope.name).toBe('goods.main');
  }));
});
