const mongoose = require('mongoose');

const {Schema} = mongoose;

const notificationSchema = new Schema({
 key : {type:String},
 content : {type: mongoose.Schema.Types.ObjectId, ref:'Job_Ad'},
 user : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
 date :  {type: Date , default:new Date()},
 isRead: {type: Boolean, default: false},
 apply: {type: Boolean}
});


const Notification = mongoose.model('Notifications', notificationSchema);


exports.Notification = Notification;