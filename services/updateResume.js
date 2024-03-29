const cron = require('node-cron');
const dateTime = require('node-datetime');
const {endDate} = require('../models/Companies/EndDates');
const {Accepted } = require('../models/Companies/Accepted');
const {UserInfo} = require('../models/Users/User_Info');
const {JobAd} = require('../models/Companies/Job_Ad');
const {Contract} = require('../models/Companies/Contract');
const {Project} = require('../models/Companies/Project');


module.exports = () =>{
    cron.schedule('0 0 * * *',async () =>{
        today = new Date();

        Date.prototype.addDays = function (startDate) {

            var date = new Date(startDate);
            date.setDate(date.getDate() + 1);

            return date;
        }

        current_today = new Date();
        current_today = current_today.addDays(today)

        var dateFormat = new Date(current_today.getFullYear(), current_today.getMonth(), current_today.getDate(),21 , 0, 0);


        const end_date = await endDate.find({'endDate' : dateFormat});

        // call lockJob function to check job locked or not

        lockJob(dateFormat)


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

    cron.schedule('0 0 * * *',async () =>{
        today = new Date();


        Date.prototype.addDays = function (startDate) {

            var date = new Date(startDate);
            date.setDate(date.getDate() + 0);

            return date;
        }

        current_today = new Date();
        current_today = current_today.addDays(today)

        var dateFormat = new Date(current_today.getFullYear(), current_today.getMonth(), current_today.getDate(),21,0,0 );
        const jobAds = await JobAd.find({'startDate' : dateFormat});


        for(var i = 0 ; i < jobAds.length ; i++) {
            startJob(jobAds[i]._id);
        }
    });


    async function  startJob(jobAd) {
        Date.prototype.addDays = function (startDate,days) {

            var date = new Date(startDate);
            date.setDate(date.getDate() + days);

            return date;
        }
        const start_day = await JobAd.findById(jobAd);
        const contract_days = await Contract.findById(start_day.contract).select('days -_id');
        if(contract_days.days == -1) return 'long term contract !';
        var Ed = new Date();

        Ed = Ed.addDays(start_day.startDate,start_day.work_days );

        const workHours = start_day.work_hours * start_day.work_days  ;


        new endDate({
             endDate: Ed,
             jobAd: jobAd,
             workHours: workHours
        }).save().then(user =>{
            return user;
        })
    }


   async function lockJob(date) {


        const lock_date = await JobAd.updateMany({'lockDate' : date},
        {

            $set: { isLock: true, }
        }
        );




    }
// 00 00 00 * * *
// 0 0 * * *
}

