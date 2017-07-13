var SettingsPage = require("./../settings");
var settings = new SettingsPage();
var DashboardPage = require("./../pages/DashboardPage");
var dashboard = new DashboardPage();
var DevicesPage = require("./../pages/DevicesPage");
var devices = new DevicesPage();
var LoginPage = require("./../pages/LoginPage");
var login_page = new LoginPage();
var browser = require("protractor").protractor.browser;
var driver = browser.driver;
var EC = protractor.ExpectedConditions;

    describe('Devices', function() {
        beforeEach(function() {
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            // browser.driver.manage().window().setSize(1024, 768);
            browser.driver.manage().window().maximize();
            login_page.visitLoginPage();
            login_page.fillEmail(USER);
            login_page.fillPassword(PASSWORD);
            login_page.login();
            browser.wait(EC.presenceOf(dashboard.userAccountButton), 10000);
            });

        fit('- add smartphone should succeed', function(){
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            browser.wait(EC.presenceOf(devices.addDeviceButton), 10000);
            devices.removeAllDevices();
            devices.addDevice();
            browser.wait(EC.presenceOf(devices.deviceTypeDropdown), 10000);
            devices.selectDeviceTypeSmartphone();
            devices.fillBrand();
            devices.fillModel();
            devices.selectOS();
            devices.fillOSversion();
            devices.submitAddDevice();
            var source = driver.getPageSource();
            expect(source).toContain("Device has been added");
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            driver.sleep(10000);
            expect("Smartphone").toEqual(devices.addedDeviceTypeField.getText());
            expect(devices.brandValue).toEqual(devices.addedDeviceBrandField.getText());
            expect(devices.modelValue).toEqual(devices.addedDeviceModelField.getText());
            expect(devices.selectedOS).toEqual(devices.addedDeviceOSField.getText());
            expect(devices.OSversionValue).toEqual(devices.addedDeviceOSversionField.getText());
            var source1 = driver.getPageSource();
            expect(source1).toContain("No devices added");
            expect(source1).not.toContain(devices.selectedDeviceType);
            expect(source1).not.toContain(devices.brandValue);
            expect(source1).not.toContain(devices.modelValue);
            expect(source1).not.toContain(devices.selectedOS);
            // expect(source1).not.toContain(devices.OSversionValue);
        //    wersja OS'a zostaje w zrodle strony
        });
    });
