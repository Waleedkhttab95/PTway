const mongoose = require('mongoose');

const {Schema} = mongoose;

const jobLessSchema = new Schema({
 name : {type: String},
 gender: String,
 mobile: Number,
 email: String,
 lastCompany:String,
 city:{ type: mongoose.Schema.Types.ObjectId, ref: 'City' }, 
 lastJobPosition: String,
 jobTitle:[String],
 Experience:String,
 YearsOfExperience:String,
 WorkingOutOfCity:String,
 Linkedin: String,
 Cv: String
});


const jobLess = mongoose.model('jobLess', jobLessSchema);


exports.jobLess = jobLess;