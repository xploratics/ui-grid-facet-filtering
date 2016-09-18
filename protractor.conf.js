exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/e2e/*.js'],

  // restartBrowserBetweenTests: true,

  beforeLaunch: function () {
      var express = require('express');
      var app = express();
      
      app.use(express.static('./'));
      app.listen(8888, function () {
          console.log('listen to 8888');
      });
  },

  onPrepare: function() {
      var caps = browser.getCapabilities()
  },

  multiCapabilities: [{
    browserName: 'firefox',
    version: 'dev',
    platform: 'Windows 10',
    name: "firefox-tests",
    shardTestFiles: true,
    maxInstances: 25
  }, {
    browserName: 'chrome',
    version: '53',
    platform: 'Windows 10',
    name: "chrome-tests",
    shardTestFiles: true,
    maxInstances: 25
  }],

  onComplete: function() {
  }
}