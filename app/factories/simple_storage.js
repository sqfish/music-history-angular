app.factory("simple-storage", function(){
  var bucket = {};

  return {
    addJunk: function(key, value) {
      bucket[key] = value;
      console.log("key stored", key, value);
    },
    getJunk: function(junk) {
    if (bucket.hasOwnProperty(junk)) {
      return bucket[junk];
      }
    }
  };
});