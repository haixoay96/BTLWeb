/**
 * Created by nguye on 13/11/2016.
 */


angular.module('Faculty', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
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
            .state('lecturer.upload', {
                url: '/upload',
                templateUrl: 'admin/faculty/formupload_lecturer.html'
            })
            .state('lecturer.input', {
                url: '/input',
                templateUrl: 'admin/faculty/form_lecturerinfo.html'
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
            .state('students.upload', {
                url: '/upload',
                templateUrl: 'admin/faculty/formupload_students.html'
            })
            .state('students.input', {
                url: '/input',
                templateUrl: 'admin/faculty/form_students.html'
            })
            .state('dissertation', {
                url: '/dissertation',
                templateUrl: '/admin/faculty/dissertation.html'
            })
            .state('register_dissertation', {
                url: '/register_dissertation',
                templateUrl: '/admin/faculty/register_dissertation'
            })
            .state('registed', {
                url: '/registed',
                templateUrl: '/admin/faculty/registed'
            })
    });
