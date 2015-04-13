'use strict';

angular.module('sales.dashboard')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
          '@': {
            templateUrl: 'app/dashboard/controllers/main/view.html',
            controller: 'dashboard.main as controller'
          }
        }
      });
  })
  .controller('dashboard.main', function ($scope, $window) {
    $window.document.title = 'dashboard.main';
  });
