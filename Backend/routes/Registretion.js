const { User, validate } = require('../models/Users/User');
const { sendVerifMail ,companySendVerifMail } = require('../models/Shared/mail');
const { Company } = require('../models/Companies/Companies');
const _ = require('lodash');
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');


module.exports = (app) => {

  // User Registrion *

  app.post('/api/userRegistreing', async (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered');

    user = new User(_.pick(req.body, ['firstName', 'lastName', 'email', 'password']));
    const salt = await bcrypt.genSalt(10, (error, hash) => {
      if (error) res.status(400)

    });
    const hashPassword = await bcrypt.hash(user.password, salt, null, (error, hash) => {
      if (error) res.status(400)
      user.password = hash;
      user.save();
    });
    user.isConfirmed = false; // initially will be false 
    sendVerifMail(user.firstName , user.email);
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
    if (company) return res.status(400).send('User already registered');
    company = new Company({
      companyName: req.body.companyName,
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


    company.isConfirmed = false; // initially will be false 
    companySendVerifMail(company.companyName , company.email);


    const token = company.generateAuthToken();

    res.status(200).json({
      token: token
    });;
  });



  app.post('/api/resend' , async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    try{
      sendVerifMail(user.firstName , user.email);
      res.status(200).send();
    } catch(e){
      res.status(400).send(e);
    }
  });
};



