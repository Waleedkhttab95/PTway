const servicesControllers = require('../controllers/shared/sharedServices')
const auth = require('../middleware/auth');

module.exports = (app) => {


    // Get all notifications content ..

    app.get('/api/get/notifications', auth,servicesControllers.getNotifications);


    // Edit notification
    app.put('/api/edit/notification', async (req, res) => {
        const content = req.body.content
        const date = req.body.date;

        const notification = await Notification.updateMany({ 'content': content },
            {

                $set: { date: date }
            }
        );

        res.status(200).send('Updated ');
    })

    // Get all notifications ..

    app.get('/api/get/allnotifications', auth,servicesControllers.getAllNotifications);

    // Get spicific notification ..

    app.get('/api/get/notification', auth,servicesControllers.getNotification)

    // Get last 4 notification

    app.get('/api/get/lastnotifcation', auth,servicesControllers.getLastNotification)

    // unread notificatoion
    app.get('/api/get/unread/notification', auth,servicesControllers.unReadNotifications)

    //DELETE notifiction by Id
    app.delete('/api/deletenoti',servicesControllers.deleteNot);

    // Start Job

    app.post('/api/start/job',servicesControllers.startJob)


    app.post('/api/end/job',servicesControllers.endJob)

    // cintact us
    app.post('/api/contactUs',servicesControllers.contactUs)

    //search for emp count (Main page)
    app.get('/api/getEmp',servicesControllers.searchEmp)



    // retrive all phone numbers By Job AD

    // app.get('/api/get/phonenumbers',async (req,res) =>{
    //     const jobId = req.query.jobAd;
    //     var data = []
    //     var dataModel ;

    //     const job = await JobAd.findById(jobId);
    //     if(!job) return res.status('401').send('not found jobAd !')

    //     const results = await Candidate.find({'jobAd': jobId});
    //     if(!job) return res.status('401').send('not found Candidate !')
    //     if(results){
    //         results.forEach( result =>{


    //             var number =  UserInfo.findOne({'user':result.candidateName}).populate('user').then(num =>{
    //                dataModel = {
    //                    number: num.mobile,
    //                    name: num.fullName,
    //                    email: num.user.email
    //                }
    //                data.push(dataModel)

    //                 if(data.length == results.length){

    //                     return  res.status(200).send(data)


    //                 }
    //             });



    //         })

    //     }
    // })


    // retrive all phone numbers By city and Major

    // app.get('/api/get/phonenumbersByCityAndMajor',async (req,res) =>{
    //     const city = req.query.city;
    //     const major = req.query.major;
    //     const spMajor = req.query.spMajor;
    //     var data = []
    //     var dataModel ;


    //     const results = await UserInfo.find({'city': city,'public_Major':major,'spMajor':spMajor}).populate('user')
    //     .select('fullName mobile user -_id');
    //     if(!results) return res.status('401').send('not found Candidate !')

    //     if(results){
    //         results.forEach( num =>{
    //             dataModel = {
    //                 number: num.mobile,
    //                 name: num.fullName,
    //                 email: num.user.email
    //             }
    //             data.push(dataModel)

    //                 if(data.length == results.length){

    //                     return  res.status(200).send(data)


    //                 }

    //         })

    //     }



    // })




    // By city and gender

    // app.get('/api/get/phonenumbersByCityAndGender',async (req,res) =>{
    //     const city = req.query.city;

    //     var data = []
    //     var dataModel ;


    //     const results = await UserInfo.find({'city': city,'gender':'انثى'}).populate('user')
    //     .select('fullName mobile user -_id');
    //     if(results){
    //         results.forEach( num =>{

    //             dataModel = {
    //                 number: num.mobile,
    //                 name: num.fullName,
    //                 email: num.user.email
    //             }
    //             data.push(dataModel)

    //                 if(data.length == results.length){

    //                     return  res.status(200).send(data)


    //                 }

    //         })

    //     }



    // })




    // By study degree
    //   app.get('/api/get/usersByStudeyDegree',async (req,res) =>{
    //     const users = await UserInfo.find({"jobCategory":[]})
    //     .populate("user","email -_id")
    //     .select("user -_id")

    //     res.status(200).send(users)
    //   })

}

