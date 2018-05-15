'use strict';

var moment = require('moment');
require('./video/video-module.js');

var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.video',
]);


myApp.constant("moment",moment);
myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/', {
    templateUrl: 'app/video/video.html',
    controller: 'videoCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
