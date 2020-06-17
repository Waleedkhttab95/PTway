const mongoose = require('mongoose');

const {Schema} = mongoose;

const candidatesSchema = new Schema({

 candidateName : {type: mongoose.Schema.Types.ObjectId, ref:'users'},
 jobAd : {type: mongoose.Schema.Types.ObjectId, ref:'JobAds'},
 createDate: {type: Date },
 isRead: {type: Boolean, default: false},
 key : {type:String},
});


const Candidate = mongoose.model('Candidates', candidatesSchema);


exports.Candidate = Candidate;
