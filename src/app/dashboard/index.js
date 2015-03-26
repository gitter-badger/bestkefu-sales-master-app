'use strict';

angular.module('sales.dashboard', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/dashboard/controllers/main/view.html',
        controller: 'MainController'
      });
  })
;
