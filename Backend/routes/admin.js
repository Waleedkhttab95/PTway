const {Company} = require('../models/Companies/Companies');
const {User} = require('../models/Users/User')
module.exports = (app) =>{

app.put('/api/companyApproval',async(req,res)=>{

    await Company.updateOne({'_id': req.body.id },{
     $set : { isActive : true,}
    })
    res.status(200).send("Updated");

})

app.put('/api/activealluseraccount',async(req,res)=>{
    console.log('Here')
    await User.updateMany({ },{
    
     $set : { isConfirmed : true,}
    })
    res.status(200).send("Updated");

})
}