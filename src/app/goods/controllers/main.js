(function () {
  'use strict';

  /** @ngInject */
  function GoodsMainController($scope, $window) {
    $window.document.title = 'Goods';
  }

  angular.module('sales.goods')
    .config(function ($stateProvider) {
      $stateProvider
        .state('goods', {
          url: '/goods',
          views: {
            '@': {
              templateUrl: 'app/goods/views/main.html',
              controller: 'GoodsMainController as vm'
            }
          }
        });
    })
    .controller('GoodsMainController', GoodsMainController);

})();
