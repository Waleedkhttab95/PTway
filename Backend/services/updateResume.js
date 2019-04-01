const cron = require('node-cron');
const dateTime = require('node-datetime');
const {endDate} = require('../models/Companies/EndDates');
const {Accepted } = require('../models/Companies/Accepted');
const {UserInfo} = require('../models/Users/User_Info');
const {JobAd} = require('../models/Companies/Job_Ad');
const {Project} = require('../models/Companies/Project');


module.exports = () =>{
    cron.schedule('0 0 * * *',async () =>{
        
        today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //As January is 0.
        var yyyy = today.getFullYear();
        
        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;
        var dd=mm+'/'+dd+'/'+yyyy ;
  
        const end_date = await endDate.find({'endDate' : dd});
        
        if(end_date) {
            for(var i = 0 ; i< end_date.length ; i++){
                const users = await Accepted.find({'jobAd' : end_date[i].jobAd}).select('acceptedName -_id');
                const project = await JobAd.findById(end_date[i].jobAd);
                const companies = await Project.findById(project.project);
                for(var j =0 ; j < users.length ; j++) {
                    const current_user = await UserInfo.findOne({'user' : users[j].acceptedName});
                    
                     current_user.work_Hours = end_date[i].workHours;
                     current_user.companies = companies.company;
                     current_user.save();
                }
             
    
            }
        }
  
    });
// 00 00 00 * * *
// 0 0 * * *
}
   