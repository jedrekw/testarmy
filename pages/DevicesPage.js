sprintf = require('sprintf').sprintf;
var SettingsPage = require("./../settings");
var settings = new SettingsPage();
var EC = protractor.ExpectedConditions;

var DevicesPage = (function () {
    function DevicesPage() {
        this.addDeviceButton = element(By.id("add-device"));
        this.deviceTypeDropdown = element(By.xpath("//select"));
        this.deviceTypeOptionSmartphone = element(By.xpath("//option[1]"));
        this.deviceTypeOptionTablet = element(By.xpath("//option[2]"));
        this.deviceTypeOptionSmartTV = element(By.xpath("//option[3]"));
        this.deviceTypeOptionComputer = element(By.xpath("//option[4]"));
        this.deviceTypeOptionConsole = element(By.xpath("//option[5]"));
        this.deviceTypeOptionVR = element(By.xpath("//option[6]"));
        this.searchDeviceDatabaseField = element(By.xpath("//input"));
        this.brandField = element(By.xpath("//input"));
        this.brandValue = getRandomString(8);
        this.modelField = element(By.xpath("//div[2]/input"));
        this.modelValue = getRandomString(9);
        this.OSdropdown = element(By.xpath("//div[4]/select"));
        this.OSdropdownOption = element(By.xpath(sprintf("/html/body/app/main/pages/div/div/add-devices/div/div/ba-card/div/div/div/div/form/div[4]/select/option[%s]", settings.getRandomInteger(1, 5))));
        this.OSversionField = element(By.xpath("//div[5]/input"));
        this.OSversionValue = settings.getRandomInteger(1, 9)+"."+settings.getRandomInteger(1,20);
        this.addDeviceSubmit = element(By.xpath("//button"));
        this.addedDeviceTypeField = element(By.xpath("//table-cell-view-mode/div/div"));
        this.addedDeviceBrandField = element(By.xpath("//td[2]/ng2-smart-table-cell/table-cell-view-mode/div/div"));
        this.addedDeviceModelField = element(By.xpath("//td[3]/ng2-smart-table-cell/table-cell-view-mode/div/div"));
        this.addedDeviceOSField = element(By.xpath("//td[4]/ng2-smart-table-cell/table-cell-view-mode/div/div"));
        this.addedDeviceOSversionField = element(By.xpath("//td[5]/ng2-smart-table-cell/table-cell-view-mode/div/div"));
        this.removeAddedDeviceButton = element(By.xpath("//td[6]/a"));
    }

    DevicesPage.prototype.addDevice = function () {
        this.addDeviceButton.click();
    };

    DevicesPage.prototype.selectDeviceTypeSmartphone = function () {
        this.deviceTypeDropdown.click();
        this.deviceTypeOptionSmartphone.click();
    };

    DevicesPage.prototype.selectDeviceTypeTablet = function () {
        this.deviceTypeDropdown.click();
        this.deviceTypeOptionTablet.click();
    };

    DevicesPage.prototype.selectDeviceTypeSmartTV = function () {
        this.deviceTypeDropdown.click();
        this.deviceTypeOptionSmartTV.click();
    };

    DevicesPage.prototype.selectDeviceTypeComputer = function () {
        this.deviceTypeDropdown.click();
        this.deviceTypeOptionComputer.click();
    };

    DevicesPage.prototype.selectDeviceTypeConsole = function () {
        this.deviceTypeDropdown.click();
        this.deviceTypeOptionConsole.click();
    };

    DevicesPage.prototype.selectDeviceTypeVR = function () {
        this.deviceTypeDropdown.click();
        this.deviceTypeOptionVR.click();
    };

    DevicesPage.prototype.fillBrand = function () {
        settings.clearFieldAndSendKeys(this.brandField, this.brandValue)
    };

    DevicesPage.prototype.fillModel = function () {
        settings.clearFieldAndSendKeys(this.modelField, this.modelValue)
    };

    DevicesPage.prototype.selectOS = function () {
        this.OSdropdown.click();
        this.selectedOS = this.OSdropdownOption.getText();
        this.OSdropdownOption.click();
    };

    DevicesPage.prototype.fillOSversion = function () {
        settings.clearFieldAndSendKeys(this.OSversionField, this.OSversionValue)
    };

    DevicesPage.prototype.submitAddDevice = function () {
        this.addDeviceSubmit.click();
    };

    DevicesPage.prototype.removeAddedDevice = function () {
        this.removeAddedDeviceButton.click();
        this.alert().accept();
    };

    return DevicesPage;

})();
module.exports = DevicesPage;