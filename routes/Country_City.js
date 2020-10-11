const contentDataController =  require('../controllers/shared/contentData');
const admin = require('../middleware/admin');

module.exports = (app,client) => {

    // Post Country

    app.post('/api/postcountry',admin,contentDataController.postCountry)

    // post City

    app.post('/api/postcity',admin,contentDataController.postCity)

    app.post('/api/post/major',admin,contentDataController.postMajor)

    app.post('/api/post/spMajor',admin,contentDataController.postSpMajor)

    app.post('/api/post/universty',admin,contentDataController.postUniversty)

    // get all universty
    app.get('/api/get/universty',contentDataController.getUniversties)

    // get all majors

    app.get('/api/get/majors',contentDataController.getMajors)


    // get spMajor
    app.get('/api/get/spMajors',contentDataController.getSpMajors)

      // Get all countres

      app.get('/api/getcountry', contentDataController.getCountry)


        // Get all city

        app.get('/api/getcity',contentDataController.getCity )


          // Add Company Sector
    app.post('/api/postsector',admin,contentDataController.postSector);

    // add company specialization

    app.post('/api/postspec',admin,contentDataController.postSpec);

    // Get all sectors

    app.get('/api/getsectors',contentDataController.getSectors );


    app.get('/api/getspec',contentDataController.getSpec);

        //Post Contract

        app.post('/api/postcontract',admin,contentDataController.postContract);

        // Get all contracts

        app.get('/api/getcontracts', contentDataController.getContracts)


        app.post('/api/post/skill',admin,contentDataController.postSkill  )

        app.post('/api/post/jobCategory',admin,contentDataController.postJobCategory )

        app.get('/api/get/allJobCategory',contentDataController.getJobCategories )

        app.post('/api/post/p_skill',admin,contentDataController.postPskill  )

        app.get('/api/get/skills',contentDataController.getSkill)

        app.get('/api/get/p_skills', contentDataController.getPskill)

}