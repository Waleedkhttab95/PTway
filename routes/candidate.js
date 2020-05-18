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
      console.log('here')
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

 
  app.get('/api/getOneCandi', auth, async (req, res) => {
    const usernames = [];
    var pageNo = parseInt(req.query.pageNo)
    var size = 5
    var query = {}

    if(pageNo < 0 || pageNo === 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response)
  }

  query.skip = size * (pageNo - 1)
  query.limit = size

  const candidatesCount = await Candidate.count({  'jobAd': req.query.jobAd }); // get pages count
  var totalPages = Math.ceil(candidatesCount / size)

    const Bresult = await Candidate.find({ 'jobAd': req.query.jobAd },{},query)
      .sort({ 'createDate': 1 })
      .populate('candidateName')
    if (!Bresult) return res.status(401).send('notFound')
    // const candidateNames = Bresult.map(x => x.candidateName);
    // const ids = Bresult.map(x => x._id);

    // for (var i = 0; i < candidateNames.length; i++) {
    //   const users = await User.findById(candidateNames[i]).select("firstName lastName -_id")
    //   usernames.push(users);
    // }

    // const username = usernames.map(x => x.firstName + ' ' + x.lastName);

    res.status(200).json({
     Bresult,totalPages
    });




  });
}//endofapp