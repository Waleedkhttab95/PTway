const { User, validate } = require('../models/Users/User');
const { sendVerifMail ,companySendVerifMail } = require('../services/email/mail');
const { Company } = require('../models/Companies/Companies');
const _ = require('lodash');
const bcrypt = require('bcrypt-nodejs');
const auth = require('../middleware/auth');



module.exports = (app) => {

  // User Registrion *

  app.post('/api/userRegistreing', async (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    let user = await User.findOne({ email: req.body.email });
    let company = await Company.findOne({ email: req.body.email });

    if (user || company) return res.status(400).send('المستخدم مسجل مسبقا !');

    user = new User(_.pick(req.body, ['firstName', 'lastName', 'email', 'password']));
    const salt = await bcrypt.genSalt(10, (error, hash) => {
      if (error) res.status(400)

    });
    const hashPassword = await bcrypt.hash(user.password, salt, null, (error, hash) => {
      if (error) res.status(400)
      today = new Date();
      today.setHours(0, 0, 0, 0);
      user.password = hash;
      user.createDate = Date.now();
      user.sortDate = today
      user.email = user.email.toLowerCase()
      user.save();
    });
    user.isConfirmed = false; // initially will be false 
    sendVerifMail(user.firstName , user.email,user._id);
    
    const token = user.generateAuthToken();
    res.status(200).json({
      token: token
    });;
  });

 // sub account Registrion '
 app.post('/api/subUserRegistreing',auth, async (req,res) =>{
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);


  let user = await User.findOne({ email: req.body.email });
  let company = await Company.findOne({ email: req.body.email });

  if (user || company) return res.status(400).send('المستخدم مسجل مسبقا !');

  user = new User(_.pick(req.body, ['firstName', 'lastName', 'email', 'password']));
  const salt = await bcrypt.genSalt(10, (error, hash) => {
    if (error) res.status(400)

  });
  const hashPassword = await bcrypt.hash(user.password, salt, null, (error, hash) => {
    if (error) res.status(400)
    today = new Date();
    today.setHours(0, 0, 0, 0);
    user.password = hash;
    user.createDate = Date.now();
    user.sortDate = today
    user.email = user.email.toLowerCase()
    user.isSubUser = true;
    user.company = req.user._id;
    user.save();
  });
  user.isConfirmed = true; // initially will be false 
  
  const token = user.generateAuthToken();
  res.status(200).json({
    token: token
  });;
});


 

  // for Companies Regitstrion *

  app.post('/api/companyRegistreing', async (req, res) => {

    // const { error } = validateCompany(req.body);
    // if (error) return res.status(400).send(error.details[0].message);


    let company = await Company.findOne({ email: req.body.email });
    let user = await User.findOne({ email: req.body.email });

    if (company || user) return res.status(400).send('المستخدم مسجل مسبقا');

    company = new Company({
      companyName: req.body.companyName,
      company: null,
      email: req.body.email,
      password: req.body.password,
      sector: req.body.sector,
      CompanySpecialist: req.body.CompanySpecialist,
      isActive: req.body.isActive
    });
    const salt = await bcrypt.genSalt(10, (error, hash) => {
      if (error) res.status(400)

    });
    const hashPassword = await bcrypt.hash(company.password, salt, null, (error, hash) => {
      if (error) res.status(400)
      today = new Date();
      today.setHours(0, 0, 0, 0);
      company.password = hash;
      company.createDate = Date.now();
      company.sortDate= today
      company.email = company.email.toLowerCase()
      company.save();
    });


    company.isConfirmed = false; // initially will be false 
    companySendVerifMail(company.companyName , company.email);


    const token = company.generateAuthToken();

    res.status(200).json({
      token: token
    });;
  });


  app.post('/api/subcompanyRegistreing',auth, async (req, res) => {

    // const { error } = validateCompany(req.body);
    // if (error) return res.status(400).send(error.details[0].message);


    let company = await Company.findOne({ email: req.body.email });
    let user = await User.findOne({ email: req.body.email });

    if (company || user) return res.status(400).send('المستخدم مسجل مسبقا');

    company = new Company({
      companyName: req.body.companyName,
      company: req.user._id,
      email: req.body.email,
      password: req.body.password,
      sector: req.body.sector,
      CompanySpecialist: req.body.CompanySpecialist,
      isActive: req.body.isActive
    });
    const salt = await bcrypt.genSalt(10, (error, hash) => {
      if (error) res.status(400)

    });
    const hashPassword = await bcrypt.hash(company.password, salt, null, (error, hash) => {
      if (error) res.status(400)
      company.password = hash;
      company.save();
    });


    company.isConfirmed = true; // initially will be false 


    const token = company.generateAuthToken();

    res.status(200).json({
      token: token
    });;
  });



  app.post('/api/resend' , async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    //  if the email for a company 
    if(!user){  
      try{
        const company = await Company.findOne({ email: req.body.email });
        companySendVerifMail(company.companyName , company.email);
        res.status(200).send();
      } catch(e){
        res.status(400).send(e);
        console.log(e);
      }
    }
    // if the email for a user
    else {
    try{
      sendVerifMail(user.firstName , user.email);
      res.status(200).send();
    } catch(e){
      res.status(400).send(e);
      console.log(e);
    }
  }
  });
};



