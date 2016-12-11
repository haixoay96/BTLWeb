angular.module('admin_lecturer',['ui.router'])
    .config(function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/admin/lecturer/views/profile_lecturer.html'
        })
        .state('research', {
            url: '/research',
            templateUrl: '/admin/lecturer/views/research.html'
        })
        .state('field', {
            url: '/field',
            templateUrl: '/admin/lecturer/views/field.html'
        })
});
