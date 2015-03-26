'use strict';

angular.module('sales', [
  'sales.dashboard',

  'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router'
]).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});
