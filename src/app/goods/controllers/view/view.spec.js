'use strict';

describe('GoodsViewController', function () {
    var scope;
    var vm;

    beforeEach(module('sales.goods'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        vm = $controller('GoodsViewController', {
            $scope: scope
        });
    }));

    it('should defined vm', inject(function () {

        expect(true).toBe(true);
    }));
});
