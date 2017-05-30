var SettingsPage = (function () {

    function SettingsPage() {
        global.URL = "http://192.168.4.130/";

        global.USER = "testujpl@o2.pl";
        global.PASSWORD = "Testuj88#";

        getRandomInteger = function(min, max){
            return parseInt(Math.random() * (max - min) + min);
        };

        getRandomString = function (length) {
            var string = '';
            var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; //Include numbers if you want
            for (i = 0; i < length; i++) {
                string += letters.charAt(Math.floor(Math.random() * letters.length));
            }
            return string;
        };

        getTodayDate = function () {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            return yyyy + '-' + mm + '-' + dd;
        };

        clearFieldAndSendKeys = function (field, value) {
            field.clear().then(function () {
                field.sendKeys(value);
            });
        };

    }

return SettingsPage;
})();

module.exports = SettingsPage;