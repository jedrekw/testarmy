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

    describe('Profile', function() {
        beforeEach(function() {
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            login_page.visitLoginPage();
            login_page.fillEmail(USER);
            login_page.fillPassword(PASSWORD);
            login_page.login();
        });

        it('should contain user email', function(){
            dashboard.expandDashboard();
            dashboard.visitProfile();
            profile.visitContactDetailsTab();
            profile.getCurrentUser().then(function(text) {
                expect(text).toEqual(USER);
                //nie pobiera emaila
            });

        });
        fit('- change personal information should succeed', function(){
            browser.driver.sleep(1000);
            dashboard.expandDashboard();
            dashboard.visitProfile();
            console.log(profile);
            profile.changeName();
            profile.changeSurname();
            profile.clickRandomGender();
            profile.sendDate();
            profile.sendDate1();
            expect(profile.nameField.getText()).toEqual(profile.nameValue);
            expect(profile.surnameField.getText()).toEqual(profile.surnameValue);
            expect(profile.dateField.getText()).toEqual(profile.dateValue);
        });
    });