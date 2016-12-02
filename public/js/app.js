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
                templateUrl:'/common/views/CNTT.html'
            })
            .state('DTVT', {
                url: '/DTVT',
                templateUrl: '/common/views/DTVT.html'
            })
            .state('CHKT', {
                url: '/CHKT',
                templateUrl: '/common/views/CHKT.html'
            })
            .state('VLKT', {
                url: '/VLKT',
                templateUrl: '/common/views/VLKT.html'
            })
    });
