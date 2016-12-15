/**
 * Created by thanh huyền on 15-Nov-16.
 */
'use strict';
angular.module('lecturer',['ngRoute'])
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'/common/lecturer/views/cntt/cntt.html',
                controller:''
            })
            .when('/lec_cntt_01', {
                templateUrl:'/common/lecturer/views/cntt/lec_info/lec_info_01.html',
                controller:''
            })
            .when('/dtvt', {
                templateUrl: '/common/lecturer/views/dtvt/dtvt.html',
                controller: ''
            })
            .when('/tt&mmt', {
                templateUrl: '/common/lecturer/views/tt&mmt/tt&mmt.html'
            })
            .when('/httt', {
                templateUrl: '/common/lecturer/views/httt/httt.html'
            })
            .otherwise ({
                redirectTo: '/'
            });
    }]);
