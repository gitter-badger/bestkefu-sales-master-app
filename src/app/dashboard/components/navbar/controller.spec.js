'use strict';

describe('sales.dashboard component navbar test', function(){
  var scope;

  beforeEach(module('sales.dashboard'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    $controller('NavbarComponent', {
      $scope: scope
    });
  }));

  it('should define hello', inject(function($controller) {

    expect(scope.date).toBeDefined();
  }));
});
