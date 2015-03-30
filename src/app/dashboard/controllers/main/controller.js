'use strict';

angular.module('sales.dashboard')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'app/dashboard/controllers/main/view.html',
        controller: 'MainController'
      });
  })
  .controller('MainController', function ($scope, $window) {
    $scope.hello = 'what kinds of you';
    $window.document.title = "abbish is a god boy";
  });
