'use strict';

angular.module('sales.dashboard')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard.create', {
        url: '/create',
        views: {
          '@': {
            templateUrl: 'app/dashboard/controllers/create/view.html',
            controller: 'dashboard.create as vm'
          }
        }
      });
  })
  .controller('dashboard.create', function ($scope, $window) {
    $window.document.title = "dashboard.create";
  });
