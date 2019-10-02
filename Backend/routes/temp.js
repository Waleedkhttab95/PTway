const {temp} = require('../models/temp')
const {tempExp} = require('../models/temp-exprince')

module.exports = (app) =>{

app.post('/api/temp/post', async (req,res) =>{
   var skillsArr = [];
   var coursesArr = [];
   var User;
   skillsArr.push(req.body.skill1)
   skillsArr.push(req.body.skill2)
   skillsArr.push(req.body.skill3)
   skillsArr.push(req.body.skill4)
   coursesArr.push(req.body.course1)
   coursesArr.push(req.body.course2)
   coursesArr.push(req.body.course3)
   coursesArr.push(req.body.course4)



new temp({
    fullName: req.body.fullName,
    study_degree: req.body.study_degree,
    gender: req.body.gender,
    mobile:req.body.mobile,
    nationalty:req.body.nationalty,
    birthDate: req.body.birthDate,
    universty: req.body.universty,
    major: req.body.major,
    email: req.body.email,
    courses: coursesArr,
    skills: skillsArr,
    about: req.body.about
}).save()
.then(user => {
  console.log(req.body.date_work1)
      new tempExp({
         temp: user._id,
         expName: req.body.work1,
         from:req.body.workname1,
         date: req.body.date_work1,
         expName2: req.body.work2,
         from2:req.body.workname2,
         date2: req.body.date_work2,
         expName3: req.body.work3,
         from3:req.body.workname3,
         date3: req.body.date_work3,
      }).save()
      .then(u =>{
         console.log(u)
      })
   

});



res.status(200).send(User)


})

}