HTTP = {
  // Perform a GET request, returning the data to the callback.
  // Kept simple for the purposes of the demonstration. (No error checks, etc.)
  get: function(url, callback) {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        callback(req.responseText);
      }
    };

    req.open('get', url, true);
    req.send();
  }
};
