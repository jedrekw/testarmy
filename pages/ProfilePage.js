sprintf = require('sprintf').sprintf;
var SettingsPage = require("./../settings");
var settings = new SettingsPage();
var EC = protractor.ExpectedConditions;

var ProfilePage = (function () {
    function ProfilePage() {
        this.contactDetailsTab = element(By.xpath("//h5[2]"));
        this.experienceAndSkillsTab = element(By.xpath("//h5[3]"));
        this.emailField = element(By.xpath("//div[2]/div[2]/div/div/div/div/div/div/div/div/div/input"));
        this.nameField = element(By.xpath("//div[2]/div/input"));
        this.nameValue = getRandomString(6);
        this.surnameField = element(By.xpath("//div[2]/input"));
        this.surnameValue = getRandomString(7);
        this.randomGenderLocator = sprintf('//div[3]/div/label[%s]', settings.getRandomInteger(1,3));
        this.randomGenderButton = element(By.xpath(this.randomGenderLocator));
        this.dateField = element(By.xpath("//ng2-datepicker/div/div/input"));
        this.dateValue = element(By.css("span.day.today"));
        this.todayDate = settings.getTodayDate();
        this.savePersonalInformationTabButton = element(By.xpath("//button"));
        this.phoneField = element(By.xpath("//div[2]/div[2]/div/div/div/div/div/div/div/div/div[2]/input"));
        this.phoneValue = settings.getRandomInteger(100000000, 999999999);
        this.cityField = element(By.xpath("//div[2]/div/div/input"));
        this.cityValue = getRandomString(8);
        this.countryDropdown = element(By.xpath("//select"));
        this.countryOption = element(By.xpath(sprintf("//option[%s]", settings.getRandomInteger(1, 199))));
        this.saveContactDetailsTabButton = element(By.xpath("//div[2]/div/div/div/div/div[2]/button"));
        this.professionalDescriptionEditButton = element(By.xpath("//div[2]/a"));
        this.professionalDescriptionField = element(By.xpath("//textarea"));
        this.professionalDescriptionValue = getRandomString(10)+" "+getRandomString(12)+" "+getRandomString(6);
        this.professionalDescriptionSaveButton = element(By.xpath("//div/div/a[2]"));
        this.professionalDescriptionAddedField = element(By.css("div.sfield-content"));

    }

    ProfilePage.prototype.visitContactDetailsTab = function () {
        this.contactDetailsTab.click();
    };

    ProfilePage.prototype.visitExperienceAndSkillsTab = function () {
        this.experienceAndSkillsTab.click();
    };

    ProfilePage.prototype.changeName = function () {
        settings.clearFieldAndSendKeys(this.nameField, this.nameValue);
    };

    ProfilePage.prototype.changeSurname = function () {
        settings.clearFieldAndSendKeys(this.surnameField, this.surnameValue);
    };

    ProfilePage.prototype.clickRandomGender = function () {
        this.randomGenderButton.click();
    };

    ProfilePage.prototype.sendDate = function () {
        this.dateField.click();
        browser.wait(EC.presenceOf(this.dateValue), 10000);
        this.dateValue.click();
    };

    ProfilePage.prototype.savePersonalInformationTab = function () {
        this.savePersonalInformationTabButton.click();
    };

    ProfilePage.prototype.changePhone = function () {
        settings.clearFieldAndSendKeys(this.phoneField, this.phoneValue);
    };

    ProfilePage.prototype.changeCity = function () {
        settings.clearFieldAndSendKeys(this.cityField, this.cityValue);
    };

    ProfilePage.prototype.changeCountry = function () {
        this.countryDropdown.click();
        this.countryOption.click();
    };

    ProfilePage.prototype.saveContactDetailsTab = function () {
        this.saveContactDetailsTabButton.click();
    };

    ProfilePage.prototype.changeProfessionalDescription = function () {
        this.professionalDescriptionEditButton.click();
        settings.clearFieldAndSendKeys(this.professionalDescriptionField, this.professionalDescriptionValue);
        this.professionalDescriptionSaveButton.click();
    };

    return ProfilePage;

})();
module.exports = ProfilePage;