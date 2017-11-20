'use strict';
const nodemailer = require('nodemailer');

var SendMail = function () {
    this.sendHTMLMail = function () {
        var transporter = nodemailer.createTransport('smtps://maildoklientow%40gmail.com:useme1988@smtp.gmail.com');
        var mailOptions = {
            from: '"Testarmy" <maildoklientow@gmail.com>',
            to: 'maildoklientow@gmail.com',
            subject: 'Testarmy Raport Testy Automatyczne',
            html: '<head><meta http-equiv="Content-Type" content="text/html;charset=UTF-8"></head><p><font size="6">Cześć!</font><br><font size="5">Oto wygenerowany automatycznie raport z testów staging.testarmy.com<br><br>Tabela raportowa ze screenshotami oraz logami wykonanych testów:  <a href="http://ci.testuj.pl/job/Clicktrans3/ws/Clicktrans3ReportLogi.html">Tabela z logami, screenshoty i wykres</a></font></p>'
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Mail sent: ' + info.response);
        });
    };
};


exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: './node_modules/seleniumserver.jar',
    chromeDriver: './node_modules/chromedriver',
    specs: ['./specs/*.js'],
    baseUrl: "https://mytestarmy:!%40%23TestArmy@staging.testarmy.com",
    onPrepare: function() {
        jasmine.getEnv().addReporter(prettyReporter);
    },
    onComplete: function () {
        this.sendHTMLMail();
    }
};


var PrettyReporter = require('protractor-pretty-html-reporter').Reporter;

var prettyReporter = new PrettyReporter(
    {
        path: 'results'
});
