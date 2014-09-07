'use strict';

var app = angular.module('bio');

app.directive("myWife", function() {
  return {
    restrict: 'E',
    templateUrl: "wife_info.html"
  };
});
