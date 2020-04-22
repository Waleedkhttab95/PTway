const {formTemp} = require('../models/form_Temp')
const {formTemp2} = require('../models/form_Temp2')



module.exports = (app) =>{



 app.post('/api/postTempForm',async (req,res) =>{
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
      ptwayMember:req.body.ptwayMember
   }).save().then(result => { 
    res.send(result); })
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