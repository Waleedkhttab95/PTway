const {UserInfo} = require('../models/Users/User_Info');
const {CompanyInfo} = require('../models/Companies/Company_Info');
const {Notification} = require('../models/Notification');
const {endDate} = require('../models/Companies/EndDates');
const {JobAd} = require('../models/Companies/Job_Ad');
const {Contract} = require('../models/Companies/Contract');
const auth = require('../middleware/auth');
const dateTime = require('node-datetime');
const {Accepted } = require('../models/Companies/Accepted');
const {Candidate} = require('../models/Companies/Candidates');



module.exports = (app) =>{

    app.post('/api/send/Jobad', async (req,res) =>{

             // const job_skills = req.body.job_skills;
              const country=req.body.country;
              const city= req.body.city;
              const gender= req.body.gender;
              // const  personal_Skills= req.body.personal_Skills;
              const public_Major = req.body.public_Major;
              const jobAd = req.body.jobAd;

        const result = await UserInfo
        .find({ country: country,city: city
        ,gender: gender,public_Major: public_Major })
        .select("user");

        result.forEach(function(r) {
           new Notification({
            content : jobAd,
            user : r.user,
            isRead: false
           }).save();
        })

        res.status(200).send("Done .");
    });

   


    // Get all notifications content ..

    app.get('/api/get/notifications',auth, async (req,res) =>{
        const userId = req.query.userId;
       var result = [];
        const notifications = await Notification
        .find({user: req.user._id})
        .select('-user');
        for(var i = 0 ; i<notifications.length ; i++){
             result.push(await JobAd
            .find({_id : notifications[i].content})
            .select("job_Name _id") 
             )
        }
       
      
        res.status(200).json({
            result: result
        });
    });

    // Get all notifications ..

    app.get('/api/get/allnotifications',auth, async (req,res) =>{
      //  const userId = req.query.userId;

        const notifications = await Notification
        .find({user: req.user._id})
        .select('-user');


        res.send(notifications);
    });
   
    // Get spicific notification ..

    app.get('/api/get/notification',auth, async (req,res) =>{
        const id = req.query.id;
          
        const job= await JobAd.findById(id);
         if(!job) return res.status(401).send('not found');
         const countres = await Country.findById(job.country);
         const cites = await City.findById(job.city);
         const contract = await Contract.findById(job.contract);
         const public_Major = await public_Major.findById(job.public_Major);
         const result = await Notification.findOne({'content' : id , 'user' : req.user._id});

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
    })

    // Get last 4 notification

    app.get('/api/get/lastnotifcation',auth, async (req,res) =>{
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
    })

    // unread notificatoion
    app.get('/api/get/unread/notification',auth, async (req,res) =>{
        //const userId = req.query.userId;
        const count = await Notification
        .find({"user": req.user._id, "isRead": false}).countDocuments();
        res.status(200).json({
            count: count
        })

    })

    // Start Job

    app.post('/api/start/job', async (req, res) => {

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
        
    })
    app.post('/api/end/job', async (req,res) =>{
     

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

    })
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
 
 
}