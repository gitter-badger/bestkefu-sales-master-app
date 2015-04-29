'use strict';

angular.module('sales.goods')
  .config(function ($stateProvider) {
    $stateProvider
      .state('goods', {
        url: '/goods',
        views: {
          '@': {
            templateUrl: 'app/goods/controllers/main/view.html',
            controller: 'GoodsMainController as vm'
          }
        }
      });
  })
  .controller('GoodsMainController', function ($scope, $window) {
    $window.document.title = 'Goods';
  });
