(function () {
  'use strict';

  /** @ngInject */
  function GoodsCreateController($scope, $window, GoodsSchema) {
    $window.document.title = 'Create Goods';

    _.extend(this, {
      data: GoodsSchema.structure
    });
  }

  angular.module('sales.goods')
    .config(function ($stateProvider) {
      $stateProvider
        .state('goods.create', {
          url: '/goods/create',
          views: {
            '@': {
              templateUrl: 'app/goods/views/create.html',
              controller: 'GoodsCreateController as vm'
            }
          }
        });
    })
    .controller('GoodsCreateController', GoodsCreateController);
})();

