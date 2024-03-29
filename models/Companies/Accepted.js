const mongoose = require('mongoose');

const {Schema} = mongoose;

const AcceptedSchema = new Schema({

    jobAd : {type: mongoose.Schema.Types.ObjectId, ref:'Job_Ad'},
    acceptedName :{type: mongoose.Schema.Types.ObjectId, ref:'users'},
    createDate: {type: Date },
    key : {type:String}
});


const Accepted = mongoose.model('Accepted', AcceptedSchema);


exports.Accepted = Accepted;
