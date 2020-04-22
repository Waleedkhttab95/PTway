const mongoose = require('mongoose');

const {Schema} = mongoose;

const formSchema = new Schema({
 name : {type: String},
 birthDate : {type: Date},
 gender: String,
 isSaudi: String,
 nationality: String,
 city:{ type: mongoose.Schema.Types.ObjectId, ref: 'City' }, 
 street: String,
 mobile: Number,
 email: String,
 avilableCar:String,
 company: String,
 carType:String,
 carModel:String,
 jobTitle:String,
 timeToDelivier:String,
 mobileOS: String,
 exp: String,
 ptwayMember:String
});


const formTemp = mongoose.model('formTemp', formSchema);


exports.formTemp = formTemp;