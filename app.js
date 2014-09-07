'use strict';

var app = angular.module('bio', ['ngRoute']);

app.config([ '$routeProvider', function($routeProvider){
  $routeProvider.
    when('/', {
      controller: 'homeController',
      templateUrl: 'home.html'
    }).
    when('/wife', {
      templateUrl: 'wife.html',
      controller: 'wifeController'
    }).
    when('/bio', {
      templateUrl: 'bio.html',
      controller: 'bioController'
    })
}]);
