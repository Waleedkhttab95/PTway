const {formTemp} = require('../models/form_Temp')
const {deliveryCompany} = require('../models/delivery-company')
const {jobLess} = require('../models/jobLess')
const {jobCompany} = require('../models/companies')
const cv = require('../middleware/cv');
const file = require('../middleware/file');

var ObjectId = require('mongoose').Types.ObjectId;

module.exports = (app) =>{



 app.post('/api/postTempForm',async (req,res) =>{
    const user = await formTemp.findOne({'email': req.body.email})
    if(!user){
      new formTemp({
         name : req.body.name,
         birthDate : req.body.birthDate,
         gender: req.body.gender,
         isSaudi: req.body.isSaudi,
         company:req.body.company,
         nationality: req.body.nationality,
         city:req.body.city, 
         street: req.body.street,
         mobile: req.body.mobile,
         email: req.body.email,
         avilableCar:req.body.avilableCar,
         carType:req.body.carType,
         carModel:req.body.carModel,
         jobTitle:req.body.jobTitle,
         timeToDelivier:req.body.timeToDelivier,
         mobileOS: req.body.mobileOS,
         exp: req.body.exp,
         social: req.body.social,
         ptwayMember:req.body.ptwayMember
      }).save().then(result => { 
       res.send(result); })
    }
    else{
       res.status(200).send('Done .')
    }

 })



 app.post('/api/deliveryCompany',async (req,res) =>{
   const user = await deliveryCompany.findOne({'email': req.body.email})
   if(!user){
     new deliveryCompany({
        name : req.body.name,
        company : req.body.company,
        supervisor: req.body.supervisor,
        supervisorNumber: req.body.supervisorNumber,
        email:req.body.email,
        city: req.body.city,
        jobType:req.body.jobType, 
        description: req.body.description,
        requiredStaff: req.body.requiredStaff
     }).save().then(result => { 
      res.send(result); })
   }
   else{
      res.status(200).send('Done .')
   }

})


app.post('/api/companyjob',async (req,res) =>{
   const user = await jobCompany.findOne({'email': req.body.email})
   if(!user){
     new jobCompany({
        name : req.body.name,
        mobile : req.body.mobile,
        email: req.body.email,
        city: req.body.city,
        companyName: req.body.companyName,
        companySector: req.body.companySector,
        companyType:req.body.companyType, 
        companySize: req.body.companySize,
        companyInfo: req.body.companyInfo,
        companyWebsite: req.body.companyWebsite,
        jobTitle: req.body.jobTitle,
        YearsOfExperience: req.body.YearsOfExperience,
        contract: req.body.contract

     }).save().then(result => { 
      res.send(result); })
   }
   else{
      res.status(200).send('Done .')
   }

})

app.post('/api/jobless',cv,async (req,res) =>{

   const user = await jobLess.findOne({'email': req.body.email})
   const url = req.protocol + '://' + req.get("host");     
   var cvPath = '';
   if(!req.file){
      cvPath = "null"
   }
   else{
      cvPath= url + "/cv/" + req.file.filename;
   }

   console.log(req.body.gender)
   if(!user){

     new jobLess({
        name : req.body.name,
        gender : req.body.gender,
        mobile: req.body.mobile,
        email: req.body.email,
        city: req.body.city,
        lastCompany:req.body.lastCompany,
        lastJobPosition: req.body.lastJobPosition,
        jobType:req.body.jobType, 
        Experience: req.body.Experience,
        YearsOfExperience: req.body.YearsOfExperience,
        WorkingOutOfCity: req.body.WorkingOutOfCity,
        Linkedin: req.body.Linkedin,
        Cv: cvPath



     }).save().then(result => { 
      res.send(result); })
   }
   else{
      res.status(402).send('error .')
   }

})

app.get('/api/getTemp', async (req,res) =>{
   var users = [];
   const usersCount = await formTemp.find({"isSaudi":"سعودي"}).skip(12432)
   .populate('city');

   // for(var i =0 ; i< usersCount.length ; i++) {
   //    if(ObjectId.isValid(usersCount[i].city)) {
   //       var user = await formTemp.findById(usersCount[i]._id).select('-_id')
   //    .populate('city')
   //    users.push(user)
   //    }
   //    else {
   //       var user = await formTemp.findById(usersCount[i]._id).select('-_id');
   //       users.push(user)
   //    }
   // }

  
   res.status(200).json({
      users: usersCount
   })
})

 app.post('/api/postTempForm2',async (req,res) =>{
   new formTemp2({
      name : req.body.name,
      birthDate : req.body.birthDate,
      gender: req.body.gender,
      isSaudi: req.body.isSaudi,
      company:req.body.company,
      nationality: req.body.nationality,
      city:req.body.city, 
      street: req.body.street,
      mobile: req.body.mobile,
      email: req.body.email,
      avilableCar:req.body.avilableCar,
      carType:req.body.carType,
      carModel:req.body.carModel,
      jobTitle:req.body.jobTitle,
      timeToDelivier:req.body.timeToDelivier,
      mobileOS: req.body.mobileOS,
      exp: req.body.exp,
      ptwayMember:req.body.ptwayMember
   }).save().then(result => { 
    res.send(result); })
 })
}