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

  it('should same to goods schema for form data structure', inject(function(GoodsSchema) {

    expect(vm.data).toBeDefined();

    _.each(GoodsSchema.structure, function(item, index){
      expect(vm.data[index]).toBeDefined();
    });

  }));

  it('should has error when form data is invalid', inject(function() {

  }));
});
