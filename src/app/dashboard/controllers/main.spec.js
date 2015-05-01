(function () {
  'use strict';

  describe('DashboardMainController', function () {
    var scope, vm;

    beforeEach(module('sales.dashboard'));

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();

      vm = $controller('DashboardMainController', {
        $scope: scope
      });
    }));

    it('should defained vm', function () {
      expect(vm).toBeDefined();
    });
  });

})();



