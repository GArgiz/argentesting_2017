var Page = require('./page')

class FormPage extends Page {
    get homebutton()   { return browser.element('#homelink'); }
    get formbutton()   { return browser.element('#formlink'); }
    get firstname()    { return browser.element('#firstname'); }
    get lastname()     { return browser.element('#lastname'); }
    get choice1()      { return browser.element('#contactChoice1'); }
    get choice2()      { return browser.element('#contactChoice2'); }
    get choice3()      { return browser.element('#contactChoice3'); }
    get mButton()      { return browser.element('#mbutton'); }
    get registerText() { return browser.element('#register'); }

    open() {
        super.open('form');
    }
}
module.exports = new FormPage();
