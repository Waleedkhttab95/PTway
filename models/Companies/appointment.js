const mongoose = require('mongoose');
const { number } = require('joi');

const {Schema} = mongoose;

const appointmentSchema = new Schema({

    company : {type: mongoose.Schema.Types.ObjectId, ref:'company', required:true},
    jobAd : {type: mongoose.Schema.Types.ObjectId, ref:'JobAds', required:true},
    createDate: {type: Date , required:true},
    days: {type:[String],  required:true},
    startDate: {type: Date , required:true},
    endDate: {type: Date, required:true },
    startHour: {type: Number, required:true },
    endHour: {type: Number , required:true},
    appointmentLeadName: {type: String},
    appointmentLeadNumber: {type:Number},
    country:  {type: mongoose.Schema.Types.ObjectId, ref:'country', required:true},
    city:  {type: mongoose.Schema.Types.ObjectId, ref:'city', required:true},
    Address: {type:String, required:true},
    GoogleMapAddress: {type:String}
});


const appointment = mongoose.model('appointments', appointmentSchema);


exports.appointment = appointment;