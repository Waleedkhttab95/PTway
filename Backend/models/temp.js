const mongoose = require('mongoose');
const {Schema} = mongoose;

const temp = new Schema({
    city : {type:String},
    fullName: {type:String},
    email: {type: String},
    study_degree:{
    type: String
    },
    universty:{
        type: String
        },
        major:{
            type: String
            },        

    gender: {
        type:String
    },
    mobile: {
        type:String
    }, 
      
    nationalty: {
        type:String
      
    },
    birthDate: {
        type:Date
      
    },
    courses: [{type:String}],
    skills: [{type:String }],
    
   
    about: {
        type:String
      
    },
    

});

const tempD = mongoose.model('temp', temp);


exports.temp = tempD;


