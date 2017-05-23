var ProfilePage = (function () {
    function ProfilePage() {
        this.contactDetailsTab = element(By.xpath("//h5[2]"));
        this.emailField = element(By.xpath("(//input[@type='text'])[4]"));
        this.passwordField = element(By.id("inputPassword3"));
        this.loginButton = element(By.xpath("//button"));
    }

    ProfilePage.prototype.visitContactDetailsTab = function () {
        this.contactDetailsTab.click();
    };

    ProfilePage.prototype.getCurrentUser = function () {
        return this.emailField.getText();
    };


    return ProfilePage;

})();

module.exports = ProfilePage;