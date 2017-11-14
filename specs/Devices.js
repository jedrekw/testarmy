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


        it('- add smartphone should succeed', function(){
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
            driver.sleep(1000);
            var source = driver.getPageSource();
            expect(source).toContain("Device has been added");
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            expect("Smartphone").toEqual(devices.addedDeviceTypeField.getText());
            expect(devices.brandValue).toEqual(devices.addedDeviceBrandField.getText());
            expect(devices.modelValue).toEqual(devices.addedDeviceModelField.getText());
            expect(devices.selectedOS).toContain(devices.addedDeviceOSField.getText());
            expect(devices.OSversionValue).toEqual(devices.addedDeviceOSversionField.getText());
            devices.removeAddedDevice();
            driver.sleep(1000);
            var source1 = driver.getPageSource();
            expect(devices.noDevicesAddedField.getText()).toContain("No devices added");
            expect(source1).not.toContain("Smartphone");
            expect(source1).not.toContain(devices.brandValue);
            expect(source1).not.toContain(devices.modelValue);
            expect(source1).not.toContain(devices.selectedOS);
            // expect(source1).not.toContain(devices.OSversionValue);
        //    wersja OS'a zostaje w zrodle strony
        });

        it('- add tablet should succeed', function(){
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            browser.wait(EC.presenceOf(devices.addDeviceButton), 10000);
            devices.removeAllDevices();
            devices.addDevice();
            browser.wait(EC.presenceOf(devices.deviceTypeDropdown), 10000);
            devices.selectDeviceTypeTablet();
            devices.fillBrand();
            devices.fillModel();
            devices.selectOS();
            devices.fillOSversion();
            devices.submitAddDevice();
            driver.sleep(1000);
            var source = driver.getPageSource();
            expect(source).toContain("Device has been added");
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            expect("Tablet").toEqual(devices.addedDeviceTypeField.getText());
            expect(devices.brandValue).toEqual(devices.addedDeviceBrandField.getText());
            expect(devices.modelValue).toEqual(devices.addedDeviceModelField.getText());
            expect(devices.selectedOS).toContain(devices.addedDeviceOSField.getText());
            expect(devices.OSversionValue).toEqual(devices.addedDeviceOSversionField.getText());
            devices.removeAddedDevice();
            driver.sleep(1000);
            var source1 = driver.getPageSource();
            expect(devices.noDevicesAddedField.getText()).toContain("No devices added");
            expect(source1).not.toContain("Tablet");
            expect(source1).not.toContain(devices.brandValue);
            expect(source1).not.toContain(devices.modelValue);
            expect(source1).not.toContain(devices.selectedOS);
            // expect(source1).not.toContain(devices.OSversionValue);
            //    wersja OS'a zostaje w zrodle strony
        });

        it('- add smartTV should succeed', function(){
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            browser.wait(EC.presenceOf(devices.addDeviceButton), 10000);
            devices.removeAllDevices();
            devices.addDevice();
            browser.wait(EC.presenceOf(devices.deviceTypeDropdown), 10000);
            devices.selectDeviceTypeSmartTV();
            devices.fillBrandSmartTV();
            devices.fillModel();
            devices.selectOSsmartTV();
            devices.fillOSversionSmartTV();
            devices.submitAddDevice();
            driver.sleep(1000);
            var source = driver.getPageSource();
            expect(source).toContain("Device has been added");
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            expect("Smart TV").toEqual(devices.addedDeviceTypeField.getText());
            expect(devices.brandValue).toEqual(devices.addedDeviceBrandField.getText());
            expect(devices.modelValue).toEqual(devices.addedDeviceModelField.getText());
            expect(devices.addedDeviceOSField.getText()).toContain("Smart TV");
            expect(devices.OSversionValue).toEqual(devices.addedDeviceOSversionField.getText());
            devices.removeAddedDevice();
            driver.sleep(1000);
            var source1 = driver.getPageSource();
            expect(devices.noDevicesAddedField.getText()).toContain("No devices added");
            expect(source1).not.toContain("Smart TV");
            expect(source1).not.toContain(devices.brandValue);
            expect(source1).not.toContain(devices.modelValue);
            expect(source1).not.toContain(devices.selectedOS);
            // expect(source1).not.toContain(devices.OSversionValue);
            //    wersja OS'a zostaje w zrodle strony
        });

        it('- add computer should succeed', function(){
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            browser.wait(EC.presenceOf(devices.addDeviceButton), 10000);
            devices.removeAllDevices();
            devices.addDevice();
            browser.wait(EC.presenceOf(devices.deviceTypeDropdown), 10000);
            devices.selectDeviceTypeComputer();
            devices.selectOSComputer();
            devices.fillOSversionComputer();
            devices.submitAddDevice();
            driver.sleep(1000);
            var source = driver.getPageSource();
            expect(source).toContain("Device has been added");
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            expect("Computer").toEqual(devices.addedDeviceTypeField.getText());
            expect(devices.selectedOSComputer).toContain(devices.addedDeviceOSField.getText());
            expect(devices.OSversionValue).toEqual(devices.addedDeviceOSversionField.getText());
            devices.removeAddedDevice();
            driver.sleep(1000);
            var source1 = driver.getPageSource();
            expect(devices.noDevicesAddedField.getText()).toContain("No devices added");
            expect(source1).not.toContain("Computer");
            expect(source1).not.toContain(devices.selectedOS);
            // expect(source1).not.toContain(devices.OSversionValue);
            //    wersja OS'a zostaje w zrodle strony
        });

        it('- add console should succeed', function(){
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            browser.wait(EC.presenceOf(devices.addDeviceButton), 10000);
            devices.removeAllDevices();
            devices.addDevice();
            browser.wait(EC.presenceOf(devices.deviceTypeDropdown), 10000);
            devices.selectDeviceTypeConsole();
            devices.selectBrandConsole();
            devices.selectModelConsole();
            devices.submitAddDevice();
            driver.sleep(1000);
            var source = driver.getPageSource();
            expect(source).toContain("Device has been added");
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            expect("Console").toEqual(devices.addedDeviceTypeField.getText());
            expect(devices.selectedBrandConsole).toContain(devices.addedDeviceBrandField.getText());
            expect(devices.selectedModelConsole).toContain(devices.addedDeviceModelField.getText());
            devices.removeAddedDevice();
            driver.sleep(1000);
            var source1 = driver.getPageSource();
            expect(devices.noDevicesAddedField.getText()).toContain("No devices added");
            expect(source1).not.toContain("Console");
            // expect(source1).not.toContain(devices.selectedBrandConsole);
            expect(source1).not.toContain(devices.selectedModelConsole);
            // expect(source1).not.toContain(devices.OSversionValue);
            //    wersja OS'a zostaje w zrodle strony
        });

        it('- add VR should succeed', function(){
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            browser.wait(EC.presenceOf(devices.addDeviceButton), 10000);
            devices.removeAllDevices();
            devices.addDevice();
            browser.wait(EC.presenceOf(devices.deviceTypeDropdown), 10000);
            devices.selectDeviceTypeVR();
            devices.fillBrandVR();
            devices.fillModel();
            devices.submitAddDevice();
            driver.sleep(1000);
            var source = driver.getPageSource();
            expect(source).toContain("Device has been added");
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            expect("VR").toEqual(devices.addedDeviceTypeField.getText());
            expect(devices.brandValue).toEqual(devices.addedDeviceBrandField.getText());
            expect(devices.modelValue).toEqual(devices.addedDeviceModelField.getText());
            devices.removeAddedDevice();
            driver.sleep(1000);
            var source1 = driver.getPageSource();
            expect(devices.noDevicesAddedField.getText()).toContain("No devices added");
            expect(source1).not.toContain("VR");
            expect(source1).not.toContain(devices.brandValue);
            expect(source1).not.toContain(devices.modelValue);
        });

        it('- search smartphone database should succeed', function(){
            // dashboard.expandDashboard();
            dashboard.visitDevices();
            browser.wait(EC.presenceOf(devices.addDeviceButton), 10000);
            devices.addDevice();
            browser.wait(EC.presenceOf(devices.deviceTypeDropdown), 10000);
            devices.selectDeviceTypeSmartphone();
            devices.fillSearchSmartphoneFieldNokia();
            browser.waitForAngular();
            browser.wait(EC.elementToBeClickable(devices.searchDeviceDatabaseSecondResult), 10000);
            browser.wait(EC.textToBePresentInElement(devices.searchDeviceDatabaseFirstResult, "Nokia"), 10000);
            devices.clickFirstResultSearchSmartphone();
            expect(devices.brandField.getAttribute('value')).toContain("Nokia");
            // expect(devices.modelField.getText()).toContain("3210");
        });
    });
