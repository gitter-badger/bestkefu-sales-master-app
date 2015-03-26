'use strict';

describe('sales.dashboard controller main test', function(){
  var scope;

  beforeEach(module('sales.dashboard'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    $controller('MainController', {
      $scope: scope
    });
  }));

  it('should define hello', inject(function($controller) {

    expect(scope.hello).toBeDefined();
    expect(scope.hello).toBe('what kinds of you');
  }));
});
