'use strict';
const nodemailer = require('nodemailer');

exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: './node_modules/seleniumserver.jar',
    chromeDriver: './node_modules/chromedriver',
    specs: ['./specs/*.js'],
    baseUrl: "https://mytestarmy:!%40%23TestArmy@staging.testarmy.com",
    onPrepare: function() {
        jasmine.getEnv().addReporter(prettyReporter);
    },
    onComplete: function() {
        return new Promise(function (){
            var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                secure: true, // use SSL
                auth: {
                    user: 'maildoklientow@gmail.com',
                    pass: 'useme1988'
                }
            });
            var mailOptions = {
                from: '"Testarmy" <maildoklientow@gmail.com>',
                to: 'info@testuj.pl',
                subject: 'Testarmy Raport Testy Automatyczne',
                html: '<head><meta http-equiv="Content-Type" content="text/html;charset=UTF-8"></head><p><font size="5">Cześć!</font><br><br><font size="4">Oto wygenerowany automatycznie raport z testów staging.testarmy.com<br><br>Tabela raportowa ze screenshotami oraz logami wykonanych testów:  <a href="https://ci.testuj.pl/job/Testarmy/ws/results/report.html">Otwórz raport</a></font></p>'
            };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    return console.log(error);
                }
                console.log('Mail sent: ' + info.response);
                    });
                });
            }
    };


var PrettyReporter = require('protractor-pretty-html-reporter').Reporter;

var prettyReporter = new PrettyReporter(
    {
        path: 'results'
});
