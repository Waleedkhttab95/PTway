const { Sector } = require('../models/Companies/Sector');
const { CompanySpecialist } = require('../models/Companies/CompanySpecialist');
const { Project } = require('../models/Companies/Project');
const { JobAd } = require('../models/Companies/Job_Ad');
const auth = require('../middleware/auth');
const { Contract } = require('../models/Companies/Contract');
const {UserInfo} = require('../models/Users/User_Info');
const { Accepted } = require('../models/Companies/Accepted');
const { City } = require('../models/Shared/City');
const { Country } = require('../models/Shared/Country');
const { Notification } = require('../models/Notification');
const { JobAd_admin } = require('../models/admin/Job_Ad_Admin');
const { Project_Admin } = require('../models/admin/Project_Admin');
const { Company } = require('../models/Companies/Companies');
const { Candidate } = require('../models/Companies/Candidates');
const { User } = require('../models/Users/User');
const { sendJobOffer } = require('../services/email/mail');



module.exports = (app) => {

    // Add Company Sector
    app.post('/api/postsector', (req, res) => {

        new Sector({
            sectorName: req.body.sectorName
        }).save()
            .then(result => {
                res.send(result);
            })

    });

    // add company specialization

    app.post('/api/postspec', (req, res) => {

        new CompanySpecialist({
            specialistName: req.body.specialistName
        }).save()
            .then(result => {
                res.send(result);
            })

    });

    // Get all sectors

    app.get('/api/getsectors', async (req, res) => {
        const sectors = await Sector.find();
        res.status(200).send(sectors);
    });

    // get all companies
    app.get('/api/get/allCompanies', async (req, res) => {
        const companies = await Company.find();
        res.status(200).send(companies);
    });
    // Get all specializzation

    app.get('/api/getspec', async (req, res) => {
        const Cs = await CompanySpecialist.find();
        res.status(200).send(Cs);
    });

    // get company sector type
    app.get('/api/get/companytype', auth, async (req, res) => {
        const type = await Company.findById(req.user._id);
        res.status(200).send(type.sector);
    });

    // POST PROJECT
    app.post('/api/postproject', auth, (req, res) => {
        new Project({
            createDate: Date.now(),
            projectName: req.body.projectName,
            projectDescription: req.body.projectDescription,
            company: req.user._id

        }).save()
            .then(result => {
                res.send(result);
            });

        new Project_Admin({
            createDate: Date.now(),
            projectName: req.body.projectName,
            projectDescription: req.body.projectDescription,
            company: req.user._id

        }).save()
            .then(result => {
                console.log(result)
            });
    });

    // counts of projects, Jobs
    app.get('/api/get/counts', auth, async (req, res) => {

        var projectsCounts = 0;
        projectsCounts += await Project.find({ 'company': req.user._id }).countDocuments();
        const projects = await Project.find({ 'company': req.user._id });
        var jobCounts = 0;
        var accCount = 0;

        for (var i = 0; i < projects.length; i++) {
            jobCounts += await JobAd.find({ 'project': projects[i] }).countDocuments();
            jobs = await JobAd.find({ 'project': projects[i] }).select('_id');

            for (var j = 0; j < jobs.length; j++)

                accCount += await Accepted.find({ 'jobAd': jobs[j] }).countDocuments();

        }

        res.status(200).json({
            projects: projectsCounts,
            jobs: jobCounts,
            acceptes: accCount
        })

    })

    // POST job Ad
    app.post('/api/postjob', auth, (req, res) => {
        var lock_date = lockDate();
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        new JobAd({
            createDate: Date.now(),
            sortDate : today,
            company: req.user._id,
            contract: req.body.contract,
            project: req.body.project,
            job_Name: req.body.job_Name,
            lockDate: lock_date,
            descreption: req.body.descreption,
            job_skills: req.body.job_skills,
            country: req.body.country,
            city: req.body.city,
            public_Major: req.body.public_Major,
            startDate: req.body.startDate,
            work_hours: req.body.work_hours,
            work_days: req.body.work_days,
            salary: req.body.salary,
            gender: req.body.gender,
            personal_Skills: req.body.personal_Skills,
            required_Number: req.body.required_Number
        }).save()
            .then(result => {
                send_JobAds(result)
                res.send(result)
            }).catch((e)=>{
                res.status(500).send('error',e)
            });



        new JobAd_admin({
            createDate: Date.now(),
            company: req.user._id,
            contract: req.body.contract,
            project: req.body.project,
            job_Name: req.body.job_Name,
            lockDate: lock_date,
            descreption: req.body.descreption,
            job_skills: req.body.job_skills,
            country: req.body.country,
            city: req.body.city,
            public_Major: req.body.public_Major,
            startDate: req.body.startDate,
            work_hours: req.body.work_hours,
            work_days: req.body.work_days,
            salary: req.body.salary,
            gender: req.body.gender,
            personal_Skills: req.body.personal_Skills,
            required_Number: req.body.required_Number
        }).save()
            .then(result => {
                console.log(result)
            });

    });

    // Get all projects for company

    app.get('/api/getprojects', auth, async (req, res) => {
        const id = req.user._id;
        const JobAdsCount= [];


        var pageNo = parseInt(req.query.pageNo)
        var size = 3
        var query = {}

        if(pageNo < 0 || pageNo === 0) {
            response = {"error" : true,"message" : "invalid page number, should start with 1"};
            return res.json(response)
      }

      query.skip = size * (pageNo - 1)
      query.limit = size

      const projectCount = await Project.count({ company: id });
      var totalPages = Math.ceil(projectCount / size)
      const proj = await Project.find({ company: id },{},query)
      .sort({ date: -1 });

        for(var i =0 ; i < proj.length ; i++){
            var jobAds = await JobAd.find({'project': proj[i]}).countDocuments()
            JobAdsCount.push(jobAds);

        }
        res.status(200).json({
            proj,JobAdsCount,totalPages
        });
    });

    // Get all projects for company by id

    app.get('/api/getprojectsById/:_id?', auth, async (req, res) => {
        const id = req.query._id;
        const proj = await Project.find({ company: id });


        res.status(200).send(proj)
    });

     // Get all projects

     app.get('/api/getAllProjects', auth, async (req, res) => {
        const projects = await Project.find();
        res.send(projects);
    })

    // Get all jobs Ad

    app.get('/api/getjobs', auth, async (req, res) => {
        const jobs = await JobAd.find().populate('project').populate('city').populate('company').populate('contract')
        .sort({createDate: -1});
        res.send(jobs);
    })


    // get all jobs for company by email
    app.get('/api/getjobsByEmail/:email?', auth, async (req, res) => {
        console.log( req.query.email)
        const company = await Company.findOne({'email': req.query.email})
        if (!company) return res.status(402).send('not found company')

        const jobs = await JobAd.find({'company': company._id}).populate('company').populate('city')
        .sort({createDate: -1});
        if (!jobs) return res.status(402).send('not found Jobs for this company')

        res.status(200).send(jobs);
    })


    //Get project by Id
    app.get('/api/getproject', auth, async (req, res) => {
        const id = req.query.id;
        const project = await Project.findById(id);
        if (!project) return res.status(401).send('not found');
        res.status(200).json({
            projectName: project.projectName,
            projectDescription: project.projectDescription,
            id: project._d
        });
    });


    //Get job by Id
    app.get('/api/getjob', auth, async (req, res) => {
        const id = req.query.id;
        var apply_job = false;
        const job = await JobAd.findById(id);
        if (!job) return res.status(401).send('not found');
        const countres = await Country.findById(job.country);
        const cites = await City.findById(job.city);
        const contract = await Contract.findById(job.contract);
        //  const public_Major = await publicMajor.findById(job.public_Major);
        const result = await Notification.findOne({ 'content': id, 'user': req.user._id });

        if (result.isRead == false) {
            result.isRead = true;
            result.save();
        }


        if (result.apply != undefined) {

            apply_job = result.apply
        }

        if(job.gender == 'both') {
            job.gender = 'ذكر و انثى'
        }

        res.status(200).json({
            job: job,
            Country: countres.countryName,
            City: cites.cityName,
            Contract: contract.contractName,
            contractType: contract.days,
            apply: apply_job
            //   public_Major: public_Major.majorName
        });
    });

    // get job preview ( for companies)
    app.get('/api/preview/getjob', auth, async (req, res) => {
        const id = req.query.id;

        const job = await JobAd.findById(id);
        if (!job) return res.status(401).send('not found');
        const countres = await Country.findById(job.country);
        const cites = await City.findById(job.city);
        const contract = await Contract.findById(job.contract);
        //  const public_Major = await publicMajor.findById(job.public_Major);
        const result = await Notification.findOne({ 'content': id, 'user': req.user._id });


        res.status(200).json({
            job: job,
            Country: countres.countryName,
            City: cites.cityName,
            Contract: contract.contractName,
            contractType: contract.days,
            // public_Major: public_Major.majorName
        });
    });

    //Get requierd number of staff
    app.get('/api/getjob/req', auth, async (req, res) => {
        const id = req.query.id;

        const job = await JobAd.findById(id);
        if (!job) return res.status(401).send('not found');
        const req_number = job.required_Number;
        const limit_number = job.limit_Number;


        res.status(200).json({
            req_n: req_number,
            limit_n: limit_number
        });
    });

    // get job by project
    app.get('/api/get/jobs', auth, async (req, res) => {
        const id = req.query.projectid;

        const job = await JobAd.find({ project: id });


        res.status(200).json({
          job
        });
    });
    //Post Contract

    app.post('/api/postcontract', (req, res) => {

        new Contract({
            contractName: req.body.contractName,
            days: req.body.days
        }).save()
            .then(result => {
                res.send(result);
            })

    });

    // Get all contracts

    app.get('/api/getcontracts', async (req, res) => {
        const contractt = await Contract.find()
        res.send(contractt);
    })


    //DELETE project by Id
    app.delete('/api/deleteproject', auth, async (req, res) => {
        const id = req.query.id;
        const jobAds = await JobAd.find({'project': id});

        for(let i = 0 ; i< jobAds.length ; i++){
            await JobAd.findByIdAndDelete(jobAds[i]._id)
        }
        const project = await Project.findByIdAndDelete(id);
        if (!project) return res.status(401).send('not found');
        res.send(project);
    });

    //DELETE job by Id
    app.delete('/api/deletejob', auth, async (req, res) => {
        const id = req.query.id;
        const job = await JobAd.findByIdAndDelete(id);

        delete_Noti(id);


        res.send("Deleted !");
    });

    // Lock Job
    app.put('/api/lockJob/:id?', auth, async (req,res) =>{
        const job = await JobAd.updateOne({'_id': req.query.id}, {
            $set: {
                isLock: true
            }
        }).then(result =>{
            res.status(200).send("Done .");
        });
    })

      // UnLock Job
      app.put('/api/unlockJob/:id?', auth, async (req,res) =>{
        const job = await JobAd.updateOne({'_id': req.query.id}, {
            $set: {
                isLock: false
            }
        }).then(result =>{
            res.status(200).send("Done .");
        });
    })


    app.put('/api/put/project', auth, async (req, res) => {
        const projectt = await Project.updateOne({ '_id': req.body.id }, {
            $set: {
                projectName: req.body.projectName,
                projectDescription: req.body.projectDescription,
            }

        }).then(result =>{
            res.status(200).send("Done .");
        });
    });


    // Edit JobAd

    app.put('/api/put/job', auth, async (req, res) => {
        const jobAd = await JobAd.updateOne({ '_id': req.body.id }, {
            $set: {
                contract: req.body.contract,
                job_Name: req.body.job_Name,
                country: req.body.country,
                city: req.body.city,
                work_hours: req.body.work_hours,
                work_days: req.body.work_days,
                salary: req.body.salary,
                descreption: req.body.descreption,
                required_Number: req.body.required_Number,
                startDate: req.body.startDate


            }

        }).then(result =>{
            res.status(200).send("Done .");
        });
    });

    app.get('/api/getCompanyAds',auth, async (req, res) => {
        var jobObjArray = [];
        try {
            if(!req.user._id) return res.status(400).send('الشركة غير مسجلة');
            const advs = await JobAd.find({ 'company': req.user._id}).sort({createDate: -1}).limit(3)
            .populate('project')
            console.log(advs[0].project)
            // if (!advs || advs.length == 0) return res.status(400).send('لا تملك الشركة  إعلانات');
            // advs.forEach(async (adv , index) => {
            //     const advId = adv._id;
            //     const candidates = await Candidate.find({ 'jobAd': advId }).countDocuments();
            //     const obj = { advId, candidates };
            //     jobObjArray[index] = obj;
            //     // console.log(index);
            // });
            for (let index = 0; index < advs.length; index++) {
                const advId = advs[index]._id;
                const advName= advs[index].job_Name;
                const jobCreate = advs[index].createDate;
                const projectName = advs[index].project.projectName;
                const candidates = await Candidate.find({ 'jobAd': advId }).countDocuments();
                const obj = { advId,advName, candidates,projectName,jobCreate };
                jobObjArray.push(obj);
            }
            return res.status(200).send(jobObjArray);
        }
        catch (e) {
            return res.status(400).send(e);
        }
    });

    // get all sub accounts
    app.get('/api/getSubUsers',auth, async (req,res) =>{
        const users = await User.find({'isSubUser': true , 'company':req.user._id})
        if(!users) return res.status(401).send('not found any users !')

        res.status(200).json({
            users : users
        })
    })

    // enable and desable subAccount
    app.put('/api/switchSubUser',auth, async (req,res) =>{
        const user = await User.findById(req.query.userId);
        if (!user) return res.status(401).status('user not found')

        user.isSubUser = !user.isSubUser;
        user.save();

        res.status(200).send('Updated !')
    })

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
        Ld.setHours(0, 0, 0, 0);
        return Ld;
    }



   async function send_JobAds(jobAd) {

             const country=jobAd.country;
             const city= jobAd.city;
             const gender= jobAd.gender;
             // const  personal_Skills= jobAd.personal_Skills;
             // const public_Major = jobAd.public_Major; public_Major :'5caf4ffbffec65462ec2a09a' , '5caf5618ffec65462ec2a0ce'

             const jobAdId = jobAd._id;

       if(gender == "both") {
           const result = await UserInfo
           .find({ country: country,city: city})
           .select("user");

           result.forEach(async function(r) {
               //here write email code
               // r.user is giving the id
               const user  = await User.findById(r.user);
               if(user)
               {
                   if(user.email_notification == true && user.isConfirmed == true)
                   sendJobOffer(user.email , user.firstName, jobAdId);
               }

               new Notification({
                content : jobAdId,
                user : r.user,
                isRead: false,
                date: Date.now(),
                apply: false
               }).save();
            })

       }
       else {
           const result = await UserInfo
           .find({ country: country,city: city
           ,gender: gender})
           .select("user");

           result.forEach(async function(r) {
               const user  = await User.findById(r.user);
               if(user)
               {

                if(user.email_notification == true && user.isConfirmed == true)
                   sendJobOffer(user.email , user.firstName, jobAdId);
            }
               new Notification({
                content : jobAdId,
                user : r.user,
                isRead: false,
                date: Date.now(),
                apply: false
               }).save();
            })

       }





    }


    async function delete_Noti(id) {
        const notifications= await Notification.deleteMany({'content': id})


    }

}
