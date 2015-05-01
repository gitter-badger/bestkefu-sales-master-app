'use strict';

describe('GoodsViewController', function () {
  var scope;
  var vm;
  var rs;

  beforeEach(module('sales.goods'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();

    vm = $controller('GoodsViewController', {
      $scope: scope
    });

    _.extend(vm, {
      abbish: function(){
        return true;
      }
    });

    spyOn(vm, 'abbish').and.callThrough();

    rs = vm.abbish();
  }));

  it('should have called abbish method', inject(function () {
    expect(vm.abbish).toHaveBeenCalled();
  }));

  it('should return true when call abbish method', inject(function() {
    expect(rs).toBe(true);
  }));
});
