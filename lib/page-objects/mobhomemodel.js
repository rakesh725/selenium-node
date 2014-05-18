/**
 * Created by rpatel on 5/17/14.
 *
 * Mobiquity Web site home page object model
 *
 *      https://github.com/overnightFailure/selenium-pageobject
 *      http://martinfowler.com/bliki/PageObject.html
 *
 */

var By = require('selenium-webdriver').By,
    po = require('selenium-pageobject'), extend = po.extend, Element = po.elements.Element;

module.exports = (function (_super) {
    extend(HomePageModel, _super);

    function HomePageModel() {
        _super.apply(this, arguments);

        //Header
        this.searchBtn = this.ef.textbox(By.id('header_btn_search'));
        this.menuAbout = this.ef.textbox(By.id('menu__item is-expanded first expanded menu-mlid-3697'));
        this.menuHow = this.ef.textbox(By.id('menu__item is-expanded expanded menu-mlid-3698'));
        this.menuInsights = this.ef.element(By.id('menu__item is-expanded expanded menu-mlid-3700'));
        this.menuPortfolio = this.ef.element(By.id('menu__item is-expanded expanded menu-mlid-3699'));
        this.menuContact = this.ef.element(By.id('menu__item is-leaf last leaf menu-mlid-3769'));

        //Slider
        this.slider = this.ef.textbox(By.className('front-hero-link'));

        //Sections
        /*
          Note:
          Each section is not identifiable by unqiue id or className
          Thus will index into sections element array and init each section
         */

        this.sections = this.ef.element(By.className('section_front_buttons'));
        this.commerceLoyaltyAnalytics = this.sections[0];
        this.distributedWorkforce = this.sections[1];
        this.customerJourney = this.sections[2];
        this.reach = this.sections[3];
        this.changeBehavior = this.sections[4];



        //Clients
        this.clients = this.ef.element(By.id('section_front_clients_pager'));
        this.clientsLeftBtn = this.ef.element(By.id('section_front_clients_pager_prev'));
        this.clientsRightBtn = this.ef.element(By.id('section_front_clients_pager_next'));



    }

    return HomePageModel;
})(Element);