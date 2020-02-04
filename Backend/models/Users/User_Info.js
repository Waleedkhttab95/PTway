const mongoose = require('mongoose');
const {schema} = require('../Shared/Public_Major');
const {Schema} = mongoose;

const user_infoSchema = new Schema({
    user : {type: mongoose.Schema.Types.ObjectId, ref:'users', required:true},
    key : {type:String},
    fullName: {type:String, required:true},
    work_Hours: {
        type: Number,
        default: 0
    },
    profile_views: {
        type: Number,
        default: 0
    },
    aplled_jobs: {
        type: Number,
        default: 0
    },
    country: {type: mongoose.Schema.Types.ObjectId, ref:'Country', required:true}
    ,
    
    study_degree:{
    type: String
    },
    imagePath: String,
    education_degree:{
        type: String
        },
    
    
    gender: {
        type:String
        , required:true
    },
    mobile: {
        type:String
    },
    birthDate: {
        type:Date
      
    },
    
    city: {type: mongoose.Schema.Types.ObjectId, ref:'City', required:true},
    
  
    Education_level: {
        type:String
      
    },
    
    public_Major: {type: mongoose.Schema.Types.ObjectId, ref:'Public_Major'},

    spMajor: {type: mongoose.Schema.Types.ObjectId, ref:'SpMajor'},
    languages: [{type:String}],
    skills: [{type: mongoose.Schema.Types.ObjectId, ref:'Skills' }],
    
    personal_Skills: [{ type: mongoose.Schema.Types.ObjectId, ref:'PersonalSkills'}],
    hoppies: [{type:String}],
    universty: {
        type: mongoose.Schema.Types.ObjectId, ref:'Universty'
    },
    companies: [{ type: mongoose.Schema.Types.ObjectId, ref:'companies'}],
    social_Status: {
        type:String
      
    },
    about: {
        type:String
      
    },
    
personal_web:{
    type: String
    },
    
    facebook: {
        type: String
    },
    twitter: {
        type:String
    },
    
    instagram: {
        type:String
    },
    
    linkedin: {
        type: String
    }
});

const UserInfo = mongoose.model('user_info', user_infoSchema);


exports.UserInfo = UserInfo;


