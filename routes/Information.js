const { UserInfo } = require('../models/Users/User_Info');
const { CompanyInfo } = require('../models/Companies/Company_Info');
const auth = require('../middleware/auth');
const file = require('../middleware/file');
const { Candidate } = require('../models/Companies/Candidates');
const {Skills} = require('../models/Users/skills');
const {PersonalSkills} = require('../models/Users/Personal_Skills');
const {Company} = require('../models/Companies/Companies')
const {User} = require('../models/Users/User');
const { Notification } = require('../models/Notification');
const { JobAd } = require('../models/Companies/Job_Ad');
const { permittedCrossDomainPolicies } = require('helmet');

module.exports = (app) => {
    //post user information
    app.post('/api/postuserinfo',auth,file, async (req, res) => {

        const current_user = await UserInfo.findOne({'user' : req.user._id})
        if(!current_user) {
            var universty = null;
            var spMajor = null;
           var skills = [];
           var personal_Skills = [] ;

            const url = req.protocol + '://' + req.get("host");
            var imagePath = '';
            if(!req.file){
               imagePath = "null"
            }
            else{
                imagePath= url + "/images/" + req.file.filename;
            }
            try{
                if(req.body.universty != 'null') universty = req.body.universty ;
                if(req.body.spMajor != 'null') spMajor = req.body.spMajor ;
                if(req.body.skills != 'null') skills = req.body.skills ;
                if(req.body.personal_Skills != 'null') personal_Skills = req.body.personal_Skills ;




                new UserInfo({
                    user: req.user._id,
                    country: '5caf3248ffec65462ec2a05e',
                    study_degree: req.body.study_degree,
                    fullName: req.body.fullName,
                    imagePath:imagePath,
                    education_degree: req.body.education_degree,
                    gender: req.body.gender,
                    mobile: req.body.mobile,
                    birthDate: req.body.birthDate,
                    universty: universty,
                    city: req.body.city,
                    jobCategory: req.body.jobCategory,
                    Education_level: req.body.Education_level,
                    public_Major: req.body.public_Major,
                    spMajor: spMajor,
                    languagesWithLevel: req.body.languagesWithLevel,
                    skills: skills,
                    personal_Skills: personal_Skills,
                    hoppies: req.body.hoppies,
                    social_Status: req.body.social_Status,
                    about: req.body.about,
                    personal_web: req.body.personal_web,
                    facebook: req.body.facebook,
                    twitter: req.body.twitter,
                    instagram: req.body.instagram,
                    linkedin: req.body.linkedin,
                 }).save()
                     .then(user => {
                        send_JobAds_ToNewUsers(user)
                        res.send(user);
                     });
            } catch(ex) {

            }
        }
      else{
          res.status(204).send("this user already stored information")
      }

    })


    //post company information
    app.post('/api/postcompanyinfo', auth,file, (req, res) => {
        postCompanyInfo(req)
    })

    //Get user info by USerID
    app.get('/api/getuserinfo', auth, async (req, res) => {
        //const id = req.query.id;
        const info = await UserInfo.findOne({ 'user': req.user._id })
        .populate('user country city public_Major spMajor universty');
        if (!info) return res.status(200).json({
            status : false
        });

        try{

            var uni = "";
            var spMaj = "";
            var study_degree = study_degreeCheck(info)
            var education_degree = education_degreeCheck(info);
            var Education_level = Education_levelCheck(info)
            const country = info.country.countryName;
            const city = info.city.cityName;
            const cpublic_Major = info.public_Major.majorName;
            if(info.spMajor) spMaj = info.spMajor.majorName;

             if(info.universty) uni = info.universty.universtyName;

            const company = [];

    for(var c = 0 ; c < info.companies.length ; c++) {
        const result = await Company.findById(info.companies[c]).select("companyName -_id");
        company.push(result.companyName)

    }
        const skill = []
        if(info.skills != null){

            for(var i = 0 ; i < info.skills.length ; i++) {

                const result = await Skills.findById(info.skills[i]).select("skillName -_id");

                skill.push(result.skillName)
            }

        }


        const Personlskill =[]

        if(info.personal_Skills != null) {
            for(var j = 0 ; j < info.personal_Skills.length ; j++) {

                const result = await PersonalSkills.findById(info.personal_Skills[j]).select("skillName -_id");

                Personlskill.push(result.skillName)

            }
        }

        var profileComplete = progressBar(info)

                res.status(200).json({
                    status : true,
                    email: info.user.email,
                    isConfirmed: info.user.isConfirmed,
                    profileComplete:profileComplete,
                    country: country,
                    study_degree: study_degree,
                    imagePath: info.imagePath,
                    education_degree: education_degree,
                    gender: info.gender,
                    mobile: info.mobile,
                    fullName: info.fullName,
                    work_Hours: info.work_Hours,
                    userStatus : info.userStatus,
                    availabilityStatus: info.availabilityStatus,
                    jobCategory: info.jobCategory,
                    birthDate: info.birthDate,
                    universty: uni,
                    profile_views: info.profile_views,
                    aplled_jobs: info.aplled_jobs,
                    companies: company,
                    city: city,
                    Education_level: Education_level,
                    public_Major: cpublic_Major,
                    spicifc_Major: spMaj,
                    languages: info.languagesWithLevel,
                    skills: skill,
                    personal_Skills: Personlskill,
                    hoppies: info.hoppies,
                    social_Status: info.social_Status,
                    about: info.about,
                    personal_web: info.personal_web,
                    facebook: info.facebook,
                    twitter: info.twitter,
                    instagram: info.instagram,
                    linkedin: info.linkedin,
                });

        }catch(ex){
            console.log(ex)
        }

    })


        //Get user info by USerID for edit
        app.get('/api/getuserinfo/edit', auth, async (req, res) => {
            //const id = req.query.id;
            const info = await UserInfo.findOne({ 'user': req.user._id })
            .populate('city universty country public_Major spMajor jobCategory')

            if (!info) return res.status(401).send('not found');

            res.status(200).json({
                        info: info
                    });

            })




      //Get user info by ID
      app.get('/api/get/userinfo', auth, async (req, res) => {
        const id = req.query.id;
        const jobAd = req.query.jobAd;
        const info = await UserInfo.findOne({ 'user': id })
        .populate('country city public_Major spMajor universty personal_Skills skills');
        await Candidate.findOneAndUpdate({'candidateName':id ,'jobAd':jobAd},
        {
            $set:{
                isRead: true
            }
        })
        const user = await User.findById(id);
        if (!info) return res.status(401).send('not found');

       info.profile_views += 1;
       info.save();
      study_degree = study_degreeCheck(info);
       education_degree = education_degreeCheck(info);
        Education_level = Education_levelCheck(info);


            res.status(200).json({
                email:user.email,
                study_degree:study_degree,
                education_degree:education_degree,
                Education_level: Education_level,
                personal_Skills: info.personal_Skills.slice(0,5),
                skills: info.skills.slice(0,5),
               info: info

            });

    })

    // Get company info by CompanyID

    app.get('/api/getcompanyinfo', auth, async (req, res) => {

        // const id = req.query.id;

        try{
            const info = await CompanyInfo.findOne({ 'company': req.user._id })
            .populate('company city country');
            // if (!info) return res.status(200).json({
            //     status : false
            // });


            res.status(200).json({
               info,
               status: true
            });
        } catch(ex) {
        }

    })

      //Get company info by CompanyID
      app.get('/api/getcompanyinfoById', auth, async (req, res) => {
         const id = req.query.id;

        try{
            const info = await CompanyInfo.findOne({ 'company': id })
            .populate("country city")
            .populate("company","-_id -isConfirmed");

            if (!info) return res.status(401).send('not found');

            res.status(200).json({
                compnayName: info.company.companyName,
                country: info.country.countryName,
                city: info.city.cityName,
                address: info.address,
                imagePath: info.imagePath,
                info: info.info,
                vision: info.vision,
                message: info.message,
                personal_web: info.personal_web,
                facebook: info.facebook,
                twitter: info.twitter,
                instagram: info.instagram,
                linkedin: info.linkedin
            });
        } catch(ex) {
            console.log(ex)
        }

    })
    app.put('/api/put/userinfo',[auth,file],async (req, res)=> {
        var universty
        var spMajor
       var skills = [];
       var personal_Skills = [] ;
       var jobCategory = [];
        const url = req.protocol + '://' + req.get("host");
        var imagePath = '';
        if(!req.file){

           imagePath = "null"
        }
        else{
            imagePath= url + "/images/" + req.file.filename;
        }
        try{

            if(req.body.universty != 'null') universty = req.body.universty ;
            if(req.body.spMajor != 'null') spMajor = req.body.spMajor ;
            if(req.body.skills != 'null') skills = req.body.skills ;
            if(req.body.personal_Skills != 'null') personal_Skills = req.body.personal_Skills ;
            if(req.body.jobCategory != 'null' || req.body.jobCategory != null) jobCategory = req.body.jobCategory ;





        const info = await UserInfo.updateOne({ 'user': req.user._id },
            {
                $set: {
                    country: req.body.country,
                    study_degree: req.body.study_degree,
                    fullName: req.body.fullName,
                    imagePath:imagePath,
                    jobCategory:jobCategory,
                    availabilityStatus: req.body.availabilityStatus,
                    userStatus: req.body.userStatus,
                    education_degree: req.body.education_degree,
                    gender: req.body.gender,
                    mobile: req.body.mobile,
                    birthDate: req.body.birthDate,
                    universty: universty,
                    city: req.body.city,
                    Education_level: req.body.education_level,
                    public_Major: req.body.public_Major,
                    spMajor: spMajor,
                    languagesWithLevel: req.body.languagesWithLevel,
                    skills:skills,
                    personal_Skills: personal_Skills,
                    hoppies: req.body.hoppies,
                    social_Status: req.body.social_Status,
                    about: req.body.about,
                    personal_web: req.body.personal_web,
                    facebook: req.body.facebook,
                    twitter: req.body.twitter,
                    instagram: req.body.instagram,
                    linkedin: req.body.linkedin,
                }
            }
        )//condition
        if (!info) return res.status(401).send('not found');

        res.status(200).json({
            message: "Successful !"
        });
    }catch(ex) {
        console.log(ex)
    }
    })

    app.put('/api/put/companyinfo',[auth,file], async (req,res) => {
        const company = await CompanyInfo.findOne({"company":req.user._id});
        if(!company){
            let companyInfo = postCompanyInfo(req);
            return res.status(200).send(companyInfo);
        }
        const url = req.protocol + '://' + req.get("host");
        var imagePath = '';
        if(!req.file){

           imagePath = req.body.image
        }
        else{
            imagePath= url + "/images/" + req.file.filename;
        }

        const companyId = await CompanyInfo.updateOne({'company': req.user._id },
            {

                $set: {

                    country: req.body.country,
                    address: req.body.address,
                    info: req.body.about,
                    vision: req.body.vision,
                    imagePath: imagePath,
                    message: req.body.message,
                    city: req.body.city,
                    personal_web: req.body.personal_web,
                    facebook: req.body.facebook,
                    twitter: req.body.twitter,
                    instagram: req.body.instagram,
                    linkedin: req.body.linkedin,
                }
            })
        res.status(200).send("Updated");
    })


    // functions
    // calculate profile complete
    function progressBar(info) {
        var count = 40
        if(info.mobile != undefined || info.mobile != "") count += 5;
        if(info.social_Status !=undefined) count += 5;
        if(info.study_degree !=undefined) count += 5;
        if(info.education_degree !=undefined) count += 5;
        if(info.Education_level !=undefined) count += 5;
        if(info.universty !=undefined) count += 5;
        if(info.spMajor !=undefined) count += 5;
        if(info.skills != null ) count += 5;
        if(info.personal_Skills != null) count += 5;
        if(info.hoppies != null) count += 5;
        if(info.languagesWithLevel != null) count += 5;
        if(info.instagram !=undefined || info.facebook !=undefined || info.twitter !=undefined
        ||info.linkedin !=undefined ||info.personal_web !=undefined || info.about !=undefined) count += 5;

        return count
      }

      function study_degreeCheck(res) {
        var study_degree = ""
        if(res.study_degree == 'HS') study_degree = "الثانوية العامة";
        else if(res.study_degree == 'BHO') study_degree = "البكالوريس";
        else if(res.study_degree == 'MASTER') study_degree = "الماستر";

        return study_degree;
      }

      function education_degreeCheck(res) {
          var education_degree = ""
        if(res.education_degree == 'HS')education_degree = "الثانوية العامة";
        else if(res.education_degree == 'BHO')education_degree = "البكالوريس";
        else if(res.education_degree == 'MASTER')education_degree = "الماستر";
        else if(res.education_degree == 'diploma')education_degree = "دبلوم";
        else if(res.education_degree == 'Undergraduate')education_degree = "خريج";

        return education_degree;
      }

      function Education_levelCheck(res) {
          var Education_level = ""

          if(res.Education_level == 'High-school-first-year') Education_level = "اول ثانوي";
          else if(res.Education_level == 'High-school-second-year') Education_level = "ثاني ثنوي";
          else if(res.Education_level == 'High-school-third-year') Education_level = "ثالث ثنوي";
          else if(res.Education_level == 'University-first-year') Education_level = "اول جامعة";
          else if(res.Education_level == 'University-second-year') Education_level = "ثاني جامعة";
          else if(res.Education_level == 'University-third-year') Education_level = "ثالث جامعة";
          else if(res.Education_level == 'University-forth-year') Education_level = "رابع جامعة";
          else if(res.Education_level == 'University-fith-year') Education_level = "خامس جامعة";
          else if(res.Education_level == 'University-sixth-year') Education_level =  "فصل سادس بكالوريوس";
          else if(res.Education_level == 'University-seventh-year') Education_level =  "فصل سابع بكالوريوس";
          else if(res.Education_level == 'University-eigth-year') Education_level =  "فصل ثامن بكالوريوس";
          else if(res.Education_level == 'University-ninth-year') Education_level =  "فصل تاسع بكالوريوس";
          else if(res.Education_level == 'University-ten-year') Education_level = "فصل عاشر بكالوريوس";
          else if(res.Education_level == 'master-first-year') Education_level = "اول ماستر";
          else if(res.Education_level == 'master-second-year') Education_level = "ثاني ماستر";
          else if(res.Education_level == 'master-third-year') Education_level = "ثالث ماستر";
          else if(res.Education_level == 'diploma-first-year') Education_level = "فصل أول دبلوم";
          else if(res.Education_level == 'diploma-second-year') Education_level = "فصل ثاني دبلوم";
          else if(res.Education_level == 'diploma-third-year') Education_level = "فصل ثالث دبلوم";
          else if(res.Education_level == 'diploma-fourth-year') Education_level = "فصل رابع دبلوم";

          return Education_level;
      }

        // Send job offers to new Reg users
    async function send_JobAds_ToNewUsers(userData) {
        const country = userData.country;
        const city = userData.city;
        const gender = userData.gender;
        const jobCategory = userData.jobCategory;
        let query = {
            "country": country,
            "city": city,
            "jobCategory": {$in:jobCategory},
            "isLock": false
        }

        // find job with conditions
        const jobAds = await JobAd.find(query);
        if (jobAds) // check if find available jobs or not
        {
            // check gender if male or female or both
            if (jobAds.gender == "both") {
                for (let i = 0; i < jobAds.length; i++) {
                    new Notification({
                        content: jobAds[i]._id,
                        user: userData.user,
                        isRead: false,
                        date: Date.now(),
                        apply: false
                    }).save();
                }
            }
            else {
                for (let i = 0; i < jobAds.length; i++) {
                    if (jobAds[i].gender == userData.gender) {
                        new Notification({
                            content: jobAds[i]._id,
                            user: userData.user,
                            isRead: false,
                            date: Date.now(),
                            apply: false
                        }).save();
                    }

                }

            }

        }

    }

    // post company info
    async function postCompanyInfo(req) {
        const url = req.protocol + '://' + req.get("host");
        var imagePath = '';
        if(!req.file){
           imagePath = "null"
        }
        else{
            imagePath= url + "/images/" + req.file.filename;
        }

        try{
            new CompanyInfo({
                company: req.user._id,
                country: req.body.country,
                phone:req.body.phone,
                address: req.body.address,
                info: req.body.info,
                imagePath: imagePath,
                vision: req.body.vision,
                message: req.body.message,
                city: req.body.city,
                personal_web: req.body.personal_web,
                facebook: req.body.facebook,
                twitter: req.body.twitter,
                instagram: req.body.instagram,
                linkedin: req.body.linkedin,
            }).save()
                .then(company => {
                   return company
                });
        } catch(ex) {
           console.log(ex)
        }

    }
}