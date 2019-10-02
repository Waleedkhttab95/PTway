const mongoose = require('mongoose');

const {Schema} = mongoose;

const tempExpSchema = new Schema({
temp :{type: mongoose.Schema.Types.ObjectId, ref:'temp'} ,
expName : String,
from : String,
date : Date,
expName2 : String,
from2 : String,
date2 : Date,
expName3 : String,
from3 : String,
date3 : Date,

});


const tempExp = mongoose.model('tempExp', tempExpSchema);


exports.tempExp = tempExp;