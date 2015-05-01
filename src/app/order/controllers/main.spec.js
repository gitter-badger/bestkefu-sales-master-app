(function () {
  'use strict';

  describe('OrderMainController', function () {
    var scope, vm;

    beforeEach(module('sales.order'));

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();

      vm = $controller('OrderMainController', {
        $scope: scope
      });
    }));

    it('abbish', function () {
      expect(vm).toBeDefined();
    });
  });

})();



