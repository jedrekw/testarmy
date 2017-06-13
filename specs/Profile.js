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
            browser.wait(EC.presenceOf(dashboard.expandDashboardButton), 10000);
        });

        it('should contain user email', function(){
            dashboard.expandDashboard();
            dashboard.visitProfile();
            profile.visitContactDetailsTab();
            expect(profile.emailField.getAttribute('value')).toEqual(USER);
            });

        it('- change personal information should succeed', function(){
            dashboard.expandDashboard();
            dashboard.visitProfile();
            // console.log(profile);
            browser.wait(EC.presenceOf(profile.nameField), 10000);
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
            dashboard.expandDashboard();
            dashboard.visitProfile();
            profile.visitContactDetailsTab();
            browser.wait(EC.presenceOf(profile.phoneField), 10000);
            profile.changePhone();
            profile.changeCity();
            profile.changeCountry();
            profile.saveContactDetailsTab();
            expect(profile.phoneField.getAttribute('value')).toEqual(("'"+profile.phoneValue+"'").slice(1, -1));
            expect(profile.cityField.getAttribute('value')).toEqual(profile.cityValue);
        });

        it('- change professional description in experience tab should succeed', function(){
            dashboard.expandDashboard();
            dashboard.visitProfile();
            browser.wait(EC.presenceOf(profile.nameField), 10000);
            profile.visitExperienceAndSkillsTab();
            browser.wait(EC.presenceOf(profile.professionalDescriptionEditButton), 10000);
            profile.changeProfessionalDescription();
            var source = driver.getPageSource();
            expect(source).toContain("Profile has been saved");
            expect(profile.professionalDescriptionAddedField.getText()).toEqual(profile.professionalDescriptionValue);
        });

        it('- change languages in experience tab should succeed', function(){
            dashboard.expandDashboard();
            dashboard.visitProfile();
            browser.wait(EC.presenceOf(profile.nameField), 10000);
            profile.visitExperienceAndSkillsTab();
            browser.wait(EC.presenceOf(profile.professionalDescriptionEditButton), 10000);
            profile.changeLanguages();
            var source = driver.getPageSource();
            expect(source).toContain("Profile has been saved");
            expect(profile.languagesRandomLanguageText).toEqual(profile.languagesSavedLanguageField.getText());
            expect(profile.languagesRandomProficencyText).toEqual(profile.languagesSavedProficencyField.getText());
        });

        it('- change certification in experience tab should succeed', function(){
            dashboard.expandDashboard();
            dashboard.visitProfile();
            browser.wait(EC.presenceOf(profile.nameField), 10000);
            profile.visitExperienceAndSkillsTab();
            browser.wait(EC.presenceOf(profile.professionalDescriptionEditButton), 10000);
            profile.changeCertification();
            var source = driver.getPageSource();
            expect(source).toContain("Profile has been saved");
            expect(profile.certificationNameValue).toEqual(profile.certificationSavedNameField.getText());
            expect(profile.certificationSavedLicenseNumberField.getText()).toEqual(("'"+profile.certificationLicenseNumberValue+"'").slice(1,-1));
        });

        fit('- change certification in experience tab should succeed', function(){
            // dashboard.expandDashboard();
            dashboard.visitProfile();
            browser.wait(EC.presenceOf(profile.nameField), 10000);
            profile.visitExperienceAndSkillsTab();
            browser.wait(EC.presenceOf(profile.professionalDescriptionEditButton), 10000);
            profile.changeProgrammingLanguages();
            profile.removeProgrammingLanguages();
            profile.inputProgrammingLanguage();
            expect(profile.programmingLanguagesNameValue).toEqual(profile.programmingLanguagesAddedBox.getText());
            profile.saveProgrammingLanguages();
            var source = driver.getPageSource();
            expect(source).toContain("Profile has been saved");
            expect(profile.programmingLanguagesNameValue).toEqual(profile.programmingLanguagesAddedField.getText());
            });
    });
