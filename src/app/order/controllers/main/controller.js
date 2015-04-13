'use strict';

angular.module('sales.order')
  .config(function ($stateProvider) {
    $stateProvider
      .state('order', {
        url: '/order',
        views: {
          '@': {
            templateUrl: 'app/order/controllers/main/view.html',
            controller: 'order.main as controller'
          }
        }
      });
  })
  .controller('order.main', function ($scope, $window, $rootScope) {
    $window.document.title = "order";
  });
