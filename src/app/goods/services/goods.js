(function () {
  'use strict';

  /** @ngInject */
  function GoodsService(GoodsSchema, CommonSchemaService) {

    var service = {
      find: function (id) {

        return CommonSchemaService.applyDataToStructure(GoodsSchema.structure, {
          id: id
        });
      }
    };

    return service;
  }

  angular.module('sales.goods').factory('GoodsService', GoodsService);

})();


