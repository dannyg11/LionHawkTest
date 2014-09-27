'use strict';

/**
 * @ngdoc overview
 * @name newAngAppApp
 * @description
 * # newAngAppApp
 *
 * Main module of the application.
 */
var app = angular.module('newAngApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'

  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/my-classes', {
        templateUrl: 'views/myClasses.html', 
        controller: 'ClassCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.factory('ClassShare', function() {

  })
