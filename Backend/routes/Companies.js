const {Sector} = require('../models/Companies/Sector');
const {CompanySpecialist} = require('../models/Companies/CompanySpecialist');
const {Project} = require('../models/Companies/Project');
const {JobAd} = require('../models/Companies/Job_Ad');
const {publicMajor} = require('../models/Shared/Public_Major');
const auth = require('../middleware/auth');
const {Contract} = require('../models/Companies/Contract');
const {Accepted } = require('../models/Companies/Accepted');
const {City} = require('../models/Shared/City');
const {Country} = require('../models/Shared/Country');
const {Notification} = require('../models/Notification');
const {JobAd_admin} = require('../models/admin/Job_Ad_Admin');
const {Project_Admin} = require('../models/admin/Project_Admin');
const {Company} = require('../models/Companies/Companies')


module.exports = (app) => {

    // Add Company Sector
    app.post('/api/postsector', (req,res) =>{
    
        new Sector({
            sectorName: req.body.sectorName
        }).save()
        .then(result =>{
            res.send(result);
        })

    });

    // add company specialization

    app.post('/api/postspec', (req,res) =>{

        new CompanySpecialist({
            specialistName: req.body.specialistName
        }).save()
        .then(result =>{
            res.send(result);
        })

    });

    // Get all sectors

    app.get('/api/getsectors', async(req,res) =>{
        const sectors = await Sector.find();
           res.status(200).send(sectors);       
       });
    

     // Get all specializzation

     app.get('/api/getspec', async(req,res) =>{
        const Cs = await CompanySpecialist.find();
        res.status(200).send(Cs);
     });

     // get company sector type
     app.get('/api/get/companytype', auth,async(req,res) =>{
        const type = await Company.findById(req.user._id);
           res.status(200).send(type.sector);       
       });
       
     // POST PROJECT 
        app.post('/api/postproject',auth, (req,res) =>{
            new Project({
                projectName: req.body.projectName,
                projectDescription : req.body.projectDescription,
                company: req.user._id

            }).save()
            .then(result =>{
                res.send(result);
            });

            new Project_Admin({
                projectName: req.body.projectName,
                projectDescription : req.body.projectDescription,
                company: req.user._id

            }).save()
            .then(result =>{
                res.send(result);
            });
        });

        // counts of projects, Jobs 
        app.get('/api/get/counts',auth, async (req,res) =>{
           
            var projectsCounts = 0;
             projectsCounts += await Project.find({'company': req.user._id}).countDocuments();
            const projects = await Project.find({'company': req.user._id});
            var  jobCounts = 0;
            var accCount = 0 ;
            
            for(var i =0 ; i < projects.length ; i++) {
                jobCounts += await JobAd.find({'project': projects[i]}).countDocuments();
                jobs = await JobAd.find({'project': projects[i]}).select('_id');
               
                for(var j =0 ; j< jobs.length ; j++)
               
                accCount += await Accepted.find({'jobAd': jobs[j]}).countDocuments();
             
            }
        
            res.status(200).json({
                projects: projectsCounts,
                jobs: jobCounts,
                acceptes :  accCount
            })

        })

          // POST job Ad 
          app.post('/api/postjob', auth,(req,res) =>{
            new JobAd({
                company: req.user._id,
                contract : req.body.contract,
                project: req.body.project,
                job_Name: req.body.job_Name,
                descreption: req.body.descreption,
                job_skills : req.body.job_skills,
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
            .then(result =>{
                console.log("result"+result)
                res.send(result)
            });



            new JobAd_admin({
                company: req.user._id,
                contract : req.body.contract,
                project: req.body.project,
                job_Name: req.body.job_Name,
                descreption: req.body.descreption,
                job_skills : req.body.job_skills,
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
            .then(result =>{
                console.log(result)
            });

        });

          // Get all projects

     app.get('/api/getprojects',auth, async(req,res) =>{
        const id=  req.user._id;
        const proj = await Project.find({company : id});
       const projectNames = proj.map(x => x.projectName);
       const projectId = proj.map(x => x._id);

            res.status(200).json({
                projectName: projectNames,
                count : proj.length,
                id: projectId
            });
        });
    


       // Get all jobs Ad 

       app.get('/api/getjobs', async(req,res) =>{
           const jobs = await JobAd.find();
            res.send(jobs);
        })
 

        //Get project by Id
        app.get('/api/getproject', async (req,res) =>{
            const id = req.query.id;
           const project= await Project.findById(id);
            if(!project) return res.status(401).send('not found');
            res.status(200).json({
                projectName: project.projectName,
                projectDescription : project.projectDescription,
                id: project._d
            });
        });

        
        //Get job by Id
        app.get('/api/getjob',auth, async (req,res) =>{
            const id = req.query.id;
          
           const job= await JobAd.findById(id);
            if(!job) return res.status(401).send('not found');
            const countres = await Country.findById(job.country);
            const cites = await City.findById(job.city);
            const contract = await Contract.findById(job.contract);
          //  const public_Major = await publicMajor.findById(job.public_Major);
            const result = await Notification.findOne({'content' : id , 'user' : req.user._id});

            if(result.isRead == false){
                result.isRead = true;
                result.save();
            }
            res.status(200).json({
                job: job,
                Country: countres.countryName,
                City: cites.cityName,
                Contract: contract.contractName,
                contractType: contract.days,
             //   public_Major: public_Major.majorName
            });
        });

        // get job preview ( for companies)
        app.get('/api/preview/getjob',auth, async (req,res) =>{
            const id = req.query.id;
          
           const job= await JobAd.findById(id);
            if(!job) return res.status(401).send('not found');
            const countres = await Country.findById(job.country);
            const cites = await City.findById(job.city);
            const contract = await Contract.findById(job.contract);
          //  const public_Major = await publicMajor.findById(job.public_Major);
            const result = await Notification.findOne({'content' : id , 'user' : req.user._id});

        
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
           app.get('/api/getjob/req',auth, async (req,res) =>{
            const id = req.query.id;
          
           const job= await JobAd.findById(id);
            if(!job) return res.status(401).send('not found');
         const req_number = job.required_Number;
         const limit_number = job.limit_Number;

           
            res.status(200).json({
                req_n: req_number,
                limit_n : limit_number
            });
        });

        // get job by project
        app.get('/api/get/jobs', async (req,res) =>{
            const id = req.query.projectid;
          
           const job= await JobAd.find({project: id});
            if(!job) return res.status(401).send('not found');
            const jobName = job.map(x => x.job_Name);
            const jobId = job.map(x => x._id);

            res.status(200).json({
                jobNames: jobName,
                count : job.length,
                id: jobId
            });
        });
        //Post Contract

        app.post('/api/postcontract', (req,res) =>{
           
            new Contract({
                contractName: req.body.contractName,
                days: req.body.days
            }).save()
            .then(result =>{
                res.send(result);
            })
    
        });

            // Get all contracts

     app.get('/api/getcontracts', async(req,res) =>{
       const contractt = await Contract.find() 
        res.send(contractt);
        })
     

        //DELETE project by Id
        app.delete('/api/deleteproject', async (req,res) =>{
            const id = req.query.id;
          
           const project= await Project.findByIdAndDelete(id);
            if(!project) return res.status(401).send('not found');
            res.send(project);
        });

        //DELETE job by Id
        app.delete('/api/deletejob', async (req,res) =>{
                const id = req.query.id;
                const job= await JobAd.findByIdAndDelete(id);
                if(!job) return res.status(400).send('not found');
                res.send("Deleted !");
        });

        app.put('/api/put/project', async(req,res)=>{
           const projectt = await Project.updateOne({ '_id' : req.body.id},{
               $set: { 
                projectName: req.body.projectName,
                projectDescription : req.body.projectDescription,  
               } 
             
            }).then(result =>{
                      res.status(200).send("Done ."); 
            });
        });
        
            
            
     
          


        
}
    