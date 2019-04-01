const mongoose = require('mongoose');

const {Schema} = mongoose;

const personalSkillsSchema = new Schema({
key : {type:String},
skillName : String
});


const PersonalSkills = mongoose.model('PersonalSkills', personalSkillsSchema);


exports.PersonalSkills = PersonalSkills;
