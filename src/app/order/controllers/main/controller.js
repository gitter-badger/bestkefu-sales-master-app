'use strict';

angular.module('sales.order')
  .config(function ($stateProvider) {
    $stateProvider
      .state('order', {
        url: '/order',
        views: {
          '@': {
            templateUrl: 'app/order/controllers/main/view.html',
            controller: 'OrderMainController as controller'
          }
        }
      });
  })
  .controller('OrderMainController', function ($scope, $window, $rootScope) {
    $window.document.title = "order";
  });
