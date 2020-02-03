const mongoose = require('mongoose');

const {Schema} = mongoose;

const adSchema = new Schema({
   key : {type:String},
createDate: {type: Date },
sortDate: {type: Date},
   contract: {type: mongoose.Schema.Types.ObjectId, ref:'Contracts', required:true},
   project: {type: mongoose.Schema.Types.ObjectId, ref:'Projects'},
   company: {type: mongoose.Schema.Types.ObjectId, ref:'companies'},
   isLock: {type: Boolean , default: false},
   lockDate : Date,
   job_Name: {type: String , required:true},
   job_skills: {type: mongoose.Schema.Types.ObjectId, ref:'Specialists'},
   country:  {type: mongoose.Schema.Types.ObjectId, ref:'Country', required:true},
   city: {type: mongoose.Schema.Types.ObjectId, ref:'City', required:true},
  // study_status: {type:String,  required:true},
  // education_degree:{type: String, required:true},
   public_Major: {type: mongoose.Schema.Types.ObjectId, ref:'Public_Major'},
   universty: {type: mongoose.Schema.Types.ObjectId, ref:'universty'},
   spicifc_Major: {type: mongoose.Schema.Types.ObjectId, ref:'SpMajor'},
   work_hours: {type:Number, required:true},
   work_days: {type:Number, required:true},
   daysInWeek: {type:Number},
   daysName: [{type:String}],
   salary: {type:String, required:true},
   gender: {type:String,required:true},  
   descreption: {type:String,required:true}, 
  // languages: {type:String,required:true},
  // job_Responsibility: {type:String,required:true},
   personal_Skills: {type: mongoose.Schema.Types.ObjectId,ref:'PersonalSkills', required: true},
   required_Number:{type:Number,required:true},
   startDate: {type: Date, required: true},
   limit_Number: {type: Number , default: 0}
  // age_From : {type:Number,required:true},
  // age_To : {type:Number,required:true}
});

adSchema.index({ sortDate: 1, project: 1 }); 
const JobAd = mongoose.model('JobAds', adSchema);


exports.JobAd = JobAd;