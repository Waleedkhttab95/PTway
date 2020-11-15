const { UserInfo } = require('../../models/Users/User_Info');
const { Accepted } = require('../../models/Companies/Accepted');
const { Notification } = require('../../models/Notification');
const { JobAd_admin } = require('../../models/admin/Job_Ad_Admin');
const { Project_Admin } = require('../../models/admin/Project_Admin');
const { Company } = require('../../models/Companies/Companies');
const { Candidate } = require('../../models/Companies/Candidates');
const { User } = require('../../models/Users/User');
const { sendJobOffer,notifyAdmin } = require('../../services/email/mail');
const { Sector } = require('../../models/Companies/Sector');
const { CompanySpecialist } = require('../../models/Companies/CompanySpecialist');
const { Project } = require('../../models/Companies/Project');
const { JobAd } = require('../../models/Companies/Job_Ad');


exports.getCompanyType =  async (req, res) => {
    const type = await Company.findById(req.user._id);
    res.status(200).send(type.sector);
};

exports.postProject = (req, res) => {
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

}

exports.getCounts =  async (req, res) => {

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

}

exports.postJob = (req, res) => {
    var lock_date = lockDate();
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    new JobAd({
        createDate: Date.now(),
        sortDate: today,
        company: req.user._id,
        contract: req.body.contract,
        project: req.body.project,
        job_Name: req.body.job_Name,
        lockDate: lock_date,
        descreption: req.body.descreption,
        job_skills: req.body.job_skills,
        jobCategory: req.body.jobCategory,
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
            notifyAdmin(result.job_Name, "اعلان جديد ")
            res.send(result)
        }).catch((e) => {
            res.status(500).send('error', e)
        });

    new JobAd_admin({
        createDate: Date.now(),
        sortDate: today,
        company: req.user._id,
        contract: req.body.contract,
        project: req.body.project,
        job_Name: req.body.job_Name,
        lockDate: lock_date,
        descreption: req.body.descreption,
        job_skills: req.body.job_skills,
        jobCategory: req.body.jobCategory,
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


}

exports.getProjects = async (req, res) => {
    const id = req.user._id;
    const JobAdsCount = [];


    var pageNo = parseInt(req.query.pageNo)
    var size = 3
    var query = {}

    if (pageNo < 0 || pageNo === 0) {
        response = { "error": true, "message": "invalid page number, should start with 1" };
        return res.json(response)
    }

    query.skip = size * (pageNo - 1)
    query.limit = size

    const projectCount = await Project.count({ company: id });
    var totalPages = Math.ceil(projectCount / size)
    const proj = await Project.find({ company: id }, {}, query)
        .sort({ date: -1 });

    for (var i = 0; i < proj.length; i++) {
        var jobAds = await JobAd.find({ 'project': proj[i] }).countDocuments()
        JobAdsCount.push(jobAds);

    }
    res.status(200).json({
        proj, JobAdsCount, totalPages
    });
}

exports.getProjectBuId = async (req, res) => {
    const id = req.query._id;
    const proj = await Project.find({ company: id });


    res.status(200).send(proj)
}

exports.getJobsByEmail = async (req, res) => {
    const company = await Company.findOne({ 'email': req.query.email })
    if (!company) return res.status(402).send('not found company')

    const jobs = await JobAd.find({ 'company': company._id }).populate('company').populate('city')
        .sort({ createDate: -1 });
    if (!jobs) return res.status(402).send('not found Jobs for this company')

    res.status(200).send(jobs);
}

exports.getProjectById = async (req, res) => {
    const id = req.query.id;
    const project = await Project.findById(id);
    if (!project) return res.status(401).send('not found');
    res.status(200).json({
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        id: project._d
    });
}

exports.getJobById = async (req, res) => {
    const id = req.query.id;
    var apply_job = false;
    const job = await JobAd.findById(id)
        .populate("city country contract ")
        .populate("company", "-password");
    if (!job) return res.status(401).send('not found');
    //  const public_Major = await publicMajor.findById(job.public_Major);
    const result = await Notification.findOne({ 'content': id, 'user': req.user._id });

    if (result.isRead == false) {
        result.isRead = true;
        result.save();
    }


    if (result.apply != undefined) {

        apply_job = result.apply
    }

    if (job.gender == 'both') {
        job.gender = 'ذكر و انثى'
    }

    res.status(200).json({
        job: job,
        Country: job.country.countryName,
        City: job.city.cityName,
        Contract: job.contract.contractName,
        contractType: job.contract.days,
        apply: apply_job
        //   public_Major: public_Major.majorName
    });
}


exports.getJobPreview = async (req, res) => {
    const id = req.query.id;
    const job = await JobAd.findById(id)
        .populate("city country contract ")
        .populate("company", "-password");
    if (!job) return res.status(401).send('not found');
    //  const public_Major = await publicMajor.findById(job.public_Major);


    if (job.gender == 'both') {
        job.gender = 'ذكر و انثى'
    }

    res.status(200).json({
        job: job,
        Country: job.country.countryName,
        City: job.city.cityName,
        Contract: job.contract.contractName,
        contractType: job.contract.days
        //   public_Major: public_Major.majorName
    });
}

exports.getRequierdJob = async (req, res) => {
    const id = req.query.id;

    const job = await JobAd.findById(id);
    if (!job) return res.status(401).send('not found');
    const req_number = job.required_Number;
    const limit_number = job.limit_Number;


    res.status(200).json({
        req_n: req_number,
        limit_n: limit_number
    });
}

exports.getJobByProject =  async (req, res) => {
    const id = req.query.projectid;

    const job = await JobAd.find({ project: id });


    res.status(200).json({
        job
    });
}

exports.deleteProject = async (req, res) => {
    const id = req.query.id;
    const jobAds = await JobAd.find({ 'project': id });

    for (let i = 0; i < jobAds.length; i++) {
        await JobAd.findByIdAndDelete(jobAds[i]._id)
    }
    const project = await Project.findByIdAndDelete(id);
    if (!project) return res.status(401).send('not found');
    res.send(project);
}

exports.deleteJob = async (req, res) => {
    const id = req.query.id;
    const job = await JobAd.findByIdAndDelete(id);

    delete_Noti(id);


    res.send("Deleted !");
}

exports.lockJob =  async (req, res) => {
    const job = await JobAd.updateOne({ '_id': req.query.id }, {
        $set: {
            isLock: true
        }
    }).then(result => {
        res.status(200).send("Done .");
    });
}

exports.unlockJob = async (req, res) => {
    const job = await JobAd.updateOne({ '_id': req.query.id }, {
        $set: {
            isLock: false
        }
    }).then(result => {
        res.status(200).send("Done .");
    });
}

exports.putProject = async (req, res) => {
    const projectt = await Project.updateOne({ '_id': req.body.id }, {
        $set: {
            projectName: req.body.projectName,
            projectDescription: req.body.projectDescription,
        }

    }).then(result => {
        res.status(200).send("Done .");
    });
}

exports.getCompanyAds = async (req, res) => {
    var jobObjArray = [];
    try {
        if (!req.user._id) return res.status(400).send('الشركة غير مسجلة');
        const advs = await JobAd.find({ 'company': req.user._id }).sort({ createDate: -1 }).limit(3)
            .populate('project')
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
            const advName = advs[index].job_Name;
            const jobCreate = advs[index].createDate;
            const projectName = advs[index].project.projectName;
            const candidates = await Candidate.find({ 'jobAd': advId }).countDocuments();
            const obj = { advId, advName, candidates, projectName, jobCreate };
            jobObjArray.push(obj);
        }
        return res.status(200).send(jobObjArray);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

exports.getSubUsers =  async (req, res) => {
    const users = await User.find({ 'isSubUser': true, 'company': req.user._id })
    if (!users) return res.status(401).send('not found any users !')

    res.status(200).json({
        users: users
    })
}

exports.changeCompanyName = async (req, res) => {
    const newCompanyName = req.body.name;
    if (!newCompanyName) return res.status(401).send("Invalid Name ")

    const company = await Company.findByIdAndUpdate(req.user._id,
        { $set: { companyName: newCompanyName } }
    );
    return res.status(200).send('updated . ');


}

exports.getCompanySuperVisor = async (req,res) =>{
    try{
       const SPdata = await Company.findById(req.user._id)
       .populate('superVisor')

       if(!SPdata.superVisor) return res.status(200).json({
           superVisor:""
       });

       res.status(200).json({
           superVisor:SPdata.superVisor
       });
    }catch(err){
        console.log(err)
    }
   }

   exports.disAndEnbAccount = async (req, res) => {
    const user = await User.findById(req.query.userId);
    if (!user) return res.status(401).status('user not found')

    user.isSubUser = !user.isSubUser;
    user.save();

    res.status(200).send('Updated !')
}



   // Function to Calculate Lock Date

   function lockDate() {
    Date.prototype.addDays = function (startDate, days) {

        var date = new Date(startDate);
        date.setDate(date.getDate() + days);

        return date;
    }

    var Ld = new Date();
    var today = Date.now();

    Ld = Ld.addDays(today, 14);
    Ld.setHours(0, 0, 0, 0);
    return Ld;
}


// Send Job offer to users //
async function send_JobAds(jobAd) {

    const country = jobAd.country;
    const city = jobAd.city;
    const gender = jobAd.gender;
    const jobAdId = jobAd._id;
    const jobCategory = jobAd.jobCategory;
    let query = {};
    // check gender if male or female or both
    if (gender == "both") {

        query = {
            "country": country,
            "city": city,
            "jobCategory": jobCategory
        }
    }
    else {

        query = {
            "country": country,
            "city": city,
            "gender": gender,
            "jobCategory": jobCategory
        }
    }
    // read users with query
    const result = await UserInfo
        .find(query)
        .select("user");
    // extract users email and send email
    result.forEach(async function (r) {
        const user = await User.findById(r.user);
        if (user) {
            if (user.email_notification == true && user.isConfirmed == true)
                sendJobOffer(user.email, user.firstName, jobAdId);
        }

        new Notification({
            content: jobAdId,
            user: r.user,
            isRead: false,
            date: Date.now(),
            apply: false
        }).save();
    })

}




async function delete_Noti(id) {
    const notifications = await Notification.deleteMany({ 'content': id })


}