/**
 * Created by rpatel on 5/17/14.
 */


var By = require('selenium-webdriver').By,
    HomePageModel = require('./mobhomemodel.js'),
    assert = require('assert');



function MobHomePage(driver) {
    this._ui = new HomePageModel(driver, By.tagName('html'));
}


MobHomePage.prototype.verifyPage = function(callback){

    //verify header
    assert.equals(this._ui.menuAbout.isEnabled(), true);
    assert.equals(this._ui.menuHow.isEnabled(), true);
    assert.equals(this._ui.menuInsights.isEnabled(), true);
    assert.equals(this._ui.menuPortfolio.isEnabled(), true);
    assert.equals(this._ui.menuContact.isEnabled(), true);

    //verify slider
    assert.equals(this._ui.slider.isEnabled(), true);

    //verify Sections
    assert.equals(this._ui.commerceLoyaltyAnalytics.isEnabled(), true);
    assert.equals(this._ui.distributedWorkforce.isEnabled(), true);
    assert.equals(this._ui.customerJourney.isEnabled(), true);
    assert.equals(this._ui.reach.isEnabled(), true);
    assert.equals(this._ui.changeBehavior.isEnabled(), true);

    //Clients
    assert.equals(this._ui.clientsLeftBtn.isEnabled(), true);
    assert.equals(this._ui.clients.isEnabled(), true);
    assert.equals(this._ui.clientsRightBtn.isEnabled(), true);

    callback();

};

module.exports = MobHomePage;
