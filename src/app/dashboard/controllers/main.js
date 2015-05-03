(function () {
  'use strict';

  /** @ngInject */
  function DashboardMainController($scope, $window) {
    $window.document.title = 'Dashboard';
  }

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

})();
