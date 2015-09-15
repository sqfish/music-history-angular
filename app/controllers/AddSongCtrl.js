// var app = angular.module("musicHistoryApp");
// app.controller("AddSongCtrl", [
//   "$scope", 
//   "$firebaseArray", 
//   "$location", 
//   "songlistData", 
//   function($scope, $firebaseArray, $location, songlistData){
//     var data = songlistData;
//     data.$loaded().then(function(){
//       $scope.songlist = data;
//     });
//     $scope.newSong = {
//       "songName": "",
//       "artistName": "",
//       "albumName": "",
//       "year": 0,
//       "genre": ""
//     };
//     $("nav li").removeClass("active");
//     $("#addSongNav").addClass("active");

//     var genre;
//     $(".genre").click(function(){
//       genre = $(this).val();
//       $scope.newSong.genre = genre;
//     });

//     $scope.addSong = function() {
//       $scope.songlist.$add(
//         $scope.newSong
//       );
//       $scope.newSong = {
//         "songName": "",
//         "artistName": "",
//         "albumName": "",
//         "year": 0,
//         "genre": ""
//       };
//     $location.url('/');
//     };
//     $scope.closeAddSong = function() {
//       $scope.newSong = {
//         "songName": "",
//         "artistName": "",
//         "albumName": "",
//         "year": 0,
//         "genre": ""
//       };
//       $location.url('/');
//     };
// }]);