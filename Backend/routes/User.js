const {User} = require('../models/Users/User');
const {Skills} = require('../models/Users/skills');
const {PersonalSkills} = require('../models/Users/Personal_Skills');
const auth = require('../middleware/auth');

module.exports = (app) => {

    app.get('/api/get/user', auth, async (req,res) =>{
        const id = req.query.id;

        const user = await User.findById(id);

        const fullName = user.firstName +' '+ user.lastName;

        res.status(200).json({
            userName: fullName
          
          });
    })

    app.post('/api/post/skill',  (req,res) =>{
        new Skills({
            skillName: req.body.skillName
        }).save()
        .then(result =>{
            res.send(result)
        })
    })

    app.post('/api/post/p_skill',  (req,res) =>{
        new PersonalSkills({
            skillName: req.body.skillName
        }).save()
        .then(result =>{
            res.send(result)
        })
    })

    app.get('/api/get/skills', async (req,res) =>{
        const skills = await Skills.find();
        res.send(skills)
    })

    app.get('/api/get/p_skills', async (req,res) =>{
        const PersonalS = await PersonalSkills.find();
        res.send(PersonalS);
    })

    app.put('/api/subuser', auth, async (req,res) =>{

        let user = await User.findOne({ email: req.body.email });

        if (! user) return res.status(400).send('User not exist');

        const update = await User.findOneAndUpdate({'_id': user._id},
        {
          $set: {
              isSubUser : true,
              company: req.user._id
          }
      })

      res.status(200).send('Successful !');


    })
}