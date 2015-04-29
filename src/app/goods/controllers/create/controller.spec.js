'use strict';

describe('GoodsCreateController', function(){
  var scope;
  var vm;

  beforeEach(module('sales.goods'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    vm = $controller('GoodsCreateController', {
      $scope: scope
    });
  }));

  it('should defined form data structure from goods schema', inject(function($rootScope, $controller) {

    expect(vm.data).toBeDefined();
    expect(vm.data.name).toBeDefined();
    expect(vm.data.code).toBeDefined();
    expect(vm.data.status).toBeDefined();

  }));

  it('should has error when form data is invalid', inject(function($controller) {

  }));
});
