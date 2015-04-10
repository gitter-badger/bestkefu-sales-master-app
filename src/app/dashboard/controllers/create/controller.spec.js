'use strict';

describe('sales.dashboard main controller test case', function(){
  var scope;

  beforeEach(module('sales.dashboard'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    $controller('dashboard.create', {
      $scope: scope
    });
  }));

  it('should define name', inject(function($controller) {

    expect(scope.name).toBeDefined();
    expect(scope.name).toBe('dashboard.create');

    console.log($controller);
  }));
});
