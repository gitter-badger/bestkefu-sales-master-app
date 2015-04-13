'use strict';

describe('sales.dashboard main controller test case', function(){
  var scope;

  beforeEach(module('sales.dashboard'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    $controller('dashboard.main', {
      $scope: scope
    });
  }));

  it('should define name', inject(function($controller) {

  }));
});
