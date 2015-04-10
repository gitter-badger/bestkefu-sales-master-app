'use strict';

angular.module('sales', [
  'sales.dashboard',
  'sales.goods',
  'sales.order',
]).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/dashboard');
});
