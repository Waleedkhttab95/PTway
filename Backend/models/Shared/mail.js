const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const hogan  = require('hogan.js');
const fs = require('fs');


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: keys.user,
        pass: keys.pass
    }
});


async function sendVerifMail(name, email) {
    const ccemail = fs.readFileSync(__dirname + '/email.html', 'utf-8');
    const comemail = hogan.compile(ccemail);
    jwt.sign(
        // payload as json:
        { 
            name,
            email
         }, // to know which user
        // secret
        keys.jwtKey,
        // expire in hour
        { expiresIn: '1d' },
        //callback
        (err, token) => {
            if (err) return err;

            // response
            const url =keys.mail_url+ `/api/confirmation/${token}`;
            console.log(url)
            transporter.sendMail({
                to: email,
                subject: ' PTway نوّرت',
                html: comemail.render({name : name , email : url}),
            });
        }
    )
}


async function companySendVerifMail(name, email) {
    const ccemail = fs.readFileSync(__dirname + '/com-email.html', 'utf-8');
    const comemail = hogan.compile(ccemail);
    jwt.sign(
        // payload as json:
        { 
            name,
            email
         }, // to know which user
        // secret
        keys.jwtKey,
        // expire in hour
        { expiresIn: '1d' },
        //callback
        (err, token) => {
            if (err) return err;

            // response
            const url = keys.mail_url+`/api/com_confirmation/${token}`;
            transporter.sendMail({
                to: email,
                subject: ' PTway نوّرتوا',
                html: comemail.render({name : name , email : url}),
            });
        }
    )
}




async function sendResetEmail(id, email , name) {
    const ccemail = fs.readFileSync(__dirname + '/email-Reset.html', 'utf-8');
    const comemail = hogan.compile(ccemail);
    
    const url = keys.mail_url+`/api/reset?id=`+id;
    transporter.sendMail({
        to: email,
        subject: ' PTway تغيير الرقم السري ',
        html: comemail.render({name : name , email : url}),
    });
};


async function sendJobOffer(email , name) {
    const url = keys.mail_url;
    const ccemail = fs.readFileSync(__dirname + '/email-JobsAd.html', 'utf-8');
    const comemail = hogan.compile(ccemail);
    transporter.sendMail({
        to: email,
        subject: ' PTway عرض وظيفي',
        html: comemail.render({name : name}),
    });
};



exports.sendVerifMail = sendVerifMail;
exports.sendResetEmail = sendResetEmail;
exports.sendJobOffer = sendJobOffer;
exports.companySendVerifMail = companySendVerifMail;
