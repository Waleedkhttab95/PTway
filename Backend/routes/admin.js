const { Company } = require('../models/Companies/Companies');
const { User } = require('../models/Users/User')
const { CompanyInfo } = require('../models/Companies/Company_Info')
const { Country } = require('../models/Shared/Country');
const { City } = require('../models/Shared/City');
const { getAge } = require('../models/Users/User');
const { UserInfo } = require('../models/Users/User_Info');
const { JobAd } = require('../models/Companies/Job_Ad');
const { Project } = require('../models/Companies/Project');
const {Candidate} = require('../models/Companies/Candidates');
const {Accepted} =  require('../models/Companies/Accepted');
module.exports = (app) => {

    app.put('/api/companyApproval', async (req, res) => {

        await Company.updateOne({ '_id': req.body.id }, {
            $set: { isActive: true, }
        })
        res.status(200).send("Updated");

    })

    app.put('/api/activealluseraccount', async (req, res) => {
        console.log('Here')
        await User.updateMany({}, {

            $set: { isConfirmed: true, }
        })
        res.status(200).send("Updated");

    })

    // return count of company based sector or sp

    app.get('/api/get/count/company/:sector?/:sp?', async (req, res) => {
        const sector = req.query.sector;
        const sp = req.query.sp;

        if (sector != undefined && sp != undefined) {
            const result = await Company.find({ 'sector': sector, 'CompanySpecialist': sp }).countDocuments();
            return res.status(200).json({
                result: result
            });
        }

        if (sector != undefined) {
            const result = await Company.find({ 'sector': sector }).countDocuments();
            return res.status(200).json({
                result: result
            });
        }
        if (sp != undefined) {
            const result = await Company.find({ 'CompanySpecialist': sp }).countDocuments();

            return res.status(200).json({
                result: result
            });
        }


    });

    // return count of comapny based country & city

    app.get('/api/get/companyBcountry/:country?/:city?', async (req, res) => {

        const result = await CompanyInfo.find({ 'country': req.query.country, 'city': req.query.city }).countDocuments();
        return res.status(200).json({
            result: result
        });
    });

    // return count of company based country & city & sector & sp
    app.get('/api/get/company/country/sector/:country?/:city?/:sector?/:sp?', async (req, res) => {
        const sector = req.query.sector;
        const sp = req.query.sp;

        if (sector != undefined && sp != undefined) {

            var result1 = 0;

            var result2 = await CompanyInfo.find({ 'country': req.query.country, 'city': req.query.city })
            for (var i = 0; i < result2.length; i++) {
                result1 += await Company.findOne({ '_id': result2[i].company, 'sector': sector, 'CompanySpecialist': sp })
            }
            return res.status(200).json({
                result: result1
            });
        }

        if (sector != undefined) {

            var result = 0;

            var result2 = await CompanyInfo.find({ 'country': req.query.country, 'city': req.query.city })
            for (var i = 0; i < result2.length; i++) {
                result += await Company.findOne({ '_id': result2[i].company, 'sector': sector }).countDocuments();
            }

            return res.status(200).json({
                result: result
            });
        }
        if (sp != undefined) {

            var result = 0;
            var result2 = await CompanyInfo.find({ 'country': req.query.country, 'city': req.query.city })

            for (var i = 0; i < result2.length; i++) {

                result += await Company.findOne({ '_id': result2[i].company, 'CompanySpecialist': sp }).countDocuments();

            }
            return res.status(200).json({
                result: result
            });
        }
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

    // Getting companies , companies who entered info , all job ad's , all projects
    app.get('/api/get/companiesInfo', async (req, res) => {
        try {
            const companies = await Company.find().countDocuments();
            const companiesInfo = await CompanyInfo.find().countDocuments();
            const jobs = await JobAd.find().countDocuments();
            const projects = await Project.find().countDocuments();

            res.status(200).json({
                NumberOfCompanies: companies,
                NumberOfCompaniesWithInfo: companiesInfo,
                NumberOfJobs: jobs,
                NumberOfProjects: projects
            });
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

    // return count of Projects and job offers for each company

    app.get('/api/get/projects/jobs/:companyId?', async (req,res) =>{

        const projects = await Project.find({'company': req.query.companyId}).countDocuments();
        const jobAds = await JobAd.find({'company': req.query.companyId}).countDocuments();

        
        return res.status(200).json({
            projects: projects,
            jobAds:jobAds
        });
    })

    // return All users
    app.get('/api/get/allUsers', async (req,res) =>{
        const users = await User.find();
        if(!users) return res.status(401).send('not users exist .')

        return res.status(200).json({
            users : users
        })
    });


       // return All users Info
       app.get('/api/get/allUsersInfo', async (req,res) =>{
           console.log('Test')
        const users = await UserInfo.find();
        if(!users) return res.status(401).send('not users exist .')

        return res.status(200).json({
            users : users
        })
    });

    // Confirm user 
    app.put('/api/confitm/user/:id?', async (req,res) =>{
        const user = await User.updateOne({'_id': req.query.id},
        {
            $set: {
                isConfirmed: true
            }
        });
        if (!user) return res.status(401).send('user not exist');

       return res.status(200).json({
            message: "Successful !"
        });
        
    });

     // Block user 
     app.put('/api/block/user/:id?', async (req,res) =>{
        const user = await User.updateOne({'_id': req.query.id},
        {
            $set: {
                isConfirmed: false
            }
        });
        if (!user) return res.status(401).send('user not exist');

       return res.status(200).json({
            message: "Successful !"
        });
        
    });


       // Confirm Company 
       app.put('/api/confitm/company/:id?', async (req,res) =>{
        const company = await Company.updateOne({'_id': req.query.id},
        {
            $set: {
                isConfirmed: true
            }
        });
        if (!company) return res.status(401).send('company not exist');

       return res.status(200).json({
            message: "Successful !"
        });
        
    });

     // Block company 
     app.put('/api/block/company/:id?', async (req,res) =>{
        const company = await Company.updateOne({'_id': req.query.id},
        {
            $set: {
                isConfirmed: false
            }
        });
        if (!company) return res.status(401).send('user not exist');

       return res.status(200).json({
            message: "Successful !"
        });
        
    });
}