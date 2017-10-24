var Page = require('./page')

class IndexPage extends Page {
    get homebutton()   { return browser.element('#homelink'); }
    get aboutbutton()  { return browser.element('#aboutlink'); }
    get formbutton()   { return browser.element('#formlink'); }
    get content()      { return browser.element('#content p'); }
    get mainImage()    { return browser.checkElement('#argimage'); }

    open() {
        super.open('index');
    }

}
module.exports = new IndexPage();
