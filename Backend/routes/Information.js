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
const {User} = require('../models/Users/User');


module.exports = (app) => {
    //post user information
    app.post('/api/postuserinfo',auth,file, async (req, res) => {
        console.log("1")
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
    
    
                //console.log(req.body)
    
              
                new UserInfo({
                    user: req.user._id,
                    country: req.body.country,
                    study_degree: req.body.study_degree,
                    fullName: req.body.fullName,
                    imagePath:imagePath,
                    education_degree: req.body.education_degree,
                    gender: req.body.gender,
                    mobile: req.body.mobile,
                    birthDate: req.body.birthDate,
                    universty: universty,
                    city: req.body.city,
                    Education_level: req.body.Education_level,
                    public_Major: req.body.public_Major,
                    spMajor: spMajor,
                    languages: req.body.languages,
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
                        console.log(user)
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
                    res.send(company);
                });
        } catch(ex) {
        }
      
    })

    //Get user info by USerID
    app.get('/api/getuserinfo', auth, async (req, res) => {
        //const id = req.query.id;
        const info = await UserInfo.findOne({ 'user': req.user._id });
        if (!info) return res.status(200).json({
            status : false
        });

        try{

            var uni = "";
            var spMaj = "";
            const country = await Country.findById(info.country);
            const city = await City.findById(info.city);
            const cpublic_Major = await publicMajor.findById(info.public_Major);
     
            const cspicifc_Major = await spMajor.findById(info.spMajor);
            if(cspicifc_Major) spMaj = cspicifc_Major.majorName;
    
            const universty = await Universty.findById(info.universty);
             if(universty) uni = universty.universtyName;
    
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
     
    
    
      
                res.status(200).json({
                    status : true,
                    country: country.countryName,
                    study_degree: info.study_degree,
                    imagePath: info.imagePath,
                    education_degree: info.education_degree,
                    gender: info.gender,
                    mobile: info.mobile,
                    fullName: info.fullName,
                    work_Hours: info.work_Hours,
                    birthDate: info.birthDate,
                    universty: uni,
                    companies: company,
                    city: city.cityName,
                    Education_level: info.Education_level,
                    public_Major: cpublic_Major.majorName,
                    spicifc_Major: spMaj,
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
            
        }catch(ex){
            console.log(ex)
        }
     
    })


        //Get user info by USerID for edit
        app.get('/api/getuserinfo/edit', auth, async (req, res) => {
            //const id = req.query.id;
            const info = await UserInfo.findOne({ 'user': req.user._id }).populate('city').populate('universty').populate('country').populate('public_Major').populate('spMajor');
            if (!info) return res.status(401).send('not found');
   console.log("user info : " + info)
                    res.status(200).json({
                        info: info
                    });
                
            })
         
        


      //Get user info by ID
      app.get('/api/get/userinfo', auth, async (req, res) => {
        const id = req.query.id;
        const info = await UserInfo.findOne({ 'user': id });
        const user = await User.findById(id);
        if (!info) return res.status(401).send('not found');

        info.profile_views += 1;
        info.save();
        var uni = "";
        var spMaj = "";
        const country = await Country.findById(info.country);
        const city = await City.findById(info.city);
        const cpublic_Major = await publicMajor.findById(info.public_Major);
        const cspicifc_Major = await spMajor.findById(info.spMajor);
        if(cspicifc_Major) spMaj = cspicifc_Major.majorName;

        const universty = await Universty.findById(info.universty);
        if(universty) uni = universty.universtyName;

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
                email:user.email,
                country: country.countryName,
                study_degree: info.study_degree,
               imagePath: info.imagePath,
                education_degree: info.education_degree,
                gender: info.gender,
                mobile: info.mobile,
                fullName: info.fullName,
                work_Hours: info.work_Hours,
                birthDate: info.birthDate,
                universty: uni,
                companies: company,
                city: city.cityName,
                Education_level: info.Education_level,
                public_Major: cpublic_Major.majorName,
                spicifc_Major:spMaj,
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

    // Get company info by CompanyID

    app.get('/api/getcompanyinfo', auth, async (req, res) => {

        // const id = req.query.id;

        try{
            const info = await CompanyInfo.findOne({ 'company': req.user._id })
            .populate('company');
            if (!info) return res.status(200).json({
                status : false
            });

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

      //Get company info by CompanyID
      app.get('/api/getcompanyinfoById', auth, async (req, res) => {
         const id = req.query.id;
         console.log(id)
        try{
            const info = await CompanyInfo.findOne({ 'company': id });
            if (!info) return res.status(401).send('not found');

            const country = await Country.findById(info.country);
            const city = await City.findById(info.city);
            const company_Name = await Company.findById(info.company);
            res.status(200).json({
                compnayName: company_Name.companyName,
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
    app.put('/api/put/userinfo',[auth,file],async (req, res)=> {
        var universty 
        var spMajor 
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


        

           
        const info = await UserInfo.updateOne({ 'user': req.user._id },
            {
                $set: {
                    country: req.body.country,
                    study_degree: req.body.study_degree,
                    fullName: req.body.fullName,
                    imagePath:imagePath,
                    education_degree: req.body.education_degree,
                    gender: req.body.gender,
                    mobile: req.body.mobile,
                    birthDate: req.body.birthDate,
                    universty: universty,
                    city: req.body.city,
                    Education_level: req.body.Education_level,
                    public_Major: req.body.public_Major,
                    spMajor: spMajor,
                    languages: req.body.languages,
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