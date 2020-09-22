const authControllers = require('../controllers/Auth');
const auth = require('../middleware/auth');


                      // Auth Routes Here Broooooo \\\\\\
                          // By Waleed KH \\\\\\\

module.exports = (app) => {

  app.get('/api/logout',authControllers.userLogout);


  app.post('/api/login',authControllers.userLogin );



  app.get('/api/confirmation/:token',authControllers.userConfirmation );

  app.put('/api/changePassword',auth,authControllers.changeUserPassword);


  app.post('/api/resetPassword',authControllers.resetPassword);

  app.get('/api/reset',authControllers.reset);


  app.put('/api/reset',authControllers.changePassReset);


  // for company

  app.post('/api/com_login', authControllers.companyLogin);


  app.get('/api/com_confirmation/:token',authControllers.companyConfirmation );

  app.put('/api/com_changePassword',authControllers.changeCompanyPassword );

  app.post('/api/com_resetPassword',authControllers.sendResetPassword);

  app.put('/api/changePasswordCompany',auth,authControllers.chabngeCompanyPassword);

  app.put('/api/com_reset',authControllers.resetPasswordCompany );

};
