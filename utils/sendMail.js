var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://koolsok96%40gmail.com:namnamnam@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Admin !" <koolsok96@gmail.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object

module.exports.send = (option) => {
    transporter.sendMail(option, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}
