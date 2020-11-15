const auth = require('../middleware/auth');
const candidatesControllers = require('../controllers/company/Candidates');


module.exports = (app) => {

  // apply Job
  app.post('/api/postBodyC', auth, candidatesControllers.postCandidate);


  app.get('/api/getOneCandi', auth,candidatesControllers.getCandidates);

  // reject user
  app.put('/api/rejectCandidate', auth, candidatesControllers.rejectCandidate);

  // add to favorite list
  app.put('/api/addToFavList', auth, candidatesControllers.addToFavList);

  // get list of favorite users

  app.get('/api/getFilterCandidates',auth, candidatesControllers.getFavList);

  // send appointment
  app.post('/api/sendAppointment', auth , candidatesControllers.sendAppointment);

  //get Appointment details
  app.get('/api/getAppointment',auth, candidatesControllers.getAppointmentDetails);

  // change appointment status for each candidate
  app.put('/api/changeappointmentstatus',auth,candidatesControllers.changeAppointmentStatus);

}//endofapp