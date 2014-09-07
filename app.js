'use strict';

var app = angular.module('bio', ['ngRoute']);

app.controller('homeController', function($scope) {
      console.log('home ctrl has loaded...')
      $scope.user = {};
      $scope.submit = function() {
        $scope.user.button = true;
        console.log($scope.button);
      }
      $scope.hideLip = function() {
        $scope.user.button = false;
      }
});

app.controller('wifeController', function($scope){
  $scope.photo = './danae.jpg';
});

app.controller('bioController', function($scope, five, about){
  $scope.bio = {
    name: 'Dave',
    age: 37
  }
  $scope.greeting = 'hello world!';
  $scope.fivrr = five;
  $scope.background = about.blurb;
})

app.value('five', 5);

app.service('about', function(){
  return {
    blurb: 'This about was generated from a Service.'
  }
});

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
