/**
 * Created by nguye on 22/11/2016.
 */
 angular.module('admin_student',['ui.router'])
     .config(function($stateProvider,$urlRouterProvider) {
         $urlRouterProvider.otherwise('/home');
         $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/admin/student/views/profile_student.html'
        })
        .state('register_dissertation', {
            url: '/register_dissertation',
            templateUrl: '/admin/student/views/register_dissertation.html'
        })
});
