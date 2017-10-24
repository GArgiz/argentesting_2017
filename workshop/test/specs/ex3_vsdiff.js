var expect = require('chai').expect;
var IndexPage = require('../pageobjects/index.page.js');

describe.skip('Visual Diff Home Page', function () {
    it('should looks similar', function () {
      IndexPage.open();

      var diff = IndexPage.mainImage;
      console.log(diff);
     expect(diff[0].isWithinMisMatchTolerance).to.be.true;
    });
});
