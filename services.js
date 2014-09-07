'use strict';

var app = angular.module('bio');

app.value('five', 5);

app.service('about', function(){
  return {
    blurb: 'This about was generated from a Service.'
  }
});
