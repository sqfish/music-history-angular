app.controller("SongListCtrl", ["$scope", "$q", "$http", "$firebaseArray", function($scope, $q, $http, $firebaseArray){
  var ref = new Firebase("https://music-history-ng.firebaseio.com/songlist");
  $scope.theArtistList = "";
  $scope.theAlbumList = "";
  $scope.songlist = $firebaseArray(ref);
  $scope.clearFilter = function() {
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