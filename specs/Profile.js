var SettingsPage = require("./../settings");
var settings = new SettingsPage();
var ProfilePage = require("./../pages/ProfilePage");
var profile = new ProfilePage();
var LoginPage = require("./../pages/LoginPage");
var login_page = new LoginPage();
var DashboardPage = require("./../pages/DashboardPage");
var dashboard = new DashboardPage();
var browser = require("protractor").protractor.browser;
var EC = protractor.ExpectedConditions;

    describe('Profile', function() {
        beforeEach(function() {
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            // browser.driver.manage().window().setSize(1024, 768);
            browser.driver.manage().window().maximize();
            login_page.visitLoginPage();
            login_page.fillEmail(USER);
            login_page.fillPassword(PASSWORD);
            login_page.login();
            browser.driver.wait(EC.presenceOf(dashboard.userAccountButton), 10000);
            });

        it('should contain user email', function(){
            // dashboard.expandDashboard();
            profile.visitContactDetailsTab();
            browser.driver.sleep(2000);
            expect(profile.emailField.getAttribute('value')).toEqual(USER);
            });

        it('- change personal information should succeed', function(){
            // dashboard.expandDashboard();
            dashboard.visitProfile();
            browser.driver.wait(EC.presenceOf(profile.nameField), 10000);
            profile.changeName();
            profile.changeSurname();
            profile.clickRandomGender();
            profile.sendDate();
            profile.savePersonalInformationTab();
            expect(profile.nameField.getAttribute('value')).toEqual(profile.nameValue);
            expect(profile.surnameField.getAttribute('value')).toEqual(profile.surnameValue);
            expect(profile.dateField.getAttribute('value')).toEqual(profile.todayDate);
        });

        it('- change contact details should succeed', function(){
            // dashboard.expandDashboard();
            dashboard.visitProfile();
            profile.visitContactDetailsTab();
            browser.driver.wait(EC.presenceOf(profile.phoneField), 10000);
            profile.changePhone();
            profile.changeCity();
            profile.changeCountry();
            profile.saveContactDetailsTab();
            expect(profile.phoneField.getAttribute('value')).toEqual(("'"+profile.phoneValue+"'").slice(1, -1));
            expect(profile.cityField.getAttribute('value')).toEqual(profile.cityValue);
        });

        it('- change professional description in experience tab should succeed', function(){
            // dashboard.expandDashboard();
            dashboard.visitProfile();
            browser.driver.wait(EC.presenceOf(profile.nameField), 10000);
            profile.visitExperienceAndSkillsTab();
            browser.driver.wait(EC.presenceOf(profile.professionalDescriptionEditButton), 10000);
            profile.changeProfessionalDescription();
            browser.driver.sleep(1000);
            var source = browser.driver.getPageSource();
            expect(source).toContain("Profile has been saved");
            expect(profile.professionalDescriptionAddedField.getText()).toEqual(profile.professionalDescriptionValue);
        });

        it('- change languages in experience tab should succeed', function(){
            // dashboard.expandDashboard();
            dashboard.visitProfile();
            browser.driver.wait(EC.presenceOf(profile.nameField), 10000);
            profile.visitExperienceAndSkillsTab();
            browser.driver.wait(EC.presenceOf(profile.professionalDescriptionEditButton), 10000);
            profile.changeLanguages();
            browser.driver.sleep(1000);
            var source = browser.driver.getPageSource();
            expect(source).toContain("Profile has been saved");
            expect(profile.languagesRandomLanguageText).toEqual(profile.languagesSavedLanguageField.getText());
            expect(profile.languagesRandomProficencyText).toEqual(profile.languagesSavedProficencyField.getText());
        });

        it('- change certification in experience tab should succeed', function(){
            // dashboard.expandDashboard();
            dashboard.visitProfile();
            browser.driver.wait(EC.presenceOf(profile.nameField), 10000);
            profile.visitExperienceAndSkillsTab();
            browser.driver.wait(EC.presenceOf(profile.professionalDescriptionEditButton), 10000);
            profile.changeCertification();
            browser.driver.sleep(1000);
            var source = browser.driver.getPageSource();
            expect(source).toContain("Profile has been saved");
            expect(profile.certificationNameValue).toEqual(profile.certificationSavedNameField.getText());
            expect(profile.certificationSavedLicenseNumberField.getText()).toEqual(("'"+profile.certificationLicenseNumberValue+"'").slice(1,-1));
        });

        it('- change programming languages in experience tab should succeed', function(){
            dashboard.visitProfile();
            browser.driver.wait(EC.presenceOf(profile.nameField), 10000);
            profile.visitExperienceAndSkillsTab();
            browser.driver.wait(EC.presenceOf(profile.professionalDescriptionEditButton), 10000);
            profile.changeProgrammingLanguages();
            browser.driver.sleep(1000);
            profile.removeProgrammingLanguages();
            profile.inputProgrammingLanguage();
            profile.saveProgrammingLanguages();
            browser.driver.sleep(1000);
            var source = browser.driver.getPageSource();
            expect(source).toContain("Profile has been saved");
            expect(profile.programmingLanguagesNameValue).toEqual(profile.programmingLanguagesAddedField.getText());
            });
    });
