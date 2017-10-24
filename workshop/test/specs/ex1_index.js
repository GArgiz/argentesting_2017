var expect = require('chai').expect;
var IndexPage = require('../pageobjects/index.page.js');

describe('Index Page', function () {
    it('should contains home description', function () {
        IndexPage.open();
        IndexPage.homebutton.click();
        expect(IndexPage.content.getText()).to.contain('Argentesting se forma a partir');
    });
    it('should contains about description', function () {
      IndexPage.open();
      IndexPage.aboutbutton.click();
      expect(IndexPage.content.getText()).to.contain('Somos apasionados por el testing y anhelamos');
    });
});
