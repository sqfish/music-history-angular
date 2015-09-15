/**
 * app.js
 * musicHistoryApp
 * Main module of the application.
 */
define('musicHistoryApp', ['angular', 'angular-ui-router', 'angular-filter', 'controllers/SongListCtrl']);
define(function(require) {
  var angular = require('angular');
  var route = require('angular-ui-router');
  var filter = require('angular-filter');
  var list = require('controllers/SongListCtrl');
  
  return angular
    .module('musicHistoryApp', [
      'ui.router',
      'angular.filter',
      'musicHistoryApp.list'
    ])
    .config(['$urlRouterProvider', 
      function($urlRouterProvider) {
        // $stateProvider
        //   .state('start', {
        //     abstract: true,
        //     url: ''
        //   });
        //   .state('main.side', {
        //     url: '',
        //     templateUrl: "partials/mainside.html",
        //     controller: 'SongListCtrl'
        //   })
        //   .state('main.side.list', {
        //     url: '/list',
        //     templateUrl: "partials/mainlist.html"
        //   })
        //   .state('add-song', {
        //     url: '/add',
        //     templateUrl: 'partials/add-song.html',
        //     controller: 'AddSongCtrl'
        //   });
          $urlRouterProvider.when("", "/main/list");
          $urlRouterProvider.when("/main", "/main/list");
          $urlRouterProvider.otherwise("/main/list");
    }]);
});