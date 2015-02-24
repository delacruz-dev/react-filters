exports.httpRequest = function(url, success, error) {
  var request = new XMLHttpRequest;

  request.open("GET", url);

  request.onload = function() {
    if (this.status === 200) {
      success(this.responseText);
    }
    else {
      error(new Error(this.status));
    }
  };

  request.onerror = function() {
    error(new Error(this.status));
  };

  request.send();
};