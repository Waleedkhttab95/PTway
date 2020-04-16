const mongoose = require('mongoose');

const {Schema} = mongoose;

const candidatesSchema = new Schema({

 candidateName : {type: mongoose.Schema.Types.ObjectId, ref:'users'},
 jobAd : {type: mongoose.Schema.Types.ObjectId, ref:'Job_Ad'},
 createDate: {type: Date },
 key : {type:String},
});


const Candidate = mongoose.model('Candidates', candidatesSchema);


exports.Candidate = Candidate;
