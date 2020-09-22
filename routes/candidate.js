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



}//endofapp