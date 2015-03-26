'use strict';

angular.module('sales.dashboard')
  .controller('NavbarComponent', function ($scope) {
    $scope.date = new Date();
  });
