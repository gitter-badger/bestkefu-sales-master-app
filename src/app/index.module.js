(function () {
  'use strict';

  angular.module('sales', [
    'sales.dashboard',
    'sales.goods'
  ]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  });
})();
