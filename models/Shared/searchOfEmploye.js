const mongoose = require('mongoose');
const {Schema} = mongoose;

const searchEmpSchema = new Schema({
key : {type:String},
date:{type: Date},
city: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
public_Major: { type: mongoose.Schema.Types.ObjectId, ref: 'Public_Major', required: true },
resultOfSearch: {type: Number}
});

const searchEmp = mongoose.model('searchOfEmp', searchEmpSchema);

module.exports.searchEmp = searchEmp
