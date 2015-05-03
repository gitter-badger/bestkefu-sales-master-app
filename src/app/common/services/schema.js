(function () {
  'use strict';

  /** @ngInject */
  function CommonSchemaService() {

    var service = {
      applyDataToStructure: function (structure, data) {

        var result = {};

        _.each(structure, function (value, key) {
          result[key] = _.isUndefined(data[key]) ? value : data[key];
        });

        return result;
      }
    };

    return service;
  }

  angular.module('sales.common').service('CommonSchemaService', CommonSchemaService);

})();
