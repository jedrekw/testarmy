var SettingsPage = require("./../settings");
var settings = new SettingsPage();
var ProfilePage = require("./../pages/ProfilePage");
var profile = new ProfilePage();
var LoginPage = require("./../pages/LoginPage");
var login_page = new LoginPage();
var DashboardPage = require("./../pages/DashboardPage");
var dashboard = new DashboardPage();
var browser = require("protractor").protractor.browser;
var driver = browser.driver;
var EC = protractor.ExpectedConditions;

    describe('Login', function() {
        beforeEach(function() {
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            login_page.visitLoginPage();
            login_page.fillEmail(USER);
            login_page.fillPassword(PASSWORD);
            login_page.login();
            browser.wait(EC.presenceOf(dashboard.userAccountButton), 10000);
        });

        it('should login to account', function(){
            var source = driver.getPageSource();
            expect(source).toContain("assets/img/logo.svg");
        });

        it('- logout should succeed', function(){
            dashboard.logout();
            var source = driver.getPageSource();
            expect(source).toContain("You are logged out");
            expect(source).toContain("You will redirect to login page");
            browser.wait(EC.presenceOf(login_page.loginButton), 15000);
        });

});