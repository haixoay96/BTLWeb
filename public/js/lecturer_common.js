/**
 * Created by thanh huyền on 15-Nov-16.
 */
'use strict';
angular.module('lecturer',['ui.router'])
    .config(function($stateProvider,$urlRouteProvider) {
        $urlRouteProvider.otherwise('/cntt');
        $stateProvider
            .state('cntt', {
                url: '/cntt',
                templateUrl:'/common/lecturer/views/cntt/cntt.html'
            })
            .state('/lec_cntt_01', {
                url: '/lec_cntt_01',
                templateUrl:'/common/lecturer/views/cntt/lec_info/lec_info_01.html'
            })
            .state('dtvt', {
                url: '/dtvt',
                templateUrl: '/common/lecturer/views/dtvt/dtvt.html'
            })
            .state('tt&mmt', {
                url: '/tt&mmt',
                templateUrl: '/common/lecturer/views/tt&mmt/tt&mmt.html'
            })
            .state('httt', {
                url: '/httt',
                templateUrl: '/common/lecturer/views/httt/httt.html'
            })
    });
