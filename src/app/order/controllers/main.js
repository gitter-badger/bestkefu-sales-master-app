(function () {
  'use strict';

  /** @ngInject */
  function OrderMainController($scope, $window) {
    $window.document.title = 'Order';
  }

  angular.module('sales.order')
    .config(function ($stateProvider) {
      $stateProvider
        .state('order', {
          url: '/order',
          views: {
            '@': {
              templateUrl: 'app/order/views/main.html',
              controller: 'OrderMainController as vm'
            }
          }
        });
    })
    .controller('OrderMainController', OrderMainController);

})();
