exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/*.js'],
    baseUrl: "http://192.168.4.130/",
    restartBrowserBetweenTests: true
};
