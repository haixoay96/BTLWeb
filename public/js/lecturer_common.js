/**
 * Created by thanh huyền on 15-Nov-16.
 */
'use strict';
angular.module('lecturer',['ui.router'])
    .config(function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/cntt');
        $stateProvider
            .state('cntt', {
                url : '/cntt',
                templateUrl:'/lecturer/cntt'
            })
            .state('dtvt', {
                url: '/dtvt',
                templateUrl: '/lecturer/dtvt'
            })
            .state('ckt', {
                url: '/ckt',
                templateUrl: '/lecturer/ckt'
            })
            .state('vlkt', {
                url: '/vlkt',
                templateUrl: '/lecturer/vlkt'
            })
    });
