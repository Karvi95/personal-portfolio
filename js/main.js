// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app
myApp.config(function($stateProvider){
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
        }).state('projects',{
            url:'/projects',
            templateUrl:'templates/projects.html',
            controller: 'projectsController',
        }).state('code',{
            url:'/code',
            templateUrl:'templates/code.html',
            controller:'codeController'
        }).state('about',{
            url:'/about',
            templateUrl:'templates/about.html',
            controller:'AboutController'
        })
})

// Landing page controller: define $scope.number as a number
.controller('HomeController',function($scope, $http){
})

// projects controller: define $scope.url as an image
.controller('projectsController', function($scope, $http){
    $http.get("data/projectsList.json").success(function(response) {
        $scope.projects = response;
    })
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope, $http){
    $http.get("data/intro.json").success(function(response) {
        $scope.intro = response;
    })   
    $http.get("data/hobbies.json").success(function(response) {
        $scope.hobbies = response;
    })
    $http.get("data/interests.json").success(function(response) {
        $scope.interests = response;
    })
})

.controller('codeController', function($scope, $http){
    $http.get("data/codingExperience.json").success(function(response) {
        $scope.exps = response;
    })
    $http.get("data/code.json").success(function(response) {
        $scope.github = response;
    })
})

