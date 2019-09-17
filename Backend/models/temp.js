const mongoose = require('mongoose');
const {Schema} = mongoose;

const temp = new Schema({
    key : {type:String},
    fullName: {type:String, required:true},
    
    study_degree:{
    type: String
    },

    gender: {
        type:String
    },
    mobile: {
        type:String
    },
    Age: {
        type:Number
    },    
  
    expirence: {
        type:String
      
    },
    
    public_Major: {
        type:String
      
    },

    languages: [{type:String}],
    skills: {type:String },
    
   
  
    about: {
        type:String
      
    },
    

});

const temp = mongoose.model('temp', temp);


exports.temp = temp;


