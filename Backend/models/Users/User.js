const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const { Schema } = mongoose;

const userSchema = new Schema({
    key: { type: String },
    googleId: String,
    firstName: {
        type: String,
        required: true,
        maxlength: 50,
        unique: false
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 50,
        unique: false
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    createDate: { type: Date, default: Date.now() },

    isAdmin: Boolean,
    isSubAdmin: Boolean,
    isConfirmed: {
        type: Boolean

    },
    isSubUser: {
        type: Boolean
    },
    company:{type: mongoose.Schema.Types.ObjectId, ref:'companies'},

});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin,isSubAdmin: this.isSubAdmin }, keys.jwtKey);

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

function getAge(DOB) {
    // the DOB come in 1998-02-15T21:00:00.000Z format so let's reformat it as M/D/Y
    var dob = JSON.stringify(DOB);
    var DOBsplitted = dob.split('T')[0];
    var year = DOBsplitted.split('-')[0];
    var month = DOBsplitted.split('-')[1];
    var day = DOBsplitted.split('-')[2];
    var DOBjoined = month + '/' + day + '/' + year;
    var today = new Date();
    var birthDate = new Date(DOBjoined);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    return age;
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
exports.getAge = getAge;
// exports.emailAuth = generateAuthTokenForEmails;
