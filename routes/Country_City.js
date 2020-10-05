const contentDataController =  require('../controllers/shared/contentData');
module.exports = (app,client) => {

    // Post Country

    app.post('/api/postcountry',contentDataController.postCountry)

    // post City

    app.post('/api/postcity',contentDataController.postCity)

    app.post('/api/post/major',contentDataController.postMajor)

    app.post('/api/post/spMajor',contentDataController.postSpMajor)

    app.post('/api/post/universty',contentDataController.postUniversty)

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
    app.post('/api/postsector',contentDataController.postSector);

    // add company specialization

    app.post('/api/postspec',contentDataController.postSpec);

    // Get all sectors

    app.get('/api/getsectors',contentDataController.getSectors );


    app.get('/api/getspec',contentDataController.getSpec);

        //Post Contract

        app.post('/api/postcontract',contentDataController.postContract);

        // Get all contracts

        app.get('/api/getcontracts', contentDataController.getContracts)


}