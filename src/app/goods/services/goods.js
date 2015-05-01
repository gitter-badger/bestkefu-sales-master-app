(function () {
  'use strict';

  angular.module('sales.goods').factory('GoodsService', GoodsService);

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

})();


