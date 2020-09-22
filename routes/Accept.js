const acceptedControllers = require('../controllers/company/AcceptedUsers');
const auth = require('../middleware/auth');


module.exports = (app) => {
    app.post('/api/postAcc', auth, acceptedControllers.acceptUserForJob);



    app.get('/api/getOneAccepted', auth,acceptedControllers.getAccpted);
}