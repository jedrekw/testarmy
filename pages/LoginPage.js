var LoginPage = (function () {
    function LoginPage() {
        this.emailField = element(By.id("inputEmail3"));
        this.passwordField = element(By.id("inputPassword3"));
        this.loginButton = element(By.xpath("//button"));
        // this.currentUser = element(By.binding("{{currentUser.name}}"));
    }

    LoginPage.prototype.visitLoginPage = function () {
        browser.get("/login");
    };

    LoginPage.prototype.fillEmail = function (email) {
        this.emailField.sendKeys(email);
    };

    LoginPage.prototype.fillPassword = function (password) {
        if (password == null) {
            password = "password";
        }
        this.passwordField.sendKeys(password);
    };

    LoginPage.prototype.login = function () {
        this.loginButton.click();
    };

    return LoginPage;

})();

module.exports = LoginPage;