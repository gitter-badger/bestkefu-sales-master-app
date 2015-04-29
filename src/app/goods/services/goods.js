'use strict';

angular.module('sales.goods').factory('GoodsService', function (GoodsSchema, CommonSchemaService) {

  var service = {
    find: function (id) {

      return CommonSchemaService.applyData(GoodsSchema.structure, {
        id: id
      });
    }
  };

  return service;
});
