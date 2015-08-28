app.controller("FormCtrl", ["$scope", "song-storage", "$q", function($scope, song_storage, $q){
  $scope.theArtistList = "";
  $scope.theAlbumList = "";
  $scope.songlist = [];
  // simple_storage.addJunk("songlist", $scope.songlist);

  $scope.killSong = function(song) {
    var songIndex = $scope.songlist.indexOf(song);
    if (songIndex >= 0) {
      $scope.songlist.splice(songIndex, 1);
    }
  };

  song_storage
    .then(function(promiseResolutionData){
      for (var obj in promiseResolutionData) {
        $scope.songlist.push(promiseResolutionData[obj]);
        // simple_storage.addJunk("songlist", $scope.songlist);
      }
    }, function(error){
      console.log("error: ", error);
    });  
}
]);