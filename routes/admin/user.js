const { Company } = require('../../models/Companies/Companies');
const { User } = require('../../models/Users/User')
const { CompanyInfo } = require('../../models/Companies/Company_Info')
const { Country } = require('../../models/Shared/Country');
const { City } = require('../../models/Shared/City');
const { getAge } = require('../../models/Users/User');
const { UserInfo } = require('../../models/Users/User_Info');
const { JobAd } = require('../../models/Companies/Job_Ad');
const { Project } = require('../../models/Companies/Project');
const {Candidate} = require('../../models/Companies/Candidates');
const {Accepted} =  require('../../models/Companies/Accepted');

module.exports = (app) => {


    app.put('/api/activealluseraccount', async (req, res) => {
        console.log('Here')
        await User.updateMany({}, {

            $set: { isConfirmed: true, }
        })
        res.status(200).send("Updated");

    });

    // Getting all useres , male useres , female useres , users with CV
    app.get('/api/get/allUsers_Genders_CV', async (req, res) => {
        try {
            const Users = await User.find().countDocuments();
            const Males = await UserInfo.find({ 'gender': 'ذكر' }).countDocuments();
            const Females = await UserInfo.find({ 'gender': 'انثى' }).countDocuments();
            const UsersHaveCV = await UserInfo.find().countDocuments();
            res.status(200).json({
                NumberOfUsers: Users,
                NumberOfMaleUsers: Males,
                NumberOfFemaleUsers: Females,
                NumberOfUsersWithCV: UsersHaveCV
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // Getting users depends on countries and cities
    app.get('/api/get/UsersDepenedsOnArea/:country?/:city?', async (req, res) => {
        try {
           // recevie URL Paramaters
            const CountryId = req.query.country;
            
            const CityId = req.query.city;

            if (!CountryId || !CityId) {
                res.status(400).send('معلومات الدولة أو المدينة خاطئة');
            }
            else {
                const Users = await UserInfo.find({ 'country': CountryId, 'city': CityId }).countDocuments();
                res.status(200).json({
                    users: Users
                });
            }
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // Getting users depends on age
    app.get('/api/get/UsersDepenedsOnAge/:age?', async (req, res) => {
        var ages = [];
        try {
            const Users = await UserInfo.find();
            if (!Users) {
                return res.status(400).send(' لا توجد معلومات');
            }
            else {
                for (let index = 0; index < Users.length; index++) {
                    var DOB = Users[index].birthDate;
                    var age = getAge(DOB);
                    if (age == req.query.age) {
                        ages.push(age);
                    }
                }
                res.status(200).json(ages.length);
            }
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // Getting the growth rate
    app.get('/api/get/growthRate', async (req, res) => {
        var today = new Date();
        var ourDate = new Date();
        var pastDate = ourDate.getDate() - 7;
        ourDate.setDate(pastDate);
        try {
            const currentUsers = await User.find().countDocuments();
            const aWeekAgoUsers = await User.find({ "createDate": { "$gte": ourDate, "$lt": today } }).countDocuments();
            var growthRate = ((currentUsers - aWeekAgoUsers) / aWeekAgoUsers) * 100;
            res.status(200).json(growthRate);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // return Candidties and Accepted users for Job offer
    app.get('/api/get/cand/acc/:jobId?', async (req,res) =>{
        

        const candidates = await Candidate.find({'jobAd' : req.query.jobId}).countDocuments();
        const accepted = await Accepted.find({'jobAd' : req.query.jobId}).countDocuments();

        return res.status(200).json({
            candidates: candidates,
            accepted:accepted
        });

    });


}
