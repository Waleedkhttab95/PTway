const auth = require('../middleware/auth');
const userControllers = require('../controllers/user/userProccess');


module.exports = (app,client) => {

    app.get('/api/get/user', auth,userControllers.getUser)


    app.put('/api/subuser', auth, userControllers.subUser)

    // Get Jobs by city
    app.get('/api/getJobsByCity',auth, userControllers.getJobByCity)

    app.put('/api/changeEmailNotification', auth , userControllers.changeEmailNotification);

    // disable Account
    app.put('/api/disableAccount', auth ,userControllers.disableAccount);

}