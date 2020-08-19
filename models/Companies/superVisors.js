const mongoose = require('mongoose');

const {Schema} = mongoose;

const superVisorSchema = new Schema({
key : {type:String},
Name : {type:String,required:true},
position: {type:String,required:true},
phone: {type:String,required:true}

});


const superVisor = mongoose.model('SuperVisor', superVisorSchema);


exports.superVisor = superVisor;