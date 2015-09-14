var app = angular.module("musicHistoryApp");
app.controller("SongListCtrl", [
  "$scope",  
  "$firebaseArray",
  "songlistData",
  function($scope, $firebaseArray, songlistData){
    $scope.textSearch = "";
    $scope.theArtistList = "";
    $scope.theAlbumList = "";
    $scope.genreList = "";
    var data = songlistData;
    data.$loaded().then(function(){
      // console.log("loaded", data);
      // angular.forEach(data, function(value, key){
      //   console.log(key, value);
      // });
      $scope.songlist = data;
    });
    $("nav li").removeClass("active");
    $("#homeNav").addClass("active");
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