const mongoose = require('mongoose');

const {Schema} = mongoose;

const jobCategorySchema = new Schema({
key : {type:String},
jobName : String,


});


const jobCategory = mongoose.model('jobCategory', jobCategorySchema);


exports.jobCategory = jobCategory;