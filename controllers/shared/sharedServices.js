const {Accepted } = require('../../models/Companies/Accepted');
const {Candidate} = require('../../models/Companies/Candidates');
const { CompanyInfo } = require('../../models/Companies/Company_Info');
const _ = require('lodash');
const { contactEmail } = require('../../services/email/mail');
const {searchEmp} = require('../../models/Shared/searchOfEmploye');
const { Company } = require('../../models/Companies/Companies');
const company = require('../../routes/admin/company');
const {UserInfo} = require('../../models/Users/User_Info');
const {Notification} = require('../../models/Notification');
const {endDate} = require('../../models/Companies/EndDates');
const {JobAd} = require('../../models/Companies/Job_Ad');
const {Contract} = require('../../models/Companies/Contract');



exports.getNotifications = async (req,res) =>{
    const userId = req.query.userId;
   var result = [];
    var temp ;
    var pageNo = parseInt(req.query.pageNo)
    var size = 10
    var query = {}

    if(pageNo < 0 || pageNo === 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response)
  }

  query.skip = size * (pageNo - 1)
  query.limit = size;


  const notificationsCounts = await Notification
  .count({user: req.user._id})
  var totalPages = Math.ceil(notificationsCounts / size)

  const notifications = await Notification
  .find({user: req.user._id},{},query)
  .select('-user')
  .sort({'date' : -1});

    result = await filterNotification(notifications);

     while(notifications.length != result.length){
        const notifications = await Notification
        .find({user: req.user._id},{},query)
        .select('-user')
        .sort({'date' : -1});

        result = await filterNotification(notifications);

     }

    res.status(200).json({
        result: result,
        totalPages
    });
}

exports.getAllNotifications =  async (req,res) =>{
    //  const userId = req.query.userId;

      const notifications = await Notification
      .find({user: req.user._id})
      .select('-user');


      res.send(notifications);
  }

exports.getNotification =   async (req,res) =>{
    const id = req.query.id;

    const job= await JobAd.findById(id);
     if(!job) return res.status(401).send('not found');
     const countres = await Country.findById(job.country);
     const cites = await City.findById(job.city);
     const contract = await Contract.findById(job.contract);
     const public_Major = await public_Major.findById(job.public_Major);
     const result = await Notification.findOne({'content' : id , 'user' : req.user._id});
    debugger;
     if(result.isRead == false){
         result.isRead = true;
         result.save();
     }
     res.status(200).json({
         job: job,
         Country: countres.countryName,
         City: cites.cityName,
         Contract: contract.contractName,
         public_Major : public_Major.majorName
     });
}

exports.getLastNotification =  async (req,res) =>{
    //const userId = req.query.userId;

    const lastNotification = await Notification
    .find({user : req.user._id}).sort({date: -1}).limit(5);

    const ids = lastNotification.map(x=> x.content);
    const contents = [];
    for(var i = 0 ; i < lastNotification.length ; i++) {
        const content = await JobAd.findById( lastNotification[i].content).select("job_Name -_id");
        contents.push(content);
      }

    res.status(200).json({
        content: contents,
        id: ids
    });
}

exports.unReadNotifications = async (req,res) =>{
    //const userId = req.query.userId;
    const count = await Notification
    .find({"user": req.user._id, "isRead": false}).countDocuments();
    res.status(200).json({
        count: count
    })

}

exports.deleteNot= async (req,res) =>{
    const id = req.query.id;
    const notifications= await Notification.find({'content': id})
    for(var i = 0 ; notifications.length > i ; i++){
        const notiDelete= await Notification.findOneAndDelete({'content': notifications[i].content})

    }

    if(!notifications) return res.status(400).send('not found');
    res.send("Deleted !");
}

exports.startJob = async (req, res) => {

    Date.prototype.addDays = function (startDate,days) {

        var date = new Date(startDate);
        date.setDate(date.getDate() + days);

        return date;
    }
    const start_day = await JobAd.findById(req.body.jobAd_id);

    const contract_days = await Contract.findById(start_day.contract).select('days -_id');
    if(contract_days.days == -1) return res.status(200).send('long term contract !');
    var Ed = new Date();

    Ed = Ed.addDays(start_day.startDate,start_day.work_days);

    const workHours = start_day.work_hours * start_day.work_days ;


    new endDate({
         endDate: Ed,
         jobAd: req.body.jobAd_id,
         workHours: workHours
    }).save().then(user =>{
        res.send(user);
    })

}

exports.endJob = async (req,res) =>{


    Date.daysBetween = function( date1, date2 ) {
        //Get 1 day in milliseconds
        var one_day=1000*60*60*24;

        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();

        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;

        // Convert back to days and return
        return Math.round(difference_ms/one_day);
      }
      const start_day = await JobAd.findById(req.body.jobAd_id);
      const update_limit_number = await JobAd.updateOne({ '_id': req.body.jobAd_id },
      {
          $set: {
            limit_Number : start_day.limit_Number-1
          }
      }
  )
      //Set the two dates
      var startD  = new Date(start_day.startDate);
      var calcDate = new Date(startD.getFullYear() , startD.getMonth()-1, startD.getDate());
      var today= new Date();

      var endDate =  Date.daysBetween(calcDate, today);

      const workHours = start_day.work_hours * endDate ;

      const current_user = await UserInfo.findOne({'user' : req.body.user});

      const update_user = await UserInfo.updateOne({'user' : req.body.user},
      {
        $set: {
            work_Hours : current_user.work_Hours + workHours
        }
    }
      );

      const deleteAccepted = await Accepted.findOneAndDelete({'acceptedName' : req.body.user, 'jobAd': req.body.jobAd_id});
      res.status(200).send("updated !");

}


exports.contactUs = async(req,res)=>{
    contactEmail(req.body.message,req.body.email,req.body.name)
    res.status(200).send('successful !')
}

exports.searchEmp =  async(req,res) =>{
    const city = req.query.city;
    const public_Major = req.query.public_Major;
    if(!city || !public_Major) return res.status(404).send("not valid params !");

    //query count of users //
    let query = {
        "city": city,
        "public_Major" : public_Major
    }
    const result = await UserInfo.find(query).countDocuments();

    // store results to DB
    new searchEmp({
        date: Date.now(),
        city: city,
        public_Major: public_Major,
        result: result
    }).save()
    .then(r =>{
        res.status(201).json({
            result: result
        })
    })

}
    // function to filter and delete notification jobs

    async function filterNotification (notifications) {

        let result = []
        for(var i = 0 ; i<notifications.length ; i++){
            var jobAd = await JobAd
            .findOne({_id : notifications[i].content})
            .sort({ date: -1 })
            .populate('company contract')
            .select("job_Name _id salary startDate work_hours work_days company isLock contract")
            if(jobAd) {
                var companyImage = await CompanyInfo
                .findOne({'company': jobAd.company._id})
                .select("imagePath")
                var status = notifications[i].apply
                var img= "";

                if (companyImage != null)
                img= companyImage.imagePath;

                temp = new Object({
                    compName: jobAd.company.companyName,
                    imagePath: img,
                    jobAd : _.pick(jobAd,['job_Name','salary','startDate','work_hours','contract','work_days','_id', 'isLock']),
                    status : status,
                    isRead: notifications[i].isRead
                });

                 result.push( temp  )
            }

            else {
                const deleteNot = await Notification.findByIdAndDelete(notifications[i]._id)
            }



        }
        return result;

    }


function todayDate(){
        today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //As January is 0.
        var yyyy = today.getFullYear();

        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;
        var dd=mm+'/'+dd+'/'+yyyy ;
        return dd;
    }
