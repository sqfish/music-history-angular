app.controller("SongListCtrl", ["$scope", "$q", "$http", "$firebaseArray", function($scope, $q, $http, $firebaseArray){
  var ref = new Firebase("https://music-history-ng.firebaseio.com/songlist");
  $scope.theArtistList = "";
  $scope.theAlbumList = "";
  $scope.songlist = $firebaseArray(ref);
  // simple_storage.addJunk("songlist", $scope.songlist);

  $scope.killSong = function(song) {
    var songIndex = $scope.songlist.indexOf(song);
    if (songIndex >= 0) {
      $scope.songlist.splice(songIndex, 1);
    }
  };  
}
]);
