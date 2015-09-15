define(function(require) {
  var angular = require('angular');
  var route = require('angular-ui-router');
  var angularfire = require('angularfire');
  var filter = require('angular-filter');

  angular
    .module('musicHistoryApp.list', ['ui.router', 'firebase'])
    .config(['$stateProvider', '$urlRouterProvider', 
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('main', {
            abstract: true,
            url: '/main',
            template: '<ui-view/>',
            controller: 'AllCtrl'
          })
          .state('main.side', {
            url: '',
            templateUrl: "partials/mainside.html",
            controller: 'SongListCtrl',
          })
          .state('main.side.list', {
            url: '/list',
            templateUrl: "partials/mainlist.html"
          });
    }])
    .factory("songlistData", ['$firebaseArray', function($firebaseArray) {
      var ref = new Firebase("https://music-history-ng.firebaseio.com/songlist");
      return $firebaseArray(ref);
    }])
    .controller("AllCtrl",["$scope",
      function($scope) {
        $scope.textSearch = "";
        $scope.theArtistList = "";
        $scope.theAlbumList = "";
        $scope.genreList = "";
        $("nav li").removeClass("active");
        $("#homeNav").addClass("active");
    }])
    .controller("SongListCtrl", ["$scope", "$firebaseArray", "songlistData",
      function($scope, $firebaseArray, songlistData){
        var data = songlistData;
        data.$loaded().then(function(){
          $scope.songlist = data;
        });
        $scope.clearFilter = function() {
          $scope.textSearch = "";
          $scope.theArtistList = "";
          $scope.theAlbumList = "";
        };

        $scope.killSong = function(song) {
          var songIndex = $scope.songlist.indexOf(song);
          $scope.songlist.$remove(
            $scope.songlist[(songIndex)]
          );
        };  
      }
    ]);
});