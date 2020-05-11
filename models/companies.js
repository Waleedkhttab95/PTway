const mongoose = require('mongoose');

const {Schema} = mongoose;

const companiesSchema = new Schema({
 name : {type: String},
 mobile: Number,
 email: String,
 companyName:String,
 companyLocation: String,
 companySector:String,
 companyType:String,
 companySize:String,
 companyInfo:String,
 companyWebsite: String,
 jobTitle: [String],
 YearsOfExperience:String,
 contract:String
});


const jobCompany = mongoose.model('jobCompany', companiesSchema);


exports.jobCompany = jobCompany;