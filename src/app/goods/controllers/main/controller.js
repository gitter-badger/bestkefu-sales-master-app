'use strict';

angular.module('sales.goods')
  .config(function ($stateProvider) {
    $stateProvider
      .state('goods', {
        url: '/goods',
        views: {
          '@': {
            templateUrl: 'app/goods/controllers/main/view.html',
            controller: 'goods.main as controller'
          }
        }
      });
  })
  .controller('goods.main', function ($scope, $window) {
    $scope.name = 'goods.main';
    $window.document.title = "goods";
  });
