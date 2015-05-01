(function () {
  'use strict';

  describe('DashboardMainController', function () {
    var scope;

    beforeEach(module('sales.dashboard'));

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();

      $controller('DashboardMainController', {
        $scope: scope
      });
    }));

    it('abbish', function () {
      expect(1).toBe(1);
    });
  });

})();



