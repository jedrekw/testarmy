exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/*.js'],
    baseUrl: "https://staging.testarmy.com/"
};
