(function () {
  'use strict';

  describe('GoodsSchema', function () {

    beforeEach(module('sales.goods'));

    it('should defined data structure', inject(function (GoodsSchema) {

      expect(GoodsSchema.structure).toBeDefined();
    }));
  });

})();
