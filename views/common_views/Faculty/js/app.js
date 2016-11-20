/**
 * Created by thanh huyền on 15-Nov-16.
 */
'use strict';
angular.module('faculty',['ngRoute'])
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'views/CNTT.html',
                controller:''
            })
            .when('/DTVT', {
                templateUrl: 'views/DTVT.html',
                controller: ''
            })
            .when('/CHKT', {
                templateUrl: 'views/CHKT.html'
            })
            .when('/VLKT', {
                templateUrl: 'views/VLKT.html'
            })
            .otherwise ({
                redirectTo: '/'
            });
    }]);