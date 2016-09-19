var fs = require('fs');
var url = 'http://192.168.1.89:8888';

function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

describe('facet-filtering', function () {
    it('it should be empty when nothing selected', function () {
        browser
            .get(url + '/app/index.html')
            .then(_ => browser.driver.sleep(1000))
            .then(_ => browser.takeScreenshot())
            .then(data => writeScreenShot(data, './exception.png'))
    });
});