exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: './node_modules/seleniumserver.jar',
    chromeDriver: '/usr/lib/chromium-browser/chromedriver',
    specs: ['./specs/*.js'],
    baseUrl: "https://mytestarmy:!%40%23TestArmy@staging.testarmy.com",
    onPrepare: function() {
        jasmine.getEnv().addReporter(prettyReporter);
    }
};

var PrettyReporter = require('protractor-pretty-html-reporter').Reporter;

var prettyReporter = new PrettyReporter(
    {
        path: 'results'
});
