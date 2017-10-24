var expect = require('chai').expect;
var FormPage = require('../pageobjects/form.page.js');

describe('Form Page', function () {

    it('should insert name', function () {
        FormPage.open();
        FormPage.firstname.click();
        FormPage.firstname.setValue("Gerardo");
        expect(FormPage.firstname.getValue()).to.contain('Gerardo');
    });
    it('should contains about description', function () {
      FormPage.open();
      FormPage.firstname = "Gerardo";
      FormPage.mButton.click();

      expect(FormPage.registerText.getText()).to.contain('You have been registered!');
    });
});
