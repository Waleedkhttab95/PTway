const { Candidate } = require('../../models/Companies/Candidates');
const { User } = require('../../models/Users/User');
const { Notification } = require('../../models/Notification');
const { UserInfo } = require('../../models/Users/User_Info');
const { result } = require('lodash');
const { JobAd } = require('../../models/Companies/Job_Ad');
const {appointment} = require('../../models/Companies/appointment');
const { reminderEmail } = require('../../services/email/mail');

             // Candidates Controllers \\


// add Candidate
exports.postCandidate = async (req, res) => {
    const user = await Candidate.findOne({ 'candidateName': req.user._id, 'jobAd': req.body.jobAd });
    const info = await UserInfo.findOne({ 'user': req.user._id });


    if (!user) {
      new Candidate({
        candidateName: req.user._id,
        jobAd: req.body.jobAd,
        createDate: Date.now()
      }).save()
        .then(async result => {
          try{
            info.aplled_jobs += 1;
            info.save();
            // add 1 candidate to Job candidates value //
            const jobAd = await JobAd.findById(req.body.jobAd).populate('company');

            if(jobAd.candidatesNumber == 50 || jobAd.candidatesNumber == 100 ){
                // send reminder email

                reminderEmail(jobAd.company.email, jobAd.candidatesNumber , jobAd._id,jobAd.job_Name)
            }

            jobAd.candidatesNumber++;
            jobAd.save();
            // change apply status of this job offer for user //
            const jobNotification = await Notification.findOne({ 'content': req.body.jobAd, 'user': req.user._id });

            if (jobNotification.apply == false) {
              jobNotification.apply = true;
              jobNotification.save();
            }

            res.send(result);
          }catch(error){
            console.log(error)
          }

        });
     }

    else {
      return res.status(200).send('this user already exist')
    }

  }

  // get candidates
  exports.getCandidates =  async (req, res) => {

    // return candidates data
    var Bresult = [];
    var pageNo = parseInt(req.query.pageNo)
    var size = 10
    var query = {}
    const sortDate = req.query.sort;

    if (pageNo < 0 || pageNo === 0) {
      response = { "error": true, "message": "invalid page number, should start with 1" };
      return res.json(response)
    }

    query.skip = size * (pageNo - 1)
    query.limit = size

    const candidatesCount = await Candidate.count({ 'jobAd': req.query.jobAd }); // get pages count
    var totalPages = Math.ceil(candidatesCount / size)

    const users = await Candidate.find({ 'jobAd': req.query.jobAd }, {}, query)
      .sort({ 'createDate': sortDate })
      .populate('candidateName', 'firstName lastName')
      .populate('jobAd', 'job_Name')
    if (!users) return res.status(401).send('notFound')



    for (let i = 0; i < users.length; i++) {
      const userInfo = await UserInfo.findOne({ 'user': users[i].candidateName })
        .select('imagePath -_id')
      const obj = {
        user: users[i],
        image: userInfo
      }
      Bresult.push(obj)
    }

    let rejectedUsersCount = 0;
    let acceptableUsersCount = 0;
    let waitingUsersCount = 0;
    let allCandidatesCount = 0;
    if (pageNo == 1) {
      // return count of rejected , Acceptable users
      const usersArray = await Candidate.find({ 'jobAd': req.query.jobAd });
      rejectedUsersCount = usersArray.filter(item => item.status === 'rejected');
      acceptableUsersCount = usersArray.filter(item => item.status === 'Accepted');
      waitingUsersCount = usersArray.filter(item => item.isRead === false);
      allCandidatesCount = usersArray.length;

    }


    res.status(200).json({
      Bresult: Bresult,
      totalPages,
      rejectedUsersCount: rejectedUsersCount.length,
      acceptableUsersCount: acceptableUsersCount.length,
      waitingUsersCount: waitingUsersCount.length,
      allCandidatesCount: allCandidatesCount
    });




  }

  // reject candidate
  exports.rejectCandidate = async (req, res) => {
    const userId = req.body.id;

    if (!userId) return status(401).send("invalid Paramaters");


    const candidate = await Candidate.updateOne({ '_id': userId }, {
      $set: {
        status: "rejected"
      }
    });

    res.status(201).send('Updated status')

  }

  // add to fav list
  exports.addToFavList = async (req, res) => {
    const userId = req.body.id;

    if (!userId) return status(401).send("invalid Paramaters");


    const candidate = await Candidate.updateOne({ '_id': userId }, {
      $set: {
        isFavorite: true
      }
    });

    res.status(201).send('Updated status')

  }

  // get fav list
  exports.getFavList = async (req, res) => {
    const jobAd = req.query.jobAd;
    const pageNo = req.query.pageNo;
    const filterType = req.query.filter;
    const sort = req.query.sort;
    let result;
    if (!jobAd) return status(404).send("need job Id")
    if (!pageNo) return status(404).send("need pageNo")
    if (!filterType) return status(404).send("need filter type")

    if (filterType === 'fav') {
       result = await getCandidates(pageNo, jobAd, {
        'jobAd': jobAd,
        'isFavorite': true
      },sort);
      console.log(result)
    }
    else if (filterType === 'reject') {
       result = await getCandidates(pageNo, jobAd, {
        'jobAd': jobAd,
        'status': "rejected"
      },sort);

    }
    else if (filterType === 'accept') {
       result = await getCandidates(pageNo, jobAd, {
        'jobAd': jobAd,
        'status': "Accepted"
      },sort);
    }
    else{
      return res.status(401).send("invalid filter type")
    }


    res.status(200).json({
      Bresult: result.Bresult,
      totalPages: result.totalPages
    });
  }

  // send job appointment
  exports.sendAppointment = async (req,res) =>{
    try{
      new appointment({
        company: req.user._id,
        jobAd : req.body.jobAd,
        createDate: Date.now(),
        days:  req.body.days,
        startDate:  req.body.startDate,
        endDate:  req.body.endDate,
        startHour:  req.body.startHour,
        endHour:  req.body.endHour,
        appointmentLeadName:  req.body.leadName,
        appointmentLeadNumber:  req.body.leadNumber,
        country: req.body.country,
        city:   req.body.city,
        Address:  req.body.address,
        GoogleMapAddress: req.body.googleMapAddress
      }).save()
      .then(result =>{
        console.log(result)
        // send email
        res.status(200).send("complete !")
      })
    } catch(err){
      console.log(err)
      return res.status(400).send(err)

    }
  }
  async function getCandidates(pageNo, jobAd, queryFind,sort) {
    var Bresult = [];
    var pageNo = parseInt(pageNo)
    var size = 10
    var query = {}



    if (pageNo < 0 || pageNo === 0) {
      response = { "error": true, "message": "invalid page number, should start with 1" };
      return res.json(response)
    }

    query.skip = size * (pageNo - 1)
    query.limit = size

    const candidatesCount = await Candidate.count({ 'jobAd': jobAd }); // get pages count
    var totalPages = Math.ceil(candidatesCount / size)

    const users = await Candidate.find(queryFind, {}, query)
      .sort({ 'createDate': sort })
      .populate('candidateName', 'firstName lastName')
      .populate('jobAd', 'job_Name')
    if (!users) return res.status(401).send('notFound')


    for (let i = 0; i < users.length; i++) {
      const userInfo = await UserInfo.findOne({ 'user': users[i].candidateName })
        .select('imagePath -_id')
      const obj = {
        user: users[i],
        image: userInfo
      }
      Bresult.push(obj)
    }


    return {
      Bresult: Bresult,
      totalPages: totalPages
    }



  }
