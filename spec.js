// require("jasminewd");
// require('jasmine-given');


//             });
//         });
// });
var SettingsPage = require("./settings");
var settings = new SettingsPage();
var ProfilePage = require("./pages/ProfilePage");
var profile = new ProfilePage();
var LoginPage = require("./pages/LoginPage");
var login_page = new LoginPage();
var DashboardPage = require("./pages/DashboardPage");
var dashboard = new DashboardPage();
var browser = require("protractor").protractor.browser;
var driver = browser.driver;

    describe('Login', function() {
        beforeEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            login_page.visitLoginPage();
            login_page.fillEmail(USER);
            login_page.fillPassword(PASSWORD);
            login_page.login();
        });

        it('should login to account', function(){
            var source = driver.getPageSource();
            expect(source).toContain("assets/img/logo.svg");
        });

    describe('Profile', function() {
        fit('should contain user email', function(){
            dashboard.expandDashboard();
            dashboard.visitProfile();
            profile.visitContactDetailsTab();
            profile.getCurrentUser().then(function(text) {
                expect(text).toEqual(USER);
                });
        });
    });
});