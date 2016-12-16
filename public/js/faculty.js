/**
 * Created by nguye on 13/11/2016.
 */


 angular.module('Faculty',['ui.router'])
     .config(function($stateProvider,$urlRouterProvider) {
         $urlRouterProvider.otherwise('/home');
         $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/admin/faculty/home'
        })
        .state('lecturer', {
            url: '/lecturer',
            templateUrl: '/admin/faculty/lecturer.html'
        })
        .state('course', {
            url: '/course',
            templateUrl: '/admin/faculty/course'
        })
        .state('courseprogram', {
            url: '/courseprogram',
            templateUrl: '/admin/faculty/courseprogram'
        })
        .state('students', {
            url: '/students',
            templateUrl: '/admin/faculty/students.html'
        })
        .state('dissertation', {
            url: '/dissertation',
            templateUrl: '/admin/faculty/dissertation.html'
        })
        .state('register_dissertation', {
            url: '/register_dissertation',
            templateUrl: '/admin/faculty/register_dissertation'
        })
        .state('cancel', {
            url: '/cancel',
            templateUrl: '/admin/faculty/cancel'
        })
        .state('dsgv', {
            url: '/dsgv',
            templateUrl: '/admin/faculty/dsgiangvien'
        })
        .state('dssv', {
            url: '/dssv',
            templateUrl: '/admin/faculty/dssinhvien'
        })
        .state('bv', {
            url: '/bv',
            templateUrl: '/admin/faculty/notify.html'
        })
        .state('dsdt', {
            url: '/dsdt',
            templateUrl: '/admin/faculty/dsdt'
        })
        .state('thd', {
            url: '/thd',
            templateUrl: '/admin/faculty/taohd'
        })
});
