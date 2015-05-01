(function () {

  'use strict';

  describe('GoodsService', function () {

    beforeEach(module('sales.goods'));

    it('should return goods data when find by id', inject(function (GoodsService, GoodsSchema) {

      var data = GoodsService.find(1);

      _.each(GoodsSchema.structure, function (item, index) {
        expect(data[index]).toBeDefined();
      });

      expect(data.id).toBe(1);
    }));
  });
})();




