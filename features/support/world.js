var wd = require('wd');

var remote = wd.remote();

var World = function World(callback) {
  this.browser = remote;

  this.browser.init({browserName: 'chrome'}, function() {
    callback();
  });
};

exports.World = World;