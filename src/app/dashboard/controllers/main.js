(function () {
  'use strict';

  angular.module('sales.dashboard')
    .config(function ($stateProvider) {
      $stateProvider
        .state('dashboard', {
          url: '/',
          views: {
            '@': {
              templateUrl: 'app/dashboard/views/main.html',
              controller: 'DashboardMainController as vm'
            }
          }
        });
    })
    .controller('DashboardMainController', DashboardMainController);

  /** @ngInject */
  function DashboardMainController($scope, $window) {
    $window.document.title = 'Dashboard';
  }
})();
