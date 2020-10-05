
const auth = require('../middleware/auth');
const companyProccessControllers = require('../controllers/company/CompanyProccess')




module.exports = (app, client) => {



    // get company sector type
    app.get('/api/get/companytype', auth,companyProccessControllers.getCompanyType);

    // POST PROJECT
    app.post('/api/postproject', auth, companyProccessControllers.postProject);

    // counts of projects, Jobs
    app.get('/api/get/counts', auth,companyProccessControllers.getCounts)

    // POST job Ad
    app.post('/api/postjob', auth, companyProccessControllers.postJob);

    // Get all projects for company

    app.get('/api/getprojects', auth, companyProccessControllers.getProjects);

    // Get all projects for company by id

    app.get('/api/getprojectsById/:_id?', auth,companyProccessControllers.getProjectBuId );



    // Get all jobs Ad

    // app.get('/api/getjobs', auth, async (req, res) => {
    //     const jobs = await JobAd.find().populate('project').populate('city').populate('company').populate('contract')
    //         .sort({ createDate: -1 });
    //     res.send(jobs);
    // })


    // get all jobs for company by email
    app.get('/api/getjobsByEmail/:email?', auth,companyProccessControllers.getJobsByEmail)


    //Get project by Id
    app.get('/api/getproject', auth, companyProccessControllers.getProjectById);


    //Get job by Id
    app.get('/api/getjob', auth, companyProccessControllers.getJobById);

    // get job preview ( for companies)
    app.get('/api/preview/getjob', auth, companyProccessControllers.getJobPreview);

    //Get requierd number of staff
    app.get('/api/getjob/req', auth,companyProccessControllers.getRequierdJob );

    // get job by project
    app.get('/api/get/jobs', auth,companyProccessControllers.getJobByProject);


    //DELETE project by Id
    app.delete('/api/deleteproject', auth, companyProccessControllers.deleteProject);

    //DELETE job by Id
    app.delete('/api/deletejob', auth, companyProccessControllers.deleteJob);

    // Lock Job
    app.put('/api/lockJob/:id?', auth,companyProccessControllers.lockJob)

    // UnLock Job
    app.put('/api/unlockJob/:id?', auth,companyProccessControllers.unlockJob )


    app.put('/api/put/project', auth, companyProccessControllers.putProject);


    // // Edit JobAd

    // app.put('/api/put/job', auth, async (req, res) => {
    //     const jobAd = await JobAd.updateOne({ '_id': req.body.id }, {
    //         $set: {
    //             contract: req.body.contract,
    //             job_Name: req.body.job_Name,
    //             country: req.body.country,
    //             city: req.body.city,
    //             work_hours: req.body.work_hours,
    //             work_days: req.body.work_days,
    //             salary: req.body.salary,
    //             descreption: req.body.descreption,
    //             required_Number: req.body.required_Number,
    //             startDate: req.body.startDate


    //         }

    //     }).then(result => {
    //         res.status(200).send("Done .");
    //     });
    // });

    app.get('/api/getCompanyAds', auth, companyProccessControllers.getCompanyAds);

    // get all sub accounts
    app.get('/api/getSubUsers', auth,companyProccessControllers.getSubUsers)

    // change Company name

    app.put('/api/changeCompanyName', auth, companyProccessControllers.changeCompanyName);

    // get company superVisor
    app.get('/api/getCompanySuperV',auth,companyProccessControllers.getCompanySuperVisor)


    // enable and desable subAccount
    app.put('/api/switchSubUser', auth, companyProccessControllers.disAndEnbAccount)



}


