const informationControllers = require('../controllers/shared/Information')
const auth = require('../middleware/auth');
const file = require('../middleware/file');

module.exports = (app) => {
    //post user information
    app.post('/api/postuserinfo', auth, file,informationControllers.postUserInfo)


    //post company information
    app.post('/api/postcompanyinfo', auth, file,informationControllers.postCompanyInfo)

    //Get user info by USerID
    app.get('/api/getuserinfo', auth,informationControllers.getUserInfo)


    //Get user info by USerID for edit
    app.get('/api/getuserinfo/edit', auth,informationControllers.getUserInfoForEdit)


    //Get user info by ID
    app.get('/api/get/userinfo', auth,informationControllers.getUserInfoById)

    // Get company info by CompanyID

    app.get('/api/getcompanyinfo', auth,informationControllers.getCompanyInfo)

    //Get company info by CompanyID
    app.get('/api/getcompanyinfoById', auth,informationControllers.getCompanyInfoById)

    app.put('/api/put/userinfo', [auth, file],informationControllers.PutUserInfo)

    app.put('/api/put/companyinfo', [auth, file],informationControllers.PutCompanyInfo)


}