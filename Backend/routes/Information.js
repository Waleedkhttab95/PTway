const { UserInfo } = require('../models/Users/User_Info');
const { CompanyInfo } = require('../models/Companies/Company_Info');
const auth = require('../middleware/auth');
const file = require('../middleware/file');
const {City} = require('../models/Shared/City');
const {spMajor} = require('../models/Shared/SpMajor');
const {publicMajor} = require('../models/Shared/Public_Major');
const {Country} = require('../models/Shared/Country');
const {Skills} = require('../models/Users/skills');
const {PersonalSkills} = require('../models/Users/Personal_Skills');
const {Universty} = require('../models/Shared/Universty');
const {Company} = require('../models/Companies/Companies')

module.exports = (app) => {
    //post user information
    app.post('/api/postuserinfo',auth,file, (req, res) => {
        const url = req.protocol + '://' + req.get("host");     

        try{
            new UserInfo({
                user: req.user._id,
                country: req.body.country,
                study_degree: req.body.study_degree,
                fullName: req.body.fullName,
                imagePath: url + "/images/" + req.file.filename,
                education_degree: req.body.education_degree,
                gender: req.body.gender,
                mobile: req.body.mobile,
                birthDate: req.body.birthDate,
                universty: req.body.universty,
                city: req.body.city,
                Education_level: req.body.Education_level,
                public_Major: req.body.public_Major,
                spMajor: req.body.spMajor,
                languages: req.body.languages,
                skills: req.body.skills,
                personal_Skills: req.body.personal_Skills,
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

                    res.send(user);
                });
        } catch(ex) {
        }
       
    })


    //post company information
    app.post('/api/postcompanyinfo', auth,file, (req, res) => {
        const url = req.protocol + '://' + req.get("host");     
        try{
            new CompanyInfo({
                company: req.user._id,
                country: req.body.country,
                address: req.body.address,
                info: req.body.info,
                imagePath: url + "/images/" + req.file.filename,
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
                    res.send(company);
                });
        } catch(ex) {
        }
      
    })

    //Get user info by USerID
    app.get('/api/getuserinfo', auth, async (req, res) => {
        //const id = req.query.id;
        const info = await UserInfo.findOne({ 'user': req.user._id });
        if (!info) return res.status(401).send('not found');

        const country = await Country.findById(info.country);
        const city = await City.findById(info.city);
        const cpublic_Major = await publicMajor.findById(info.public_Major);
        const cspicifc_Major = await spMajor.findById(info.spMajor);
        

        const universty = await Universty.findById(info.universty);
        const company = [];
 
for(var c = 0 ; c < info.companies.length ; c++) {
    const result = await Company.findById(info.companies[c]).select("companyName -_id");
    company.push(result.companyName)

}
    const skill = []
   
    for(var i = 0 ; i < info.skills.length ; i++) {
        const result = await Skills.findById(info.skills[i]).select("skillName -_id");
        skill.push(result.skillName)

    }

    const Personlskill =[]
  
    for(var j = 0 ; j < info.personal_Skills.length ; j++) {
        
        const result = await PersonalSkills.findById(info.personal_Skills[j]).select("skillName -_id");
        
        Personlskill.push(result.skillName)

    }


        try{

            res.status(200).json({
                country: country.countryName,
                study_degree: info.study_degree,
               imagePath: info.imagePath,
                education_degree: info.education_degree,
                gender: info.gender,
                mobile: info.mobile,
                fullName: info.fullName,
                work_Hours: info.work_Hours,
                birthDate: info.birthDate,
                universty: universty.universtyName,
                companies: company,
                city: city.cityName,
                Education_level: info.Education_level,
                public_Major: cpublic_Major.majorName,
                spicifc_Major: cspicifc_Major.majorName,
                languages: info.languages,
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
        } catch(ex) {
        }
    })

      //Get user info by ID
      app.get('/api/get/userinfo', auth, async (req, res) => {
        const id = req.query.id;
        const info = await UserInfo.findOne({ 'user': id });
        if (!info) return res.status(401).send('not found');

        const country = await Country.findById(info.country);
        const city = await City.findById(info.city);
        const cpublic_Major = await publicMajor.findById(info.public_Major);
        const cspicifc_Major = await spMajor.findById(info.spMajor);

        const universty = await Universty.findById(info.universty);
        const company = [];
 
        for(var c = 0 ; c < info.companies.length ; c++) {
            const result = await Company.findById(info.companies[c]).select("companyName -_id");
            company.push(result.companyName)
        
        }
            const skill = []
           
            for(var i = 0 ; i < info.skills.length ; i++) {
                const result = await Skills.findById(info.skills[i]).select("skillName -_id");
                skill.push(result.skillName)
        
            }
        
            const Personlskill =[]
          
            for(var j = 0 ; j < info.personal_Skills.length ; j++) {
                
                const result = await PersonalSkills.findById(info.personal_Skills[j]).select("skillName -_id");
                
                Personlskill.push(result.skillName)
        
            }
        
        try{

            res.status(200).json({
                country: country.countryName,
                study_degree: info.study_degree,
               imagePath: info.imagePath,
                education_degree: info.education_degree,
                gender: info.gender,
                mobile: info.mobile,
                fullName: info.fullName,
                work_Hours: info.work_Hours,
                birthDate: info.birthDate,
                universty: universty.universtyName,
                companies: company,
                city: city.cityName,
                Education_level: info.Education_level,
                public_Major: cpublic_Major.majorName,
                spicifc_Major: cspicifc_Major.majorName,
                languages: info.languages,
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
        } catch(ex) {
        }
    })
    //Get company info by CompanyID
    app.get('/api/getcompanyinfo', auth, async (req, res) => {
        // const id = req.query.id;
        try{
            const info = await CompanyInfo.findOne({ 'company': req.user._id });
            if (!info) return res.status(401).send('not found');

            const country = await Country.findById(info.country);
            const city = await City.findById(info.city);
            res.status(200).json({
                country: country.countryName,
                city: city.cityName,
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
        }
      
    })

    app.put('/api/put/userinfo', auth,file,async (req, res) => {
    
        let imPath = req.body.imagePath;
        if(req.file) {
          const url = req.protocol + '://' + req.get("host");
          imPath= url + "/images/" + req.file.filename
        }

        const info = await UserInfo.updateOne({ 'user': req.user.id },
            {
                $set: {
                    country: req.body.country,
                    study_status: req.body.study_status,
                    study_degree: req.body.study_degree,
                    education_degree: req.body.education_degree,
                    gender: req.body.gender,
                    imagePath: imPath,
                    mobile: req.body.mobile,
                    birthDate: req.body.birthDate,
                    city: req.body.city,
                    Education_level: req.body.Education_level,
                    public_Major: req.body.public_Major,
                    spicifc_Major: req.body.spicifc_Major,
                    languages: req.body.languages,
                    skills: req.body.skills,
                    personal_Skills: req.body.personal_Skills,
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
        
        res.status(200).send("Updated");
    })

    app.put('/api/put/companyinfo',auth,file, async (req,res) => {
        let imPath = req.body.imagePath;
        if(req.file) {
          const url = req.protocol + '://' + req.get("host");
          imPath= url + "/images/" + req.file.filename
        }

        const companyId = await CompanyInfo.updateOne({'company': req.user.id },
            {
                
                $set: {
                    
                    country: req.body.country,
                    address: req.body.address,
                    info: req.body.info,
                    vision: req.body.vision,
                    imagePath: imPath,
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
}