const mongoose = require('mongoose');

const {Schema} = mongoose;

const project_AdminSchema = new Schema({
key : {type:String},
company:{type: mongoose.Schema.Types.ObjectId, ref:'companies'},
projectName : {type: String , required:true},
projectDescription : {type:String, required: true},
createDate: {type: Date , default:Date.now()},
status : {type: Boolean , default: true},
date : {type: Date , default: new Date()}
});


const Project_Admin = mongoose.model('Projects_Admin', project_AdminSchema);


exports.Project_Admin = Project_Admin;