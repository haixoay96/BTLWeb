/**
 * Created by thanh huyền on 15-Nov-16.
 */
'use strict';
angular.module('lecturer',['ngRoute'])
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'views/cntt/cntt.html',
                controller:''
            })
            .when('/lec_cntt_01', {
                templateUrl:'views/cntt/lec_info/lec_info_01.html',
                controller:''
            })
            .when('/dtvt', {
                templateUrl: 'views/dtvt/dtvt.html',
                controller: ''
            })
            .when('/tt&mmt', {
                templateUrl: 'views/tt&mmt/tt&mmt.html'
            })
            .when('/httt', {
                templateUrl: 'views/httt/httt.html'
            })
            .otherwise ({
                redirectTo: '/'
            });
    }]);