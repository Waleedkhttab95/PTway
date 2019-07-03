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

// return count of company based sector or sp

app.get('/api/get/company/:sector?/:sp?', async(req,res) =>{
    const sector = req.query.sector;
    const sp = req.query.sp;

    if(sector != undefined && sp != undefined) {
        const result = await Company.find({'sector': sector, 'CompanySpecialist': sp}).countDocuments();
        return res.status(200).json({
            result: result
        });
      } 

  if(sector != undefined) {
      const result = await Company.find({'sector': sector}).countDocuments();
      return res.status(200).json({
        result: result
    });
  }  
  if(sp != undefined) {
      const result = await Company.find({'CompanySpecialist': sp}).countDocuments();

     return res.status(200).json({
        result: result
    });
  } 


});
}