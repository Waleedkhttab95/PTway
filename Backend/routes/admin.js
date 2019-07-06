const { Company } = require('../models/Companies/Companies');
const { User } = require('../models/Users/User')
const { CompanyInfo } = require('../models/Companies/Company_Info')
const { Country } = require('../models/Shared/Country');
const { City } = require('../models/Shared/City');
const { getAge } = require('../models/Users/User');
const { UserInfo } = require('../models/Users/User_Info');
const { JobAd } = require('../models/Companies/Job_Ad');
const { Project } = require('../models/Companies/Project');
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

    app.get('/api/get/company/:sector?/:sp?', async (req, res) => {
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
        console.log('Test')

        const sector = req.query.sector;
        const sp = req.query.sp;

        if (sector != undefined && sp != undefined) {
            var result1 = 0;

            var result2 = await CompanyInfo.find({ 'country': req.query.country, 'city': req.query.city })
            for (var i = 0; i < result2.length; i++) {
                result1 += await Company.findOne({ '_id': result2[i].company, 'sector': sector, 'CompanySpecialist': sp }).countDocuments();
            }
            return res.status(200).json({
                result: result1
            });
        }

        if (sector != undefined) {

            var result = 0;

            var result2 = await CompanyInfo.find({ 'country': req.query.country, 'city': req.query.city }).countDocuments()
            for (var i = 0; i < result2.length; i++) {
                result += await Company.findOne({ '_id': result2[i].company, 'sector': sector }).countDocuments();
            }

            return res.status(200).json({
                result: result
            });
        }
        if (sp != undefined) {
            var result = 0;
            var result2 = await CompanyInfo.find({ 'country': req.query.country, 'city': req.query.city }).countDocuments()

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
    app.get('/api/get/UsersDepenedsOnArea', async (req, res) => {
        try {
            const country = await Country.findOne({ 'countryName': req.body.Country });
            const CountryId = country._id;
            const city = await City.findOne({ 'cityName': req.body.City });
            const CityId = city._id;

            if (!CountryId || !CityId) {
                res.status(400).send('معلومات الدولة أو المدينة خاطئة');
            }
            else {
                const Users = await UserInfo.find({ 'country': CountryId, 'city': CityId }).countDocuments();
                res.status(200).json(Users);
            }
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // Getting users depends on age
    app.get('/api/get/UsersDepenedsOnAge', async (req, res) => {
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
                    if (age == req.body.age) {
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
}