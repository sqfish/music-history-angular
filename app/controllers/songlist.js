// app.controller("musicCtrl", function($scope, $q, $http, $firebaseArray, $firebaseObject){
//   var ref = new Firebase("https://music-history-ng.firebaseio.com/songlist");
//   $scope.theArtistList = "";
//   $scope.theAlbumList = "";
//   // var syncObject = $firebaseObject(ref);
//   // syncObject.$bindTo($scope, "songlist");
//   $scope.songlist = $firebaseArray(ref);

//   $scope.killSong = function(song) {
//     var songIndex = $scope.songlist.indexOf(song);
//     if (songIndex >= 0) {
//       $scope.songlist.splice(songIndex, 1);
//     }
//   }; 
// });