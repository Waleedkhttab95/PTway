const {City} = require('../models/Shared/City');
const {Country} = require('../models/Shared/Country');
const {spMajor} = require('../models/Shared/SpMajor');
const {publicMajor} = require('../models/Shared/Public_Major');
const {Universty} = require('../models/Shared/Universty');
module.exports = (app,client) => {

    // Post Country

    app.post('/api/postcountry', (req,res) =>{
        new Country({
            countryName: req.body.countryName
        }).save()
        .then(result =>{
            res.send(result);
        })

    })

    // post City

    app.post('/api/postcity', (req,res) =>{

        new City({
            cityName: req.body.cityName,
            country: req.body.countryId
        }).save()
        .then(result =>{
            res.send(result);
        })

    })

    app.post('/api/post/major', (req,res) =>{
        new publicMajor({
            key: req.body.key,
            majorName: req.body.majorName
            }).save()
            .then(result =>{
                res.send(result);

        })
    })

    app.post('/api/post/spMajor', (req,res) =>{
        new spMajor({
            key: req.body.key,
            majorName: req.body.majorName,
            public_Major: req.body.public_Major
            }).save()
            .then(result =>{
                res.send(result);

        })
    })


    app.post('/api/post/universty', (req,res) =>{
        new Universty({
            universtyName: req.body.universtyName
            }).save()
            .then(result =>{
                res.send(result);

        })
    })

    // get all universty
    app.get('/api/get/universty', async(req,res) =>{

        const type = req.query.type;

        client.get(type,async (err,data) =>{
            if(err) throw err;

            if(data !== null) {
                res.status(201).json({
                    universty:data
                });
            }
            else{
                const uni = await Universty.find()
                var universtyToString = JSON.stringify(uni) ;
        client.setex(type,3200,universtyToString)
        res.status(201).json({
            universty:universtyToString
        });
    }

        })

    })

    // get all majors

    app.get('/api/get/majors', async(req,res) =>{
        const type = req.query.type;

        client.get(type,async (err,data) =>{
            if(err) throw err;

            if(data !== null) {
                res.status(201).json({
                    public_Major:data
                });
            }
            else{
                const result = await publicMajor.find()
                var resultToString = JSON.stringify(result) ;
        client.setex(type,3200,resultToString)
        res.status(201).json({
            public_Major:resultToString
        });
    }

        })

  })


    // get spMajor
    app.get('/api/get/spMajors', async(req,res) =>{

        const result = await spMajor.find({'public_Major' : req.query.id})
        res.send(result);
    })

      // Get all countres

      app.get('/api/getcountry', async(req,res) =>{

        const Con = await Country.find()
        res.send(Con);
        })


        // Get all city

        app.get('/api/getcity', async (req,res) =>{
            const type = req.query.type;

            client.get(type,async (err,data) =>{
                if(err) throw err;

                if(data !== null) {
                    res.status(201).json({
                        cities:data
                    });
                }
                else{
            const cityy = await City.find();
            var cityAsString = JSON.stringify(cityy) ;
            client.setex(type,3200,cityAsString)
            res.status(201).json({
                cities:cityAsString
            });
        }


            })


            })

}