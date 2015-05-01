(function () {
    'use strict';

    angular.module('sales.goods')
        .config(function ($stateProvider) {
            $stateProvider
                .state('goods.view', {
                    url: '/goods/view/:id',
                    views: {
                        '@': {
                            templateUrl: 'app/goods/views/view.html',
                            controller: 'GoodsViewController as vm'
                        }
                    }
                });
        })
        .controller('GoodsViewController', GoodsViewController);

    /** @ngInject */
    function GoodsViewController($scope, $window) {

        _.extend(this, {});
    }
})();

