'use strict';

angular.module('sales.common').service('CommonSchemaService', function() {

  var service = {
    applyData: function(structure, data) {

      var result = {};

      _.each(structure, function(value, key){
        result[key] = _.isUndefined(data[key]) ? value : data[key];
      });

      return result;
    }
  };

  return service;
});
