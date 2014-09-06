var app = angular.module('bio', ['ngRoute']);

app.controller('homeController', function($scope, five, about){

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
    blurb: 'this is bio and I know that a service is probably a bit much.'
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
