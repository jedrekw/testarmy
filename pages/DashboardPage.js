var DashboardPage = (function () {
    function DashboardPage() {
        this.userAccountButton = element(By.css("#user-profile-dd"));
        this.profileButton = element(By.xpath("//ul/li/a"));
        this.expandDashboardButton = element(By.css("a.collapse-menu-link.ion-navicon"));
        this.devicesButton = element(By.xpath("//ba-menu-item[6]/li/a/span"));
    }

        DashboardPage.prototype.expandDashboard = function () {
            this.expandDashboardButton.click();
        };

        DashboardPage.prototype.visitProfile = function () {
            this.userAccountButton.click();
            this.profileButton.click();
        };

        DashboardPage.prototype.visitDevices = function () {
            this.devicesButton.click();
        };

    return DashboardPage;

})();
module.exports = DashboardPage;