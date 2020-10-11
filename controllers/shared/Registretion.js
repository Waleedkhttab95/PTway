const { User, validate } = require('../../models/Users/User');
const { sendVerifMail ,companySendVerifMail } = require('../../services/email/mail');
const { Company } = require('../../models/Companies/Companies');
const _ = require('lodash');
const bcrypt = require('bcrypt-nodejs');
const {superVisor} = require('../../models/Companies/superVisors');



exports.userRegister = async (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    let user = await User.findOne({ email: req.body.email.toLowerCase() });
    let company = await Company.findOne({ email: req.body.email.toLowerCase() });

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
  }

exports.subUserRegister =  async (req,res) =>{
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
  }

exports.companyRegister = async (req, res) => {

    // const { error } = validateCompany(req.body);
    // if (error) return res.status(400).send(error.details[0].message);


    let company = await Company.findOne({ email: req.body.email.toLowerCase() });
    let user = await User.findOne({ email: req.body.email.toLowerCase() });

    if (company || user) return res.status(400).send('المستخدم مسجل مسبقا');

    // add superVisor Step //
    var superVisorResult =  addSuperVisor(req.body);


    // create company obj & save //
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
      superVisorResult.then(result =>{
        company.superVisor= result._id
        company.save();
      })

    });


    company.isConfirmed = false; // initially will be false
    companySendVerifMail(company.companyName , company.email,company._id);


    const token = company.generateAuthToken();

    res.status(200).json({
      token: token
    });;
  }


exports.changeSuperVisorInfo = async (req, res) => {
    const superVisorData = req.body;
    if (!superVisorData) return res.status(401).send("Invalid Data ")
   const superVisor= await addSuperVisor(superVisorData);
    const company = await Company.findByIdAndUpdate(req.user._id,
        { $set: { superVisor: superVisor._id } }
    );
    return res.status(200).send('updated . ');


}

exports.subCompanyRegister =  async (req, res) => {

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
  }

  exports.resend = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    //  if the email for a company
    if(!user){
      try{
        const company = await Company.findOne({ email: req.body.email });
        companySendVerifMail(company.companyName , company.email, company._id);
        res.status(200).send();
      } catch(e){
        res.status(400).send(e);
        console.log(e);
      }
    }
    // if the email for a user
    else {
    try{
      sendVerifMail(user.firstName , user.email,user._id);
      res.status(200).send();
    } catch(e){
      res.status(400).send(e);
      console.log(e);
    }
  }
  }



  // Add superVisor of company
  function addSuperVisor(req){
    if(!req) return status(401).send("faild request !");

     const result = new superVisor({
      Name : req.Name,
      position: req.position,
      phone: req.phone
    }).save()
   return result
  };

