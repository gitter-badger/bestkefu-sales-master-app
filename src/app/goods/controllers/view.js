(function () {
  'use strict';

  /** @ngInject */
  function GoodsViewController() {

    _.extend(this, {});
  }

  angular.module('sales.goods')
    .config(function ($stateProvider) {
      $stateProvider
        .state('goods.view', {
          url: '/goods/view/:id',
          views: {
            '@': {
              templateUrl: 'app/goods/views/view.html',
              controller: 'GoodsViewController as vm'
            }
          }
        });
    })
    .controller('GoodsViewController', GoodsViewController);


})();

