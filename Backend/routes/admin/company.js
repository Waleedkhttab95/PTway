const { Company } = require('../../models/Companies/Companies');
const { User } = require('../../models/Users/User')
const { CompanyInfo } = require('../../models/Companies/Company_Info')
const { Country } = require('../../models/Shared/Country');
const { City } = require('../../models/Shared/City');
const { getAge } = require('../../models/Users/User');
const { UserInfo } = require('../../models/Users/User_Info');
const { JobAd } = require('../../models/Companies/Job_Ad');
const { Project } = require('../../models/Companies/Project');
const {Candidate} = require('../../models/Companies/Candidates');
const {Accepted} =  require('../../models/Companies/Accepted');

module.exports = (app) => {

    app.put('/api/companyApproval', async (req, res) => {

        await Company.updateOne({ '_id': req.body.id }, {
            $set: { isActive: true, }
        })
        res.status(200).send("Updated");

    });

    // return count of company based sector or sp

    app.get('/api/get/count/company', async (req, res) => {
        const sector = req.query.sector;
        const sp = req.query.sp;   //sp is shortcut for CompanySpecialist
        if(!sector || !sp){
            return res.status(400).send('خطأ في البيانات');
        }
    
        if (!sector.includes(undefined) && !sp.includes(undefined)) {
            const result = await Company.find({ 'sector': sector, 'CompanySpecialist': sp }).countDocuments();
            return res.status(200).json({
                result: result
            });
        }

        if (!sector.includes(undefined)) {
            const result = await Company.find({ 'sector': sector }).countDocuments();
            return res.status(200).json({
                result: result
            });
        }
        if (!sp.includes(undefined)) {
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
                result1 += await Company.findOne({ '_id': result2[i].company, 'sector': sector, 'CompanySpecialist': sp }).countDocuments();
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

    // return count of Projects and job offers for each company

    app.get('/api/get/projects/jobs/:companyId?', async (req,res) =>{

        const projects = await Project.find({'company': req.query.companyId}).countDocuments();
        const jobAds = await JobAd.find({'company': req.query.companyId}).countDocuments();

        
        return res.status(200).json({
            projects: projects,
            jobAds:jobAds
        });
    });



}