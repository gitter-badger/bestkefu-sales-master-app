'use strict';

angular.module('sales.dashboard')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard.create', {
        url: '/create/:user_id',
        views: {
          '@': {
            templateUrl: 'app/dashboard/controllers/create/view.html',
            controller: 'dashboard.create as vm'
          }
        }
      });
  })
  .controller('dashboard.create', function ($scope, $window, $stateParams) {
    $scope.name = 'dashboard.create';
    $window.document.title = "dashboard.create";

    console.log($stateParams);
  });
