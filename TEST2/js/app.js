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
                templateUrl:'views/cntt/cntt.html'
            })
            .state('lec_cntt_01', {
                url: '/lec_cntt_01',
                templateUrl:'views/cntt/lec_info/lec_info_01.html'
            })
            .state('dtvt', {
                url: '/dtvt',
                templateUrl: 'views/dtvt/dtvt.html'
            })
            .state('tt&mmt', {
                url: '/tt&mmt',
                templateUrl: 'views/tt&mmt/tt&mmt.html'
            })
            .state('httt', {
                url: '/httt',
                templateUrl: 'views/httt/httt.html'
            })
    });