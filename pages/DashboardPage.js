var DashboardPage = (function () {
    function DashboardPage() {
        this.userAccountButton = element(By.css("user-avatar > img"));
        this.profileButton = element(By.xpath("//ul/li/a"));
        this.logoutButton = element(By.xpath("//li[2]/a"));
        this.expandDashboardButton = element(By.css("a.collapse-menu-link.ion-navicon"));
        this.devicesButton = element(By.xpath("//ba-menu-item[5]/li/a/span"));
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

        DashboardPage.prototype.logout = function () {
            this.userAccountButton.click();
            this.logoutButton.click();
        };

    return DashboardPage;

})();
module.exports = DashboardPage;