# argentesting_2017

## **Argentesting 2017 - WebdriverIO - Workshop**

### Content
1. What webdriver is
2. Key Features
3. Starting from Scratch
```
  npm init
  npm install http-server
  ./node_modules/http-server/bin/http-server server/  -- Enter in 127.0.0.1:8080
 ```

  Webdriver installation
```
  npm install webdriverio --save-dev
  npminstallwdio-selenium-standalone-service
  npm install chai 
  ./node_modules/.bin/selenium-standalone install
  ./node_modules/.bin/selenium-standalone start
  ./node_modules/.bin/wdio --help
  ./node_modules/.bin/wdio config
```
4. WebPage Testing
```
  ./node_modules/.bin/wdio wdio.conf.js
```
  
5. Exploring Results
```
  wdio repl chrome
```
```
  npm install allure-commandline--save-dev
  ./node_modules/.bin/alluregenerateallure-results/ 
  ./node_modules/.bin/http-server -p 8181 allure-report/  -- Enter in localhost:8181
```

        
6. Mobile
```
    npm install wdio-appium-service--save-dev 
    npm install appium
    brew install carthage
    ./node_modules/.bin/appium
 ```
 ```
 Config iphone:
        port: 4723,
        capabilities: [{
            maxInstances: 1,
            //iPhone configuration 
            browserName: 'Safari', 
            platformName: 'iOS', 
            deviceName: 'iPhone 6s Plus', 
            platformVersion: '11.0'
            }],
        services: ['appium'], 
        appium: {
        args: {
            address: '0.0.0.1', 
            commandTimeout: '7200', 
            sessionOverride: true, 
            debugLogSpacing: true, 
            showIosLog: true, 
            nativeInstrumentsLib: true, 
            isolateSimDevice: true, 
            automationName: 'XCUITest', 
            //app: APP_PATH
        }
  ```
  ```
  ConfigAndroid
        services: ['appium'], 
        appium: {
            args: {
            address: '0.0.0.1', 
            commandTimeout: '7200', 
            sessionOverride: true, 
            debugLogSpacing: true, 
            nativeInstrumentsLib: true, 
            isolateSimDevice: true, 
            automationName: 'Appium', 
            //app: APP_PATH
            } capabilities: [{
            browserName: 'chrome', p
            latformName: 'Android', d
            eviceName: 'Nexus_6_24', 
            }],
  ```
7. Visual Regression
```
npm install wdio-visual-regression-service --save-dev
npm install wdio-screenshot --save-dev
brew install graphicsmagick
```
8. Other Topics
```
npminstallgulp-webdriver--save-dev
npm install gulp-cli 
npm install gulp
./node_modules/.bin/gulptest
```
