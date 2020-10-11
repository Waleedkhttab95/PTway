const registretionControllers = require('../controllers/shared/Registretion');
const auth = require('../middleware/auth');

module.exports = (app) => {

  // User Registrion *

  app.post('/api/userRegistreing', registretionControllers.userRegister);

  // sub account Registrion '
  app.post('/api/subUserRegistreing', auth, registretionControllers.subUserRegister);


  // for Companies Regitstrion *

  app.post('/api/companyRegistreing', registretionControllers.companyRegister);

  // change supervisor info

  app.put('/api/changeSuperVisor', auth, registretionControllers.changeSuperVisorInfo);



  app.post('/api/subcompanyRegistreing', auth, registretionControllers.subCompanyRegister);



  app.post('/api/resend', registretionControllers.resend);
};



