const { Company } = require('../models/Companies/Companies');
const { User, validate } = require('../models/Users/User');
const _ = require('lodash');
const bcrypt = require('bcrypt-nodejs');
const { sendVerifMail, companySendVerifMail, adminEmail} = require('../services/email/mail');
const { CompanyInfo } = require('../models/Companies/Company_Info')
const { Country } = require('../models/Shared/Country');
const { City } = require('../models/Shared/City');
const { getAge } = require('../models/Users/User');
const { UserInfo } = require('../models/Users/User_Info');
const { JobAd } = require('../models/Companies/Job_Ad');
const { Project } = require('../models/Companies/Project');
const { Candidate } = require('../models/Companies/Candidates');
const { Accepted } = require('../models/Companies/Accepted');
const { CompanySpecialist } = require('../models/Companies/CompanySpecialist');
const { Sector } = require('../models/Companies/Sector');
const admin = require('../middleware/admin');



module.exports = (app) => {


    // Active Pandding company
    app.put('/api/companyApproval',admin, async (req, res) => {

        await Company.updateOne({ '_id': req.body.id }, {
            $set: { isActive: true, }
        })
        res.status(200).send("Updated");

    })

      // deActive  company
      app.put('/api/blockCompany',admin, async (req, res) => {

        await Company.updateOne({ '_id': req.body.id }, {
            $set: { isActive: false, }
        })
        res.status(200).send("Updated");

    })



    // return Pandding company
    app.get('/api/get/companyApproval',admin,  async (req, res) => {
        const result = await Company.find({"isActive":false}).populate('CompanySpecialist')
        res.status(200).json({
            result: result
        });

    })

    app.put('/api/activealluseraccount', admin, async (req, res) => {
        console.log('Here')
        await User.updateMany({}, {

            $set: { isConfirmed: true, }
        })
        res.status(200).send("Updated");

    })

    //search of users
    app.get('/api/SearchUsersFilter',admin,(req,res) =>{
        let query = req.body;

        const users = UserInfo.find(query)
        .populate('jobCategory country city public_Major spMajor skills personal_Skills universty ')
        .populate('user','email');

        res.status(200).json({
            usersCount: users.length,
            users: users
        })
    })

      //get Users without jobCategory
      app.get('/api/SearchUsersJobCategory',async (req,res) =>{
        const users = await UserInfo.find({'jobCategory': []}).select('user -_id')
        .populate('user','email -_id');

        res.status(200).json({
            usersCount:users.length,
            users: users
        })
    })
    // make all emails lowercase
    app.put('/api/makeToLowerCase',admin,  async (req, res) => {
        const user = await User.find();

        for(var i=0 ; i <=user.length ; i++){
          var id =  user[i]._id ;

          const upd= await User.updateOne({ '_id': id }, {
                $set: { email: user[i].email.toLowerCase(), }
            })
        }

        res.status(200).send("Updated");

    })
    // return count of company based sector or sp

    // app.get('/api/get/count/company/:sector?/:sp?', async (req, res) => {
    //     const sector = req.query.sector;
    //     const sp = req.query.sp;

    //     if (sector != undefined && sp != undefined) {
    //         const result = await Company.find({ 'sector': sector, 'CompanySpecialist': sp }).countDocuments();
    //         return res.status(200).json({
    //             result: result
    //         });
    //     }

    //     if (sector != undefined) {
    //         const result = await Company.find({ 'sector': sector }).countDocuments();
    //         return res.status(200).json({
    //             result: result
    //         });
    //     }
    //     if (sp != undefined) {
    //         const result = await Company.find({ 'CompanySpecialist': sp }).countDocuments();

    //         return res.status(200).json({
    //             result: result
    //         });
    //     }


    // });

    // get everyday update
    app.get('/api/get/dailyUpdate',admin,  async (req,res) =>{
        today = new Date();
        today.setHours(0, 0, 0, 0);

        const companies = await Company.find({'sortDate': today}).populate('CompanySpecialist sector superVisor')
        const users = await User.find({'sortDate': today})
        const jobs = await JobAd.find({'sortDate': today}).populate('project').populate('city').populate('company').populate('contract')

        res.status(200).json({
            companies : companies,
            users: users,
            jobs: jobs,
            companiesCount : companies.length,
            usersCount: users.length,
            jobsCount: jobs.length
        })
    })


    // get update By Date

    app.get('/api/get/dailyUpdateByDateWeek/:date?',admin,  async (req,res) =>{
        today = new Date(req.query.date);
        today.setHours(0, 0, 0, 0);
       Lastday = new Date();
       Lastday.setDate( today.getDate() - 7 );
       Lastday.setHours(0, 0, 0, 0);




        const companies = await Company.find({'sortDate':{ "$gte": Lastday, "$lt": today } }).populate('CompanySpecialist sector superVisor')
        const users = await User.find({'sortDate': { "$gte": Lastday, "$lt": today }})
        const jobs = await JobAd.find({'sortDate': { "$gte": Lastday, "$lt": today }}).populate('project').populate('city').populate('company').populate('contract')

        res.status(200).json({
            companies : companies,
            users: users,
            jobs: jobs,
            companiesCount : companies.length,
            usersCount: users.length,
            jobsCount: jobs.length
        })
    })

    // get update By Date before month

    app.get('/api/get/dailyUpdateByDateBeforeMonth/:date?',admin,  async (req,res) =>{
        today = new Date(req.query.date);
        today.setHours(0, 0, 0, 0);
       Lastday = new Date();
       Lastday.setDate( today.getDate() - 30 );
       Lastday.setHours(0, 0, 0, 0);

        const companies = await Company.find({'sortDate':{ "$gte": Lastday, "$lt": today } }).populate('CompanySpecialist sector superVisor')
        const users = await User.find({'sortDate': { "$gte": Lastday, "$lt": today }})
        const jobs = await JobAd.find({'sortDate': { "$gte": Lastday, "$lt": today }}).populate('project').populate('city').populate('company').populate('contract')


        res.status(200).json({
            companies : companies,
            users: users,
            jobs: jobs,
            companiesCount : companies.length,
            usersCount: users.length,
            jobsCount: jobs.length
        })
    })

       // get update between 2 dates

       app.get('/api/get/dailyUpdateBybetweendates/:date?/:date2?',admin,  async (req,res) =>{
        today = new Date(req.query.date);
        today.setHours(0, 0, 0, 0);
       Lastday = new Date(req.query.date2);
       Lastday.setHours(0, 0, 0, 0);

        console.log(today)
        console.log(Lastday)

        const companies = await Company.find({'sortDate':{ "$gte": today, "$lt": Lastday } }).populate('CompanySpecialist sector superVisor')
        const users = await User.find({'sortDate': { "$gte": today, "$lt": Lastday }})
        const jobs = await JobAd.find({'sortDate': { "$gte": today, "$lt": Lastday }}).populate('project').populate('city').populate('company').populate('contract')

        res.status(200).json({
            companies : companies,
            users: users,
            jobs: jobs,
            companiesCount : companies.length,
            usersCount: users.length,
            jobsCount: jobs.length
        })
    })

    // return count of comapny based country & city

    app.get('/api/get/companyBcountry/:country?/:city?', admin, async (req, res) => {

        const result = await CompanyInfo.find({ 'country': req.query.country, 'city': req.query.city }).countDocuments();
        return res.status(200).json({
            result: result
        });
    });

    // return count of company based country & city & sector & sp
    app.get('/api/get/company/country/sector/:country?/:city?/:sector?/:sp?',admin, async (req, res) => {
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
    app.get('/api/get/allUsers_Genders_CV',admin, async (req, res) => {
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
    app.get('/api/get/UsersDepenedsOnArea/:country?/:city?',admin, async (req, res) => {
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


    // Getting users depends on  cities and major
    app.get('/api/get/UsersDepenedsOnAreaAndMajor/:country?/:city?/:major?/:spmajor?',admin, async (req, res) => {
        try {
            // recevie URL Paramaters
            const CountryId = req.query.country;

            const CityId = req.query.city;
            const major = req.query.major;
            const spmajor = req.query.spmajor;

            if (!CountryId || !CityId) {
                res.status(400).send('معلومات الدولة أو المدينة خاطئة');
            }
            else {
                const Users = await UserInfo.find({ 'country': CountryId, 'city': CityId,
                'public_Major':major, 'spMajor':spmajor }).countDocuments();
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


       // Getting users depends on major and spMajor
       app.get('/api/get/UsersDepenedsOnMajor/:major?/:spMajor?',admin, async (req, res) => {
        try {
            // recevie URL Paramaters
            const major = req.query.major;
            const spMajor = req.query.spMajor;




            if( spMajor.includes('undefined')){

                const Users = await UserInfo.find({ 'public_Major': major }).countDocuments();
                res.status(200).json({
                    users: Users
                });
            }
            else {
                const Users = await UserInfo.find({ 'public_Major': major, 'spMajor': spMajor }).countDocuments();
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
    app.get('/api/get/UsersDepenedsOnAge/:age?',admin, async (req, res) => {
        var ages = [];
        try {
            const Users = await UserInfo.find();
            if (!Users  || Users.length == 0) {
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
    app.get('/api/get/growthRate/:date?',admin, async (req, res) => {
        var today = new Date();
        var ourDate = new Date();
        ourDate = req.query.date;
        var pastDate = ourDate.getDate() - 7;
        ourDate.setDate(pastDate);
        try {
            const currentUsers = await User.find().countDocuments();
            const aWeekAgoUsers = await User.find({ "createDate": { "$gte": ourDate, "$lt": today } }).countDocuments();
            var growthRate = ((currentUsers - aWeekAgoUsers) / aWeekAgoUsers) * 100;
            res.status(200).json({
                growthRate: growthRate,
                today : Date.now()
            }
                );
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // Getting companies , companies who entered info , all job ad's , all projects
    app.get('/api/get/companiesInfo',admin, async (req, res) => {
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
    app.get('/api/get/cand/acc/:jobId?',admin, async (req, res) => {


        const candidates = await Candidate.find({ 'jobAd': req.query.jobId }).countDocuments();
        const accepted = await Accepted.find({ 'jobAd': req.query.jobId }).countDocuments();

        return res.status(200).json({
            candidates: candidates,
            accepted: accepted
        });

    });

    // return count of Projects and job offers for each company

    app.get('/api/get/projects/jobs/:companyId?',admin, async (req, res) => {

        const projects = await Project.find({ 'company': req.query.companyId }).countDocuments();
        const jobAds = await JobAd.find({ 'company': req.query.companyId }).countDocuments();


        return res.status(200).json({
            projects: projects,
            jobAds: jobAds
        });
    });


    // **********************************

    // Just when the admin wanna to search for users, we will search by id , email and first name

    // **********************************

    // By Id
    app.get('/api/get/searchUserById/:id?',admin, async (req, res) => {
        try {
            const id = req.query.id;
            const user = await User.findById(id);
            if (!user) {
                res.status(400).json('المستخدم غير مسجل');
            }
            res.status(200).send(user);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // By Email
    app.get('/api/get/searchUserByEmail/:email?',admin, async (req, res) => {
        try {
            const email = req.query.email;
            const user = await User.findOne({ 'email': email });
            if (!user) {
                res.status(400).json('المستخدم غير مسجل');
            }
            res.status(200).send(user);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // By first name
    app.get('/api/get/searchUserByName/:firstName?',admin, async (req, res) => {
        try {
            const firstName = req.query.firstName;
            const user = await User.find({ 'firstName': { '$regex': firstName, '$options': 'i' } }); // could be many users with same first name,,
            if (!user  || user.length == 0) {
                res.status(400).json('المستخدم غير مسجل');
            }
            res.status(200).send(user);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // **********************************

    // Just when the admin wanna to search for companies we will search by id , email and company name

    // **********************************

    // By Id
    app.get('/api/get/searchCompanyById/:id?',admin, async (req, res) => {
        try {
            const id = req.query.id;
            const company = await Company.findById(id).populate('CompanySpecialist');
            if (!company) {
                res.status(400).json('الشركة غير مسجلة');
            }
            res.status(200).send(company);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // By Email
    app.get('/api/get/searchCompanyByEmail/:email?',admin, async (req, res) => {
        try {
            const email = req.query.email;
            const company = await Company.findOne({ 'email': email }).populate('CompanySpecialist sector superVisor');
            if (!company) {
                return res.status(400).json('الشركة غير مسجلة');
            }

            const projects = await Project.find({'company': company._id}).countDocuments();
            const Ads = await JobAd.find({'company': company._id}).countDocuments();


            res.status(200).json({
                company: company,
                projects: projects,
                Ads:Ads
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // By companyName
    app.get('/api/get/searchCompanyByName/:companyName?',admin, async (req, res) => {
        try {
            const companyName = req.query.companyName;
            const company = await Company.find({ 'companyName': { '$regex': companyName, '$options': 'i' } })
            .populate('CompanySpecialist'); // could be many users with same companyName,,
            if (!company || company.length == 0) {
                res.status(400).json('الشركة غير مسجلة');
            }
            res.status(200).send(company);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // By sector
    app.get('/api/get/searchCompanyBySector/:sectorName?',admin, async (req, res) => {
        try {
            const sectorName = req.query.sectorName;
            // const sector = await Sector.findOne({ 'sectorName': sectorName });
            // if (!sector) {
            //     res.status(400).json('القطاع غير مسجل');
            // }
            // const sectorKey = sector.sectorName;
            const company = await Company.find({ 'sector': sectorName }).populate('CompanySpecialist'); // could be many users with same sector,,
            if (!company || company.length == 0) {
                res.status(400).json('الشركة غير مسجلة');
            }
            res.status(200).send(company);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // By CompanySpecialist
    app.get('/api/get/searchCompanyByCompanySpecialist/:CompanySp?',admin, async (req, res) => {
        try {
            const companySpecialist = req.query.CompanySp;
            const Specialist = await CompanySpecialist.findOne({ 'specialistName': companySpecialist });
            if (!Specialist) {
                res.status(400).json('التخصص غير مسجل');
            }
            const idForCompanySpecialist = Specialist._id;
            const company = await Company.find({ 'CompanySpecialist': idForCompanySpecialist }).populate('CompanySpecialist'); // could be many users with same CompanySpecialist,,
            if (!company || company.length == 0) {
                res.status(400).json('الشركة غير مسجلة');
            }
            res.status(200).send(company);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // *************************************
    // Now we do the CRUD for users
    // *************************************

    // Create Sub Admin
    app.post('/api/post/createNewSubUser',admin, async (req, res) => {
        try {
            const { error } = validate(req.body);
            if (error) return res.status(400).send(error.details[0].message);


            let user = await User.findOne({ email: req.body.email });
            if (user) return res.status(400).send('المستخدم مسجل مسبقًا');

            user = new User(_.pick(req.body, ['firstName', 'lastName', 'email', 'password']));
            const salt = await bcrypt.genSalt(10, (error, hash) => {
                if (error) res.status(400)

            });
            const hashPassword = await bcrypt.hash(user.password, salt, null, (error, hash) => {
                if (error) res.status(400)
                user.password = hash;
                user.isConfirmed = false; // initially will be false
                user.isSubAdmin = true;
                user.save();
            });

            sendVerifMail(user.firstName, user.email);

            res.status(200).send(user);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // Read
    // the concept behind the read is: search API will look for id,email and first name
    // and will return the user object , so we will use the object to show the info.
    app.get('/api/get/readUser',admin, async (req, res) => {
        try {
            const user = req.body.user; //it's array maybe single record or multiple be attention!!
            if (!user) return res.status(400).send('المستخدم غير موجود');
            res.status(200).json(user);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // Write
    // the concept behind the write is: search API will look for id,email and first name
    // and will return the user object , so we will use the object to write the info.
    app.put('/api/put/writeOnUser/:updateType?/:value?',admin, async (req, res) => {
        try {
            const user = req.body.user; //it's array maybe single record or multiple be attention!!
            if (!user) return res.status(400).send('المستخدم غير موجود');
            const id = user._id;
            const type = req.query.updateType;
            const value = req.query.value;
            if (!id || !type || !value) {
                return res.status(400).send('إحدى المعلومات ناقصة');
            }
            switch (type) {
                case 'email':
                    {
                        await User.updateOne({ '_id': id }, {
                            $set: { email: value }
                        });
                        break;
                    }

                case 'firstName':
                    {
                        await User.updateOne({ '_id': id }, {
                            $set: { firstName: value }
                        });
                        break;
                    }

                case 'lastName':
                    {
                        await User.updateOne({ '_id': id }, {
                            $set: { lastName: value }
                        });
                        break;
                    }

                case 'isConfirmed':
                    {
                        await User.updateOne({ '_id': id }, {
                            $set: { isConfirmed: value }
                        });
                        break;
                    }
                default:
                    {
                        res.status(400).send('اختيار خاطئ')
                        break;
                    }
            }
            res.status(200).send('تم التغيير بنجاح');
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // Delete
    // the concept behind the delete is: search API will look for id,email and first name
    // and will return the user object , so we will use the object to delete the info.
    app.delete('/api/delete/deleteUser',admin, async (req, res) => {
        try {
            const user = req.body.user; //it's object be attention!!
            if (!user) return res.status(400).send('المستخدم غير موجود');
            const id = user._id;
            if (!id) {
                return res.status(400).send('إحدى المعلومات ناقصة');
            }
            await User.deleteOne({ '_id': id });
            res.status(200).send('تم حذف المستخدم');
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // *************************************
    // Now we do the CRUD for companies
    // *************************************

    // Create
    app.post('/api/post/createNewComapny',admin, async (req, res) => {
        try {
            let company = await Company.findOne({ email: req.body.email });
            if (company) return res.status(400).send('الشركة مسجلة مسبقًا');
            if (!req.body.companyName || !req.body.email || !req.body.password || !req.body.sector || !req.body.CompanySpecialist || !req.body.isActive ) {
                return res.status(400).send('إحدى المعلومات ناقصة');
            }
            company = new Company({
                companyName: req.body.companyName,
                email: req.body.email,
                password: req.body.password,
                sector: req.body.sector,
                CompanySpecialist: req.body.CompanySpecialist,
                isActive: req.body.isActive
            }).save()
                .then(async result => {
                    const salt = await bcrypt.genSalt(10, (error, hash) => {
                        if (error) res.status(400)

                    });
                    const hashPassword = await bcrypt.hash(company.password, salt, null, (error, hash) => {
                        if (error) res.status(400)
                        company.password = hash;
                        company.save();
                    });


                    company.isConfirmed = false; // initially will be false
                    companySendVerifMail(company.companyName, company.email);


                    const token = company.generateAuthToken();

                    res.status(200).send('تم إضافة الشركة بنجاح');
                })
                    .catch(error => {
                        return res.status(400).send('خطأ في المعلومات');
                    })
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // Read
    // the concept behind the read is: search API will look for id,email and companyName
    // and will return the company object , so we will use the object to show the info.
    app.get('/api/get/readComapny',admin, async (req, res) => {
        try {
            const company = req.body.company; //it's object be attention!!
            if (!company) return res.status(400).send('الشركة غير موجودة');
            res.status(200).json(company);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // Write
    // the concept behind the write is: search API will look for id,email and companyName
    // and will return the company object , so we will use the object to write the info.
    app.put('/api/put/writeOnCompany/:updateType?/:value?',admin, async (req, res) => {
        try {
            const company = req.body.company; //it's object be attention!!
            if (!company) return res.status(400).send('الشركة غير موجودة');
            const id = company._id;
            const type = req.query.updateType;
            const value = req.query.value;
            if (!id || !type || !value) {
                return res.status(400).send('إحدى المعلومات ناقصة');
            }
            switch (type) {
                case 'email':
                    {
                        await Company.updateOne({ '_id': id }, {
                            $set: { email: value }
                        });
                        break;
                    }

                case 'companyName':
                    {
                        await Company.updateOne({ '_id': id }, {
                            $set: { companyName: value }
                        });
                        break;
                    }

                case 'isActive':
                    {
                        await Company.updateOne({ '_id': id }, {
                            $set: { isActive: value }
                        });
                        break;
                    }

                case 'isConfirmed':
                    {
                        await Company.updateOne({ '_id': id }, {
                            $set: { isConfirmed: value }
                        });
                        break;
                    }

                case 'sector':
                    {
                        // const sector i was trying to get sector key from sector name , and i wanna to check whether the data is array or one object in find()
                        // const wholesector = Sector.findOne({ 'sectorName': value });
                        // const sectorKey = wholesector._id;
                        await Company.updateOne({ '_id': id }, {
                            $set: { sector: value }
                        });
                        break;
                    }

                case 'CompanySpecialist':
                    {
                        // const companySp = CompanySpecialist.findOne({ 'specialistName': value });
                        // const companySpId = companySp._id;

                        await Company.updateOne({ '_id': id }, {
                            $set: { CompanySpecialist: value }
                        });
                        break;
                    }


                default:
                    {
                        res.status(400).send('اختيار خاطئ')
                        break;
                    }
            }
            res.status(200).send('تم التغيير بنجاح');
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // Delete
    // the concept behind the delete is: search API will look for id,email and companyName
    // and will return the Company object , so we will use the object to delete the info.
    app.delete('/api/delete/deleteCompany',admin, async (req, res) => {
        try {
            const company = req.body.company; //it's object be attention!!
            if (!company) return res.status(400).send('الشركة غير موجودة');
            const id = company._id;
            if (!id) {
                return res.status(400).send('إحدى المعلومات ناقصة');
            }
            await Company.deleteOne({ '_id': id });
            res.status(200).send('تم حذف الشركة');
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // the concept is when the admin search for a user either by id , email or First name
    // he will have the option to send a message so we will got an object from search API's
    app.get('/api/get/messagesToUser',admin, async (req, res) => {
        try {
            const user = req.body.user; //it's object be attention!!
            if (!user) return res.status(400).send('المستخدم غير موجود');
            const email = user.email;
            const name = user.firstName;
            const subject = req.body.subject;
            const message = req.body.message;
            adminEmail(subject , message , email , name);
            res.status(200).send('تم إرسال الرسالة');
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // the concept is when the admin search for a company either by id , email or company name
    // he will have the option to send a message so we will got an object from search API's
    app.get('/api/get/messagesToCompany',admin, async (req, res) => {
        try {
            const company = req.body.company; //it's object be attention!!
            if (!company) return res.status(400).send('الشركة غير موجودة');
            const email = company.email;
            const name = company.companyName;
            const subject = req.body.subject;
            const message = req.body.message;
            adminEmail(subject , message , email , name);
            res.status(200).send('تم إرسال الرسالة');
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });



    // return All users
    app.get('/api/get/allUsers',admin, async (req,res) =>{
        const users = await User.find();
        if(!users  || users.length == 0) return res.status(401).send('not users exist .')

        return res.status(200).json({
            users : users
        })
    });


       // return All users Info
       app.get('/api/get/allUsersInfo',admin, async (req,res) =>{
           console.log('Test')
        const users = await UserInfo.find();
        if(!users || users.length == 0) return res.status(401).send('not users exist .')

        return res.status(200).json({
            users : users
        })
    });

    // Confirm user
    app.put('/api/confitm/user/:id?',admin, async (req,res) =>{
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
     app.put('/api/block/user/:id?',admin, async (req,res) =>{
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
       app.put('/api/confitm/company/:id?',admin, async (req,res) =>{
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
     app.put('/api/block/company/:id?',admin, async (req,res) =>{
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

    // post job ad by admin

    app.post('/api/post/jobAd',async (req,res) =>{
        var lock_date = lockDate();
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        new JobAd({
            createDate: Date.now(),
            sortDate : today,
            company: req.body._id,
            contract: req.body.contract,
            project: req.body.project,
            job_Name: req.body.job_Name,
            lockDate: lock_date,
            descreption: req.body.descreption,
            job_skills: req.body.job_skills,
            country: req.body.country,
            city: req.body.city,
            public_Major: req.body.public_Major,
            spicifc_Major: req.body.spMajor,
            universty: req.body.universty,
            startDate: req.body.startDate,
            work_hours: req.body.work_hours,
            work_days: req.body.work_days,
            salary: req.body.salary,
            gender: req.body.gender,
            personal_Skills: req.body.personal_Skills,
            required_Number: req.body.required_Number
        }).save()
            .then(result => {
               send_jobs(req.body , result._id)
                res.send(result)
            }).catch((e)=>{
                console.log(e)
                res.status(401).send('error',e)
            });

    })

  admin, async function send_jobs(body, jobAdId) {

         const country=body.country;
         const city= body.city;
         const gender= body.gender;
         const public_Major = body.public_Major;
         const spMajor = body.spMajor;
         const universty = body.universty;
         const jobAd =jobAdId;

   if(gender == "both") {
       const result = await UserInfo
       .find({ country: country,city: city,public_Major: public_Major,
    spMajor: spMajor,universty: universty })
       .select("user");

       result.forEach(async function(r) {
           //here write email code
           // r.user is giving the id
           const user  = await User.findById(r.user);
           if(user)
           {
               sendJobOffer(user.email , user.firstName);
           }

           new Notification({
            content : jobAd,
            user : r.user,
            isRead: false,
            date: Date.now(),
            apply: false
           }).save();
        })

        res.status(200).send("Done .");
   }
   else {
       const result = await UserInfo
       .find({ country: country,city: city
       ,gender: gender ,public_Major: public_Major,
       spMajor: spMajor,universty: universty})
       .select("user");

       result.forEach(async function(r) {
           const user  = await User.findById(r.user);
           if(user)
           {
               sendJobOffer(user.email , user.firstName);
           }
           new Notification({
            content : jobAd,
            user : r.user,
            isRead: false,
            date: Date.now(),
            apply: false
           }).save();
        })


   }


    }

       // Function to Calculate Lock Date

       function lockDate() {
        Date.prototype.addDays = function (startDate,days) {

            var date = new Date(startDate);
            date.setDate(date.getDate() + days);

            return date;
        }

        var Ld = new Date();
        var today = Date.now();

        Ld = Ld.addDays(today,14);

        return Ld;
    }


}