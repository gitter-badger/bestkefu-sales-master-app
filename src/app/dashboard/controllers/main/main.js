(function () {
  'use strict';

  angular.module('sales.dashboard')
    .config(function ($stateProvider) {
      $stateProvider
        .state('dashboard', {
          url: '/',
          views: {
            '@': {
              templateUrl: 'app/dashboard/controllers/main/view.html',
              controller: 'DashboardMainController as controller'
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
