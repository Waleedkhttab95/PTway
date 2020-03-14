const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const {Schema} = mongoose;

const companySchema = new Schema({
key : {type:String},
companyName: {
    type:String,
    required: true,
    maxlength: 50,
    unique: false
},
company:{type: mongoose.Schema.Types.ObjectId, ref:'companies'},
email: {
    type:String,
    required: true,
    minlength: 5,
    maxlength: 255
},
password: {
    type:String,
    required: true,
    unique: false
},
sector: {type: String},
CompanySpecialist: {type: mongoose.Schema.Types.ObjectId, ref:'Specialists'},
isActive : {
    type: Boolean , 
    default: true
},
createDate: {type: Date},
sortDate: {type: Date},
isConfirmed:{
    type:Boolean
    
}
});

companySchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, keys.jwtKey);

    return token;
}
companySchema.index({ sortDate: 1 }); 
const Company = mongoose.model('companies', companySchema);

// function validateCompany(company) {
//     const Schema = {
//         companyName: Joi.string().max(50).required(),
//         email: Joi.string().min(5).max(255).required().email(),
//         password: Joi.string().min(5).required(),
//     };

//     return Joi.validate(company, Schema);
// }
exports.Company = Company;
//exports.validateCompany = validateCompany;