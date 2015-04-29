"use strict";

angular.module('sales.goods').service('GoodsSchema', function (CommonSchemaService) {

  this.dataStructure = function () {
    return {
      name: "",
      code: "",
      status: ""
    };
  };
});
