const mongoose = require('mongoose');

const {Schema} = mongoose;

const deliveryCompanySchema = new Schema({
 name : {type: String},
 company : {type: String},
 supervisor: String,
 supervisorNumber: String,
 email: String,
 city:{ type: mongoose.Schema.Types.ObjectId, ref: 'City' }, 
 jobType: [String],
 requiredStaff: Number,
 description: String
});


const deliveryCompany = mongoose.model('deliveryCompany', deliveryCompanySchema);


exports.deliveryCompany = deliveryCompany;