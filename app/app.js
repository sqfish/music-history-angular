/**
 * app.js
 * musicHistoryApp
 * Main module of the application.
 */
angular
  .module('musicHistoryApp', [
    'ui.router', 
    'firebase', 
    'angular.filter'
  ])
  .config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('main', {
          abstract: true,
          url: '/main',
          template: '<ui-view/>'
        })
        .state('main.side', {
          url: '',
          templateUrl: "partials/mainside.html",
          controller: 'SongListCtrl'
        })
        .state('main.side.list', {
          url: '/list',
          templateUrl: "partials/mainlist.html"
        })
        .state('add-song', {
          url: '/add',
          templateUrl: 'partials/add-song.html',
          controller: 'AddSongCtrl'
        });
        $urlRouterProvider.when("", "/main/list");
        $urlRouterProvider.otherwise("/main/list");
    }
  ]);
// app.controller('MainCtrl', function($state){
//   $state.transitionTo('main.list.side');
// })
// app.factory("songlistData", function($firebaseArray) {
//   var ref = new Firebase("https://music-history-ng.firebaseio.com/songlist");
//   console.log($firebaseArray(ref))
//   return $firebaseArray(ref);
// });
// app.directive('songList', function(){
//   return {
//     restrict: 'E',
//     transclude: true,
//     scope: false,
//     templateUrl: 'partials/song-list.html',
//     controllerAs: 'SongListCtrl',
//     bindToController: true
//   }
// });