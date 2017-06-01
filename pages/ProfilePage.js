sprintf = require('sprintf').sprintf;

var ProfilePage = (function () {
    function ProfilePage() {
        this.contactDetailsTab = element(By.xpath("//h5[2]"));
        this.emailField = element(By.xpath("//div[2]/div[2]/div/div/div/div/div/div/div/div/div/input"));
        this.nameField = element(By.xpath("//div[2]/div/input"));
        this.nameValue = getRandomString();
        this.surnameField = element(By.xpath("//div[2]/input"));
        this.surnameValue = getRandomString(7);
        this.randomGenderLocator = sprintf('//div[3]/div/label[%s]', getRandomInteger(1,3));
        this.randomGenderButton = element(By.xpath(this.randomGenderLocator));
        this.dateField = element(By.xpath("//ng2-datepicker/div/div/input"));
        this.dateValue = (By.css("span.day.today"));

    }

    ProfilePage.prototype.visitContactDetailsTab = function () {
        this.contactDetailsTab.click();
    };

    ProfilePage.prototype.getCurrentUser = function () {
        return this.emailField.getText();
    };

    // this.changeName = function(){
    //     this.nameField.clear();
    //     this.nameField.sendKeys(this.nameValue);
    // };

    ProfilePage.prototype.changeName = function () {
        this.nameField.clear();
        this.nameField.sendKeys(this.nameValue);
    };

    ProfilePage.prototype.changeSurname = function () {
        this.surnameField.clear();
        this.surnameField.sendKeys(this.surnameValue);
    };

    ProfilePage.prototype.clickRandomGender = function () {
        this.randomGenderButton.click();
    };

    ProfilePage.prototype.sendDate = function () {
        this.dateField.click();
        browser.driver.sleep(2000);

    ProfilePage.prototype.sendDate1 = function () {
        this.dateValue.click();
    };

return ProfilePage
};
});
module.exports = ProfilePage;