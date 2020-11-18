const {User} = require('../../models/Users/User');
const {JobAd} = require('../../models/Companies/Job_Ad');
const { UserInfo } = require('../../models/Users/User_Info');

exports.getUser =  async (req,res) =>{
    const id = req.query.id;

    const user = await User.findById(id);

    const fullName = user.firstName +' '+ user.lastName;

    res.status(200).json({
        userName: fullName

      });
}

exports.subUser = async (req,res) =>{

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


}

exports.getJobByCity = async(req,res) =>{
    const userInfo = await userInfo.findOne({'user': req.user._id});
    if(!userInfo) return res.status(401).send('user not found')
    if(!userInfo.city) return res.status(401).send('user not found')

    const jobs = await JobAd.find({'city': userInfo.city});

    res.status(200).send(jobs)
}

exports.changeEmailNotification = async(req,res) =>{
    const user = await User.findByIdAndUpdate(req.user._id,
    { $set: { email_notification: req.body.status } }
    );
    return res.status(200).send('Done . ');


}

exports.disableAccount =  async(req,res) =>{
    const user = await User.findByIdAndUpdate(req.user._id,
    { $set: { isConfirmed: false } }
    );
    return res.status(200).send('updated . ');


}

// get all apointments for user
exports.getAllAppointments = async (req,res) =>{

   var result = [];
    var temp ;
    var pageNo = parseInt(req.query.pageNo)
    var size = 10
    var query = {}

    if(pageNo < 0 || pageNo === 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response)
  }

  query.skip = size * (pageNo - 1)
  query.limit = size;




  const appointments = await UserInfo
  .find({user: req.user._id},{},query)
  .select('appointments -_id')
  .populate('appointments')

  if(!appointments) return res.status(200).json({appointments:[],totalPages:0})

  const appointmentsCounts = appointments.length;
  var totalPages = Math.ceil(appointmentsCounts / size)

  console.log(appointments,totalPages)
    res.status(200).json({
        appointments: appointments,
        totalPages
    });
}


exports.getAdmins = async(req,res) =>{
    let Admins = await User.find({'isAdmin': true}).select('email -_id');
    return Admins;
}