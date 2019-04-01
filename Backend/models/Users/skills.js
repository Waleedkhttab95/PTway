const mongoose = require('mongoose');

const {Schema} = mongoose;

const SkillsSchema = new Schema({
key : {type:String},
skillName : String
});


const Skills = mongoose.model('Skills', SkillsSchema);


exports.Skills = Skills;
