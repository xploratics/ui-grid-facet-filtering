exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  //seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/e2e/*.js'],
  framework: 'jasmine2',

  // restartBrowserBetweenTests: true,
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
  }/*, {
    browserName: 'chrome',
    version: '53',
    platform: 'Windows 10',
    name: "chrome-tests",
    shardTestFiles: true,
    maxInstances: 25
  }*/],

  onComplete: function() {
  }
}