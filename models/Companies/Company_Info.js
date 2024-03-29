const mongoose = require('mongoose');

const {Schema} = mongoose;

const company_infoSchema = new Schema({
    key : {type:String},
    company:{type: mongoose.Schema.Types.ObjectId, ref:'companies'},
    country:  {type: mongoose.Schema.Types.ObjectId, ref:'Country'},
    imagePath : {type: String},
    phone: {type:Number},
    address: {type:String, },
    city: {type: mongoose.Schema.Types.ObjectId, ref:'City'},
    info: { type:String, },
    vision: { type:String },
    message: {type:String},
    personal_web:{ type: String},
    facebook: { type: String},
    twitter: { type:String },
    instagram: {type:String},
    linkedin: { type: String }
});

const CompanyInfo = mongoose.model('company_info', company_infoSchema);


exports.CompanyInfo = CompanyInfo;


