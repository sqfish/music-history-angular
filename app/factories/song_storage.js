app.factory("song-storage", function($q, $http) {

  function getSongList() {

    // Return a promise for our async XHR
    return $q(function(resolve, reject) {

      // Perform some asynchronous operation, resolve or reject 
      // the promise when appropriate.
      $http.get('./data/allsongs.json')
      .success(
        function(objectFromJSONFile) {
          resolve(objectFromJSONFile.songlist);
        },function(error) {
          reject(error);
        }
      );

    });
  }

  return getSongList();
});