/**
 * Created by rpatel on 5/17/14.
 */


var assert = require('assert');
var fs = require('fs');
var request = require('supertest')

var webdriver = require('selenium-webdriver')
var test = require('selenium-webdriver/testing')
var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;
var sel = require('../lib/util/sel.js');
var mobHomePage = require('../lib/page-objects/mobhomepage.js');

var PageNavigator = require('selenium-pageobject').PageNavigator;


var driver;

var log = require('custom-logger').config({ level: 0 });
log.info().config({ color: 'green' });


/*
 driver = new webdriver.Builder().
 usingServer('http://localhost:4444/wd/hub').
 withCapabilities(webdriver.Capabilities.firefox()).
 build();
 */
//If selenium server is not found - attempt to start one


/*
sel.startSelServer(function(selDriver){


    log.warn('Not able to find running selenium server on port 4444');
    log.warn('>>Attempting to start server');

    driver = selDriver;

});
*/

describe("MyPage", function() {

    before(function(done){
      this.timeout(40000);
        sel.startSelServer(function(selDriver){


            log.warn('Not able to find running selenium server on port 4444');
            log.warn('>>Attempting to start server');

            driver = selDriver;

            driver.get('http://www.mobiquityinc.com')

            done();

        });


        //Launch Mobiquity page
        //driver.get('http://www.mobiquityinc.com')

        //done();



    });

    it("Test - Home Page", function(done) {

        var pageNavigator = new PageNavigator({ driver: driver });
        var mobHome = new mobHomePage(driver);

        pageNavigator.visit('http://www.mobiquityinc.com')

        mobHome.verifyPage(function(){

            done();

        });


    });



});