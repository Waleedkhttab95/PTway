const mongoose = require('mongoose');

const {Schema} = mongoose;

const candidatesSchema = new Schema({

 candidateName : {type: mongoose.Schema.Types.ObjectId, ref:'users'},
 jobAd : {type: mongoose.Schema.Types.ObjectId, ref:'JobAds'},
 appointment :{type: mongoose.Schema.Types.ObjectId, ref:'appointments'},
 appointmentStatus:{type: Boolean},
 appointmentReason:{type:String},
 createDate: {type: Date },
 isRead: {type: Boolean, default: false},
 isFavorite: {type: Boolean, default: false},
 status:{type:String, default: 'waiting'},
 key : {type:String},
});


const Candidate = mongoose.model('Candidates', candidatesSchema);


exports.Candidate = Candidate;
