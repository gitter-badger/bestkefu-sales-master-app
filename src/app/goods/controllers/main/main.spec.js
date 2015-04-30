'use strict';

describe('GoodsMainController', function(){
  var scope;

  beforeEach(module('sales.goods'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    $controller('GoodsMainController', {
      $scope: scope
    });
  }));
});
