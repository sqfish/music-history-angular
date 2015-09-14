var app = angular.module("musicHistoryApp");
app.factory("songlistData", ['$firebaseArray', function($firebaseArray) {
  var ref = new Firebase("https://music-history-ng.firebaseio.com/songlist");
  return $firebaseArray(ref);
}]);