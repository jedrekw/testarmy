var DashboardPage = (function () {
    function DashboardPage() {
        this.profileButton = element(By.xpath("//ba-menu-item[5]/li/a/span"));
        this.expandDashboardButton = element(By.xpath("//a[2]"));
    }

        DashboardPage.prototype.expandDashboard = function () {
            this.expandDashboardButton.click();
        };

        DashboardPage.prototype.visitProfile = function () {
            this.profileButton.click();
        };

    return DashboardPage;

})();

module.exports = DashboardPage;