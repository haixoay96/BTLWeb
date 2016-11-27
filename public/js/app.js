/**
 * Created by thanh huyền on 15-Nov-16.
 */
'use strict';
angular.module('faculty',['ui.router'])
    .config(function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/CNTT');
        $stateProvider
            .state('CNTT', {
                url:'/CNTT',
                templateUrl:'/views/CNTT.html'
            })
            .state('DTVT', {
                url: '/DTVT',
                templateUrl: '/views/DTVT.html'
            })
            .state('CHKT', {
                url: '/CHKT',
                templateUrl: '/views/CHKT.html'
            })
            .state('VLKT', {
                url: '/VLKT',
                templateUrl: '/views/VLKT.html'
            })
    });
