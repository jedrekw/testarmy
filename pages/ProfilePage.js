sprintf = require('sprintf').sprintf;
var SettingsPage = require("./../settings");
var settings = new SettingsPage();
var EC = protractor.ExpectedConditions;

var ProfilePage = (function () {
    function ProfilePage() {
        this.testArmyLogo = element(By.xpath("//img"));
        this.contactDetailsTab = element(By.xpath("//li/ul/ba-menu-item[2]/li/a/span"));
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
        this.professionalDescriptionEditButton = element(By.xpath("//a[contains(text(),'Edit description')]"));
        this.professionalDescriptionField = element(By.xpath("//textarea"));
        this.professionalDescriptionValue = getRandomString(10)+" "+getRandomString(12)+" "+getRandomString(6);
        this.professionalDescriptionSaveButton = element(By.xpath("//div/div/a[2]"));
        this.professionalDescriptionAddedField = element(By.css("div.sfield-content"));
        this.languagesEditButton = element(By.xpath("//div[2]/div/div/div[2]/a"));
        this.languagesLanguageDropdown = element(By.xpath("//div[3]/div/div[2]/div/div/div/div/div/div/div/div/div/select"));
        this.languagesRandomLanguageLocator = sprintf('/html/body/nga-app/main/nga-pages/div/div/nga-profile/form/div[2]/div[3]/div/div[2]/div/div/div/div/div[1]/div/div/div/div[1]/select/option[%s]', settings.getRandomInteger(2, 2));
        this.languagesRandomLanguageOption = element(By.xpath(this.languagesRandomLanguageLocator));
        this.languagesProficencyDropdown = element(By.xpath("//div[3]/div/div[2]/div/div/div/div/div/div/div/div/div[2]/select"));
        this.languagesRandomProficencyLocator = sprintf('//div[3]/div/div[2]/div/div/div/div/div/div/div/div/div[2]/select/option[%s]', settings.getRandomInteger(2, 5));
        this.languagesRandomProficencyOption = element(By.xpath(this.languagesRandomProficencyLocator));
        this.languagesSaveButton = element(By.xpath("//div/div/a[2]"));
        this.languagesSavedLanguageField = element(By.xpath("//div[3]/div/div[2]/div/div/div/div/div/div/div"));
        this.languagesSavedProficencyField = element(By.css("div.lang-prof"));
        this.certificationEditButton = element(By.xpath("//div[3]/div/div/div[2]/a"));
        this.certificationNameField = element(By.xpath("//div[3]/div/div/div/div/div/div/div/div/div/input"));
        this.certificationNameValue = getRandomString(8);
        this.certificationLicenseNumberField = element(By.xpath("//div[3]/div/div/div/div/div/div/div/div/div[2]/input"));
        this.certificationLicenseNumberValue = settings.getRandomInteger(1000000, 9999999);
        this.certificationDateField = element(By.xpath("//div[3]/div/div/ng2-datepicker/div/div/input"));
        this.certificationDateEndField = element(By.xpath("//div[2]/ng2-datepicker/div/div/input"));
        this.certificationDateValue = element(By.className("day today"));
        this.certificationDateEndNextMonthButton = element(By.xpath("//i[2]"));
        this.certificationDateEndValue = element(By.xpath("//span[19]"));
        this.certificationDoesNotExpireCheckbox = element(By.xpath("//div[4]/input"));
        this.certificationSaveButton = element(By.xpath("//div[3]/div/div/div/div/a[2]"));
        this.certificationSavedNameField = element(By.xpath("//div[3]/div/div[3]/div/div/div/div/div/div/div"));
        this.certificationSavedLicenseNumberField = element(By.xpath("//div[3]/div/div[3]/div/div/div/div/div/div/div[2]"));
        this.programmingLanguagesEditButton = element(By.xpath("//div[4]/div/div/div[2]/a"));
        this.programmingLanguagesNameField = element(By.xpath("//ng2-completer/div/input"));
        this.programmingLanguagesNameValue = getRandomString(7);
        this.programmingLanguagesAddButton = element(By.xpath("//div/div/div/div/div/div/div/div[2]/button"));
        this.programmingLanguagesAddedBox = element(By.xpath("//div[4]/div/div/div/div/div/div/div[2]/div/div"));
        this.programmingLanguagesSaveButton = element(By.xpath("//div/div/a[2]"));
        this.programmingLanguagesAddedField = element(By.xpath("//div[4]/div/div/div/div/div"));
        this.programmingLanguagesRemoveButton = element(By.xpath("//div/span"));
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
        browser.driver.wait(EC.presenceOf(this.dateValue), 10000);
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

    ProfilePage.prototype.changeLanguages = function () {
        this.languagesEditButton.click();
        this.languagesLanguageDropdown.click();
        this.languagesRandomLanguageText = this.languagesRandomLanguageOption.getText();
        this.languagesRandomLanguageOption.click();
        this.languagesProficencyDropdown.click();
        this.languagesRandomProficencyText = this.languagesRandomProficencyOption.getText();
        this.languagesRandomProficencyOption.click();
        this.languagesSaveButton.click();
    };


    ProfilePage.prototype.changeCertification = function () {
        this.certificationEditButton.click();
        settings.clearFieldAndSendKeys(this.certificationNameField, this.certificationNameValue);
        settings.clearFieldAndSendKeys(this.certificationLicenseNumberField, this.certificationLicenseNumberValue);
        browser.executeScript("arguments[0].removeAttribute('readonly');", this.certificationDateField);
        this.certificationDateField.click();
        this.certificationDateValue.click();
        // browser.driver.findElement(By.xpath("//div[2]/ng2-datepicker/div/div/input")).then(null, function (err) {
        //     if (err.name === "NoSuchElementError"){
        //         browser.executeScript("arguments[0].click()", this.certificationDoesNotExpireCheckbox);
        //     }
        // });
        this.certificationDateEndField.click();
        this.certificationDateEndNextMonthButton.click();
        this.certificationDateEndValue.click();
        // try{
        //     this.certificationDateEndField.click();
        //     this.certificationDateEndValue.click();
        // }
        // catch(NoSuchElementError) {
        //     browser.executeScript("arguments[0].click()", this.certificationDoesNotExpireCheckbox);
        //     this.certificationDateEndField.click();
        //     this.certificationDateEndValue.click();
        // }
        browser.executeScript("arguments[0].click()", this.certificationSaveButton);
    };

    ProfilePage.prototype.changeProgrammingLanguages = function () {
                this.programmingLanguagesEditButton.click();
        };

    // ProfilePage.prototype.removeProgrammingLanguages = function () {
    //     browser.findElement(By.xpath("//div/span"));
    //     expect(element(By.css("div.lang-cloud.remove > span")).isPresent());
    //     // this.programmingLanguagesRemoveButton.click();
    //     element(By.xpath("//div/span")).click()
    // };
    //     while (true) {
    //         try {
    //             browser.findElement(By.css("html body app main.ng2 pages div.al-main div.al-content.col-md-10.offset-md-1 ng-component form.ng-untouched.ng-pristine.ng-valid div.profile-box-wrapper div.row div.col-md-12.profile-box.visiblity div.row div.col-md-12 div.sfield.card div.sfield-inner div.sfield-forms div.row div.form-group.col-md-12 div.confirmed-languages div div.lang-cloud.remove span"));
    //             this.programmingLanguagesRemoveButton.click();
    //         }
    //         catch (NoSuchElementError) {
    //             break;
    //         }
    //     }
    // };
    //     function cond() {
    //         browser.findElement(By.xpath("//div/span")).then(null, function (err) {
    //             if (err.name == "NoSuchElementError") {
    //                 return true;
    //             }
    //             else {
    //                 return false;
    //             }
    //         });
    //     }
    //     var promiseWhile = Promise.method(function(condition, action)
    //         {
    //         if (cond()) {return;}
    //         else { return this.programmingLanguagesRemoveButton.click().then(promiseWhile.bind(null, condition, action));}
    //     })
    // };


    ProfilePage.prototype.removeProgrammingLanguages = function removeProgrLanguages() {
        browser.findElement(By.xpath("//div/span")).then(function (err) {
            element(By.css("div.lang-cloud.remove > span")).click().then(removeProgrLanguages);
        }, function (err) {
            if (err) {
                console.log(err.name);
            } else {
                promise.rejected();
            }
        })
    };

    ProfilePage.prototype.inputProgrammingLanguage = function () {
        settings.clearFieldAndSendKeys(this.programmingLanguagesNameField, this.programmingLanguagesNameValue);
        this.programmingLanguagesAddButton.click();
    };

    ProfilePage.prototype.saveProgrammingLanguages = function () {
        this.programmingLanguagesSaveButton.click();
    };

    return ProfilePage;

})();
module.exports = ProfilePage;