var app = angular.module("musicHistoryApp", ["ngRoute", "angular.filter", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongListCtrl'
      }).
      // when('/songs/:songId', {
      //   templateUrl: 'partials/song-detail.html',
      //   controller: 'SongDetailCtrl'
      // }).
      // when('/', {
      //   templateUrl: 'partials/filter-form.html',
      //   controller: 'FormCtrl'
      // }).
      when('/addsong', {
        templateUrl: 'partials/add-song.html',
        controller: 'AddSongCtrl'
      }).
      otherwise({
        redirectTo: '/songs'
      });
  }]);