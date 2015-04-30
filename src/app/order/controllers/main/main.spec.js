'use strict';

describe('OrderMainController', function(){
  var scope;

  beforeEach(module('sales.order'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    $controller('OrderMainController', {
      $scope: scope
    });
  }));

  it('should define name', inject(function() {

  }));
});
