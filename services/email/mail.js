const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const hogan  = require('hogan.js');
const fs = require('fs');
const userControllers = require('../../controllers/user/userProccess');


let transporter = nodemailer.createTransport({

    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'apikey',//keys.user,

        pass:'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'//keys.pass
    }

});


async function sendVerifMail(name, email,_id) {
    const ccemail = fs.readFileSync(__dirname + '/email.html', 'utf-8');
    const comemail = hogan.compile(ccemail);
    jwt.sign(
        // payload as json:
        {
            name,
            email,
            _id
         }, // to know which user
        // secret
        keys.jwtKey,
        //callback
        (err, token) => {
            if (err) return err;

            // response
            const url =keys.mail_url+ `/api/confirmation/${token}`;
            console.log(url)
            transporter.sendMail({
                from: 'no-reply@ptway.net',
                to: email,
                subject: ' PTway نوّرت',
                html: comemail.render({name : name , email : url}),
            });
        }
    )
}


async function companySendVerifMail(name, email,_id) {
    const ccemail = fs.readFileSync(__dirname + '/com-email.html', 'utf-8');
    const comemail = hogan.compile(ccemail);
    jwt.sign(
        // payload as json:
        {
            name,
            email,
            _id
         }, // to know which user
        // secret
        keys.jwtKey,
        // expire in hour
        { expiresIn: '2d' },
        //callback
        (err, token) => {
            if (err) return err;

            // response
            const url = keys.mail_url+`/api/com_confirmation/${token}`;
            transporter.sendMail({
                from: 'no-reply@ptway.net',
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
        from: 'no-reply@ptway.net',
        to: email,
        subject: ' PTway تغيير الرقم السري ',
        html: comemail.render({name : name , email : url}),
    });
};


async function sendJobOffer(email , name, id) {
    const url = keys.mail_url;
    const link = 'https://ptway.net/user/job/' + id;
    const ccemail = fs.readFileSync(__dirname + '/email-JobsAd.html', 'utf-8');
    const comemail = hogan.compile(ccemail);
    transporter.sendMail({
        from: 'no-reply@ptway.net',
        to: email,
        subject: ' PTway عرض وظيفي',
        html: comemail.render({name : name , link : link}),
    });
};


async function sendHelloEmail(email) {
    // const url = keys.mail_url;
    // const ccemail = fs.readFileSync(__dirname + '/email-hello.html', 'utf-8');
    // const comemail = hogan.compile(ccemail);
    // transporter.sendMail({
    //     bcc: email,
    //     subject: ' ما ضبّطك أحد ؟ حنّا نضبّطك',
    //     html: comemail.render(),
    // });
};

async function adminEmail(subject , message , email , name) {
    const url = keys.mail_url;
    const ccemail = fs.readFileSync(__dirname + '/adminEmail.html', 'utf-8');
    const comemail = hogan.compile(ccemail);
    transporter.sendMail({
        from: 'no-reply@ptway.net',
        to: email,
        subject: subject,
        html: comemail.render({name : name , message : message}),
    });
};

async function contactEmail(  message , email , name) {
    const url = keys.mail_url;
    const ccemail = fs.readFileSync(__dirname + '/contact-us.html', 'utf-8');
    const comemail = hogan.compile(ccemail);
    transporter.sendMail({
        from: email,
        to: 'info@ptway.net',
        subject: 'تواصل معنا',
        html: comemail.render({name : name , message : message}),
    });
};

async function reminderEmail(  email , candidates, jobId, jobName) {
    const url = keys.mail_url;
    const ccemail = fs.readFileSync(__dirname + '/reminder-email.html', 'utf-8');
    const comemail = hogan.compile(ccemail);
    const pageLink = 'https://www.ptway.net/applicants/job/id='+jobId+"&name="+jobName
    transporter.sendMail({
        from: 'no-reply@ptway.net',
        to: email,
        subject: 'مرشحينك مستعدين !',
        html: comemail.render({ candidates : candidates, jobLink:pageLink}),
    });
};

async function toAdmins(message , type) {
    let htmlPage = ''
    if(type == "new Registretion") {
        htmlPage = '/notifyAdminNewRegCompany.html'
    }
    else if(type == "confirm company"){

        htmlPage = '/notifyAdminConfirmCompany.html'
    }
    else{
        htmlPage = '/notifyAdmin.html'
    }
    const url = keys.mail_url;
    const ccemail = fs.readFileSync(__dirname + htmlPage, 'utf-8');
    const comemail = hogan.compile(ccemail);
    let admins =  await userControllers.getAdmins();

    for(let i =0 ; i<admins.length ; i++){
        transporter.sendMail({
            from: 'no-replay@ptway.net',
            to: admins[i].email,
            subject: type,
            html: comemail.render({type : type , message : message}),
        });
    }

};



async function sendInterview(details , recs) {
    const url = keys.mail_url;
    const ccemail = fs.readFileSync(__dirname + '/interviews.html', 'utf-8');
    const comemail = hogan.compile(ccemail);

    for(let i =0 ; i<recs.length ; i++){
        transporter.sendMail({
            from: 'no-replay@ptway.net',
            to: recs[i].candidateName.email,
            subject: "تجهز للمقابلة !",
            html: comemail.render({details : details,jobName:recs[i].jobAd.job_Name,companyName: recs[i].jobAd.company.companyName }),
        });
    }

};




exports.sendVerifMail = sendVerifMail;
exports.sendResetEmail = sendResetEmail;
exports.sendJobOffer = sendJobOffer;
exports.companySendVerifMail = companySendVerifMail;
exports.contactEmail = contactEmail;
exports.reminderEmail= reminderEmail;
exports.notifyAdmin= toAdmins;
//exports.sendHelloEmail = sendHelloEmail;
exports.adminEmail = adminEmail;
exports.sendInterview = sendInterview;