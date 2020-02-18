const { Accepted } = require('../models/Companies/Accepted');
const mongoose = require('mongoose');
const { User } = require('../models/Users/User');
const { Candidate } = require('../models/Companies/Candidates');
const { JobAd } = require('../models/Companies/Job_Ad');
const auth = require('../middleware/auth');


module.exports = (app) => {
    app.post('/api/postAcc', auth, async (req, res) => {
        new Accepted({
            jobAd: req.body.jobAd,
            acceptedName: req.body.acceptedName,
            createDate: Date.now()
        }).save()
            .then(async result => {
                const req_number = await JobAd.findById(req.body.jobAd);
                const job = await JobAd.updateOne({ '_id': req.body.jobAd }, {
                    $set: {
                        limit_Number: req_number.limit_Number + 1
                    }
                })

                const deleteCandidate = await Candidate.remove({ 'candidateName': req.body.acceptedName });
                res.send(result);
            })
    });

    app.get('/api/getAllAccepts', auth, async (req, res) => {
        const result = await Accepted.find();
        res.send(result);
    });

    app.get('/api/getOneAccepted', auth, async (req, res) => {
        const usernames = [];

        const response = await Accepted.find({ 'jobAd': req.query.jobAd })
        if (response) {

            // const AcceptedNames = oneR.map(x => x.acceptedName);
            // const ids = oneR.map(x => x._id);

            // for (var i = 0; i < AcceptedNames.length; i++) {

            //     const users = await User.findById(AcceptedNames[i]).select("firstName lastName -_id");
            //     usernames.push(users);
            // }

            // const username = usernames.map(x => x.firstName + ' ' + x.lastName);


            res.status(200).json({
                response
            });
        }

        else
            res.send("not found");
    });
}