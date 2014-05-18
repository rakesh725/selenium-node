/**
 * Created by rpatel on 1/24/14.
 */

module.exports = {


      startSelServer: function(callback){

          var webdriver = require('selenium-webdriver')
          var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;
          var selConfig = require('../../sel-config.json');


          //Expecting Sel_Jar is set to path of selenium jar file
          var pathToSeleniumJar = process.env.Sel_Jar;
          if(pathToSeleniumJar==undefined){

              console.error('Env variable: Sel_Jar is not defined - using default path')
              pathToSeleniumJar = selConfig.seljar;

          }

          var server = new SeleniumServer(pathToSeleniumJar, {
              port: 4444
          });
          server.start();

          var driver = new webdriver.Builder().
              usingServer(server.address()).
              withCapabilities(webdriver.Capabilities.firefox()).
              build();

          console.log('>>> Waiting 30 secs for sel server to start');

          setTimeout(function(){

              callback(driver);

          }, 30000);





      }


}


function startSelServer(callback){

    var webdriver = require('selenium-webdriver')
    var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;


    //Expecting Sel_Jar is set to path of selenium jar file
    var pathToSeleniumJar = process.env.Sel_Jar;
    if(pathToSeleniumJar==undefined){

        console.error('Env variable: Sel_Jar is not defined - using default path')
        pathToSeleniumJar = selConfig.Sel-Jar;

    }

    var server = new SeleniumServer(pathToSeleniumJar, {
        port: 4444
    });
    server.start();

    var driver = new webdriver.Builder().
        usingServer(server.address()).
        withCapabilities(webdriver.Capabilities.firefox()).
        build();

    callback(driver);


}
