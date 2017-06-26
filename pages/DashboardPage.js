var DashboardPage = (function () {
    function DashboardPage() {
        this.userAccountButton = element(By.css("#user-profile-dd"));
        this.profileButton = element(By.xpath("//ul/li/a"));
        this.expandDashboardButton = element(By.xpath("//a[2]"));
    }

        DashboardPage.prototype.expandDashboard = function () {
            this.expandDashboardButton.click();
        };

        DashboardPage.prototype.visitProfile = function () {
            this.userAccountButton.click();
            this.profileButton.click();
        };

    return DashboardPage;

})();
module.exports = DashboardPage;