const {Company} = require('../models/Companies/Companies');
const {User} = require('../models/Users/User')
const {CompanyInfo} = require('../models/Companies/Company_Info')
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

// return count of comapny based country & city

app.get('/api/get/companyBcountry/:country?/:city?', async(req,res) =>{

    const result = await CompanyInfo.find({'country': req.query.country , 'city': req.query.city}).countDocuments();
    return res.status(200).json({
        result: result
    });
});

// return count of company based country & city & sector & sp
app.get('/api/get/company/country/sector/:country?/:city?/:sector?/:sp?', async(req,res) =>{
    console.log('Test')

    const sector = req.query.sector;
    const sp = req.query.sp;

    if(sector != undefined && sp != undefined) {
        var result1 = 0;

        var result2 = await CompanyInfo.find({'country': req.query.country , 'city': req.query.city})
        for(var i =0 ; i<result2.length ; i++) {
             result1 += await Company.findOne({'_id':result2[i].company, 'sector': sector, 'CompanySpecialist': sp}).countDocuments();
        }
        return res.status(200).json({
            result: result1
        });
      } 

  if(sector != undefined) {

    var result = 0;

    var result2 = await CompanyInfo.find({'country': req.query.country , 'city': req.query.city}).countDocuments()
    for(var i =0 ; i<result2.length ; i++) {
         result += await Company.findOne({'_id':result2[i].company,'sector': sector}).countDocuments();
    }

      return res.status(200).json({
        result: result
    });
  }  
  if(sp != undefined) {
    var result = 0;
    var result2 = await CompanyInfo.find({'country': req.query.country , 'city': req.query.city}).countDocuments()

    for(var i =0 ; i<result2.length ; i++) {
         result += await Company.findOne({'_id':result2[i].company,'CompanySpecialist': sp}).countDocuments();

    }
     return res.status(200).json({
        result: result
    });
  } 
});
}