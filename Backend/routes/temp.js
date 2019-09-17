const {temp} = require('../models/temp')


module.exports = (app) =>{

app.post('/api/temp/post', async (req,res) =>{
new temp({
    fullName: req.body.fullName,
    study_degree: req.body.study_degree,
    gender: req.body.gender,
    mobile:req.body.mobile,
    Age: req.body.Age,
    expirence: req.body.expirence,
    public_Major: req.body.public_Major,
    languages: req.body.languages,
    skills: req.body.skills,
    about: req.body.about
}).save()
.then(user => {
   console.log(user)
   res.send(user);
});
})

}