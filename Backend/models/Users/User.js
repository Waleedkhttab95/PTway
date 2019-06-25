const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const {Schema} = mongoose;

const userSchema = new Schema({
key : {type:String},
googleId: String,
firstName: {
    type:String,
    required: true,
    maxlength: 50,
    unique: false
},
lastName: {
    type:String,
    required: true,
    maxlength: 50,
    unique: false
},
email: {
    type:String,
    required: true,
    minlength: 5,
    maxlength: 255
},
password: {
    type:String,
    required: true,
    unique: false
},
createDate: {type: Date , default:Date.now()},

isAdmin:Boolean,
isConfirmed:{
    type:Boolean
   
}
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, keys.jwtKey);

    return token;
}
const User = mongoose.model('users', userSchema);


function validateUser(user) {
    const Schema = {
        firstName: Joi.string().max(50).required(),
        lastName: Joi.string().max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().required(),
    };

    return Joi.validate(user, Schema);
}

// function generateAuthTokenForEmails(userId){
//     jwt.sign(
//         // payload as json:
//         {userId}, // to know which user
//         // secret
//         keys.jwtKey,
//         // expire in hour
//         {expiresIn : '1d'},
//         //callback
//         (err , token) => {
//             if (err) return err;

//             // response
//             console.log(token);
//             return token;
//         } 
//     )
// }


exports.User = User;
exports.validate = validateUser;
// exports.emailAuth = generateAuthTokenForEmails;
