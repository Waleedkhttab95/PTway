const { Candidate } = require('../models/Companies/Candidates');
const { User } = require('../models/Users/User');
const auth = require('../middleware/auth');
const { Notification } = require('../models/Notification');
const { UserInfo } = require('../models/Users/User_Info');


module.exports = (app) => {

  // apply Job
  app.post('/api/postBodyC', auth, async (req, res) => {
    const user = await Candidate.findOne({ 'candidateName': req.user._id, 'jobAd': req.body.jobAd });
    const info = await UserInfo.findOne({'user' : req.user._id});


    if (!user) {
      new Candidate({
        candidateName: req.user._id,
        jobAd: req.body.jobAd,
        createDate:Date.now()
      }).save()
        .then(result => {
            info.aplled_jobs +=1;
            info.save();
          res.send(result); })

      const result = await Notification.findOne({ 'content': req.body.jobAd, 'user': req.user._id });

      if (result.apply == false) {
        result.apply = true;
        result.save();
      }
    }
    else {
      return res.status(200).send('this user already exist')
    }

  });


  app.get('/api/getOneCandi',auth, async (req, res) => {
    var Bresult = [];
    var pageNo = parseInt(req.query.pageNo)
    var size = 10
    var query = {}

    if(pageNo < 0 || pageNo === 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response)
  }

  query.skip = size * (pageNo - 1)
  query.limit = size

  const candidatesCount = await Candidate.count({  'jobAd': req.query.jobAd }); // get pages count
  var totalPages = Math.ceil(candidatesCount / size)

    const users = await Candidate.find({ 'jobAd': req.query.jobAd },{},query)
      .sort({ 'createDate': 1 })
      .populate('candidateName','firstName lastName')
      .populate('jobAd','job_Name')
    if (!users) return res.status(401).send('notFound')



    for(let i = 0 ; i < users.length ; i++){
      const userInfo =  await UserInfo.findOne({'user': users[i].candidateName})
      .select('imagePath -_id')
      const obj = {
        user: users[i],
        image: userInfo
      }
      Bresult.push(obj)
    }


    res.status(200).json({
     Bresult:Bresult,
     totalPages
    });




  });

  app.put('/api/rejectCandidate',auth, async (req,res) =>{
    const userId = req.body.id;

    if(!userId) return status(401).send("invalid Paramaters");
    const add =await Candidate.findById(userId)
    console.log(userId)

    const candidate = await Candidate.updateOne({ '_id': userId }, {
      $set: {
          status: "rejected"
      }
  });

  res.status(201).send('Updated status')

  });
}//endofapp