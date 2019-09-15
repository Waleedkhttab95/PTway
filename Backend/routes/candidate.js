const { Candidate } = require('../models/Companies/Candidates');
const { User } = require('../models/Users/User');
const auth = require('../middleware/auth');
const { Notification } = require('../models/Notification');

module.exports = (app) => {

  // apply Job
  app.post('/api/postBodyC', auth, async (req, res) => {
    const user = await Candidate.findOne({ 'candidateName': req.user._id, 'jobAd': req.body.jobAd });
    if (!user) {
      new Candidate({
        candidateName: req.user._id,
        jobAd: req.body.jobAd
      }).save()
        .then(result => { res.send(result); })

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

  app.get('/api/getCandites', auth, async (req, res) => {
    const result = await Candidate.find();
    res.send(result);
  });

  app.get('/api/getOneCandi', auth, async (req, res) => {
    const usernames = [];
    const Bresult = await Candidate.find({ 'jobAd': req.query.jobAd })
      .sort({ 'createDate': 1 })
    if (!Bresult) return res.status(401).send('notFound')
    const candidateNames = Bresult.map(x => x.candidateName);
    const ids = Bresult.map(x => x._id);

    for (var i = 0; i < candidateNames.length; i++) {
      const users = await User.findById(candidateNames[i]).select("firstName lastName -_id")
      usernames.push(users);
    }

    const username = usernames.map(x => x.firstName + ' ' + x.lastName);

    res.status(200).json({
      candidateNames: candidateNames,
      username: username,
      id: ids,
      count: Bresult.length
    });




  });
}//endofapp