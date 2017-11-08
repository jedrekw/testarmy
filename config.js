exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
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
