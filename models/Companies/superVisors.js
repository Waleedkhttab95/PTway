const mongoose = require('mongoose');

const {Schema} = mongoose;

const superVisorSchema = new Schema({
key : {type:String},
Name : {type:String,required:true},
email: {type:String,required:true},
position: {type:String,required:true},
phone: {type:String,required:true},
company: {type: mongoose.Schema.Types.ObjectId, ref:'companies',required:true}

});


const superVisor = mongoose.model('SuperVisor', superVisorSchema);


exports.superVisor = superVisor;