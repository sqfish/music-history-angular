app.controller("AddSongCtrl", ["$scope", "$q", "$firebaseArray", "$location", function($scope, $q, $firebaseArray, $location){
  var ref = new Firebase("https://music-history-ng.firebaseio.com/songlist");
  $scope.songlist = $firebaseArray(ref);
  $scope.newSong = {
    "songName": "",
    "artistName": "",
    "albumName": "",
    "genre": ""
  };
  $(".genre").click(function(){
    $scope.newSong.genre = $(this).val();
  });
  $scope.addSong = function() {
    $scope.songlist.$add(
      $scope.newSong
    );
    $scope.newSong = {
      "songName": "",
      "artistName": "",
      "albumName": "",
      "genre": ""
    };
  $location.url('/songs');
  };
  $scope.closeAddSong = function() {
    $scope.newSong = {
      "songName": "",
      "artistName": "",
      "albumName": "",
      "genre": ""
    };
    $location.url('/songs');
  };
}
]);