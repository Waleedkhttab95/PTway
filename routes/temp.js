const {formTemp} = require('../models/form_Temp')
const {formTemp2} = require('../models/form_temp2')

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

app.get('/api/getTemp', async (req,res) =>{
   var users = [];
   const usersCount = await formTemp.find({'isSaudi': 'سعودي'}).skip(299)
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