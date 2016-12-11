/**
 * Created by nguye on 13/11/2016.
 */


 angular.module('Faculty',['ui.router'])
     .config(function($stateProvider,$urlRouterProvider) {
         $urlRouterProvider.otherwise('/home');
         $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/admin/faculty/views/home.html'
        })
        .state('lecturer', {
            url: '/lecturer',
            templateUrl: '/admin/faculty/views/lecturer.html'
        })
        .state('course', {
            url: '/course',
            templateUrl: '/admin/faculty/views/course.html'
        })
        .state('courseprogram', {
            url: '/courseprogram',
            templateUrl: '/admin/faculty/views/courseprogram.html'
        })
        .state('students', {
            url: '/students',
            templateUrl: '/admin/faculty/views/students.html'
        })
        .state('dissertation', {
            url: '/dissertation',
            templateUrl: '/admin/faculty/views/dissertation.html'
        })
        .state('register_dissertation', {
            url: '/register_dissertation',
            templateUrl: '/admin/faculty/views/register_dissertation.html'
        })
});
