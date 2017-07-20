sprintf = require('sprintf').sprintf;
var SettingsPage = require("./../settings");
var settings = new SettingsPage();
var EC = protractor.ExpectedConditions;

var DevicesPage = (function () {
    function DevicesPage() {
        this.addDeviceButton = element(By.id("add-device"));
        this.deviceTypeDropdown = element(By.xpath("//select"));
        this.deviceTypeOptionSmartphone = element(By.xpath("//option[2]"));
        this.deviceTypeOptionTablet = element(By.xpath("//option[3]"));
        this.deviceTypeOptionSmartTV = element(By.xpath("//option[4]"));
        this.deviceTypeOptionComputer = element(By.xpath("//option[5]"));
        this.deviceTypeOptionConsole = element(By.xpath("//option[6]"));
        this.deviceTypeOptionVR = element(By.xpath("//option[7]"));
        this.searchDeviceDatabaseField = element(By.xpath("//input"));
        this.searchDeviceDatabaseValueNokia = "Nokia";
        this.searchDeviceDatabaseFirstResult = element(By.xpath("//div/div/div/div/div/div"));
        this.searchDeviceDatabaseSecondResult = element(By.xpath("//div[2]/div/div/completer-list-item/span/span"));
        this.brandField = element(By.xpath("//div[3]/div/input"));
        this.brandFieldSmartTv = element(By.xpath("//input"));
        this.brandFieldVR = element(By.xpath("//input"));
        this.brandValue = getRandomString(8);
        this.brandDropdownConsole = element(By.xpath("//div/div/select"));
        this.brandDropdownConsoleOption = element(By.xpath(sprintf("/html/body/app/main/pages/div/div/add-devices/div/div/ba-card/div/div/div/div/form/div[2]/div[1]/div/select/option[%s]", settings.getRandomInteger(2, 4))));
        this.modelField = element(By.xpath("//div[2]/input"));
        this.modelValue = getRandomString(9);
        this.modelDropdownConsole = element(By.xpath("//div[2]/div/select"));
        this.modelDropdownConsoleOption = element(By.xpath(sprintf("/html/body/app/main/pages/div/div/add-devices/div/div/ba-card/div/div/div/div/form/div[2]/div[2]/div/select/option[%s]", settings.getRandomInteger(2, 4))));
        this.OSdropdown = element(By.xpath("//div[4]/select"));
        this.OSdropdownOption = element(By.xpath(sprintf("/html/body/app/main/pages/div/div/add-devices/div/div/ba-card/div/div/div/div/form/div[4]/select/option[%s]", settings.getRandomInteger(2, 6))));
        this.OSdropdownSmartTV = element(By.xpath("//div[3]/select"));
        this.OSdropdownOptionSmartTV = element(By.xpath("/html/body/app/main/pages/div/div/add-devices/div/div/ba-card/div/div/div/div/form/div[3]/select/option[2]"));
        this.OSdropdownComputer = element(By.xpath("//div[3]/select"));
        this.OSdropdownOptionComputer = element(By.xpath(sprintf("/html/body/app/main/pages/div/div/add-devices/div/div/ba-card/div/div/div/div/form/div[3]/select/option[%s]", settings.getRandomInteger(2, 3))));
        this.OSversionField = element(By.xpath("//div[5]/input"));
        this.OSversionFieldSmartTV = element(By.xpath("//div[4]/input"));
        this.OSversionFieldComputer = element(By.xpath("//input"));
        this.OSversionValue = settings.getRandomInteger(1, 9)+"."+settings.getRandomInteger(1,20);
        this.addDeviceSubmit = element(By.xpath("//button"));
        this.addedDeviceTypeField = element(By.xpath("//table-cell-view-mode/div/div"));
        this.addedDeviceBrandField = element(By.xpath("//td[2]/ng2-smart-table-cell/table-cell-view-mode/div/div"));
        this.addedDeviceModelField = element(By.xpath("//td[3]/ng2-smart-table-cell/table-cell-view-mode/div/div"));
        this.addedDeviceOSField = element(By.xpath("//td[4]/ng2-smart-table-cell/table-cell-view-mode/div/div"));
        this.addedDeviceOSversionField = element(By.xpath("//td[5]/ng2-smart-table-cell/table-cell-view-mode/div/div"));
        this.removeAddedDeviceButton = element(By.xpath("//td[6]/a"));
        this.noDevicesAddedField = element(By.xpath("//td"));
    }

    DevicesPage.prototype.removeAllDevices = function removeDevices() {
        browser.findElement(By.xpath("//td[6]/a")).then(function (err) {
            element(By.xpath("//td[6]/a")).click();
            browser.switchTo().alert().accept().then(removeDevices);
        }, function (err) {
            if (err) {
                console.log(err.name);
            } else {
                promise.rejected();
            }
        })
    };

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

    DevicesPage.prototype.fillSearchSmartphoneFieldNokia = function () {
        settings.clearFieldAndSendKeys(this.searchDeviceDatabaseField, this.searchDeviceDatabaseValueNokia)
    };

    DevicesPage.prototype.clickFirstResultSearchSmartphone = function () {
        settings.clearFieldAndSendKeys(this.searchDeviceDatabaseField, this.searchDeviceDatabaseValueNokia)
    };

    DevicesPage.prototype.fillBrand = function () {
        settings.clearFieldAndSendKeys(this.brandField, this.brandValue)
    };

    DevicesPage.prototype.fillBrandSmartTV = function () {
        settings.clearFieldAndSendKeys(this.brandFieldSmartTv, this.brandValue)
    };

    DevicesPage.prototype.fillBrandVR = function () {
        settings.clearFieldAndSendKeys(this.brandFieldVR, this.brandValue)
    };

    DevicesPage.prototype.selectBrandConsole = function () {
        this.brandDropdownConsole.click();
        this.selectedBrandConsole = this.brandDropdownConsoleOption.getText();
        this.brandDropdownConsoleOption.click();
    };

    DevicesPage.prototype.fillModel = function () {
        settings.clearFieldAndSendKeys(this.modelField, this.modelValue)
    };

    DevicesPage.prototype.selectModelConsole = function () {
        this.modelDropdownConsole.click();
        this.selectedModelConsole = this.modelDropdownConsoleOption.getText();
        this.modelDropdownConsoleOption.click();
    };

    DevicesPage.prototype.selectOS = function () {
        this.OSdropdown.click();
        this.selectedOS = this.OSdropdownOption.getText();
        this.OSdropdownOption.click();
    };

    DevicesPage.prototype.selectOSsmartTV = function () {
        this.OSdropdownSmartTV.click();
        this.OSdropdownOptionSmartTV.click();
    };

    DevicesPage.prototype.selectOSComputer = function () {
        this.OSdropdownComputer.click();
        this.selectedOSComputer = this.OSdropdownOptionComputer.getText();
        this.OSdropdownOptionComputer.click();
    };

    DevicesPage.prototype.fillOSversion = function () {
        settings.clearFieldAndSendKeys(this.OSversionField, this.OSversionValue)
    };

    DevicesPage.prototype.fillOSversionSmartTV = function () {
        settings.clearFieldAndSendKeys(this.OSversionFieldSmartTV, this.OSversionValue)
    };

    DevicesPage.prototype.fillOSversionComputer = function () {
        settings.clearFieldAndSendKeys(this.OSversionFieldComputer, this.OSversionValue)
    };

    DevicesPage.prototype.submitAddDevice = function () {
        this.addDeviceSubmit.click();
    };

    DevicesPage.prototype.removeAddedDevice = function () {
        this.removeAddedDeviceButton.click();
        browser.switchTo().alert().accept();
    };

    return DevicesPage;

})();
module.exports = DevicesPage;