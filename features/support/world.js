var wd = require('wd');

var remote = wd.remote();

var World = function World(callback) {
  this.browser = remote;

  // run the callback when we are done do cucumber knows we are ready
  this.browser.init({browserName: 'chrome'}, function() {
    callback();
  });
};

exports.World = World;