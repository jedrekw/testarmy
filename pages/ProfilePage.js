var ProfilePage = (function () {
    function ProfilePage() {
        this.contactDetailsTab = element(By.xpath("//h5[2]"));
        this.emailField = element(By.xpath("//div[2]/div[2]/div/div/div/div/div/div/div/div/div/input"));
        this.nameField = element(By.xpath("//div[2]/div/input"));
        this.nameValue = getRandomString();
        this.surnameField = element(By.xpath("//div[2]/input"));
        this.surnameValue = getRandomString();
        this.randomGenderButton = element(By.xpath("//div[3]/div/label[%s]"%getRandomInteger(1,3)));
        this.dateField = element(By.xpath("//ng2-datepicker/div/div/input"));
        this.dateValue = getTodayDate()

    }

    ProfilePage.prototype.visitContactDetailsTab = function () {
        this.contactDetailsTab.click();
    };

    ProfilePage.prototype.getCurrentUser = function () {
        return this.emailField.getText();
    };

    ProfilePage.prototype.changeName = function () {
        this.nameField.clear().then(function() {
            query.sendKeys(this.nameValue);
        })
    };

    ProfilePage.prototype.changeSurname = function () {
        this.surnameField.clear().then(function() {
            query.sendKeys(this.surnameValue);
        })
    };

    ProfilePage.prototype.clickRandomGender = function () {
        this.randomGenderButton.click();
    };

    ProfilePage.prototype.sendDate = function () {
        this.dateField.clear().then(function() {
            query.sendKeys(this.dateValue);
        })
    };

return ProfilePage
});

module.exports = ProfilePage();