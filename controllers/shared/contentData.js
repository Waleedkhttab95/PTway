const {City} = require('../../models/Shared/City');
const {Country} = require('../../models/Shared/Country');
const {spMajor} = require('../../models/Shared/SpMajor');
const {publicMajor} = require('../../models/Shared/Public_Major');
const {Universty} = require('../../models/Shared/Universty');
const { Sector } = require('../../models/Companies/Sector');
const { CompanySpecialist } = require('../../models/Companies/CompanySpecialist');
const { Contract } = require('../../models/Companies/Contract');
const {client} = require('../../index');


    exports.postCountry =  (req,res) =>{
        new Country({
            countryName: req.body.countryName
        }).save()
        .then(result =>{
            res.send(result);
        })

    };

    exports.postCity =  (req,res) =>{

        new City({
            cityName: req.body.cityName,
            country: req.body.countryId
        }).save()
        .then(result =>{
            res.send(result);
        })

    }

    exports.postMajor =  (req,res) =>{
        new publicMajor({
            key: req.body.key,
            majorName: req.body.majorName
            }).save()
            .then(result =>{
                res.send(result);

        })
    }

    exports.postSpMajor =  (req,res) =>{
        new spMajor({
            key: req.body.key,
            majorName: req.body.majorName,
            public_Major: req.body.public_Major
            }).save()
            .then(result =>{
                res.send(result);

        })
    }

    exports.postUniversty =  (req,res) =>{
        new Universty({
            universtyName: req.body.universtyName
            }).save()
            .then(result =>{
                res.send(result);

        })
    }

    exports.getUniversties =  async(req,res) =>{

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

    };

    exports.getMajors =  async(req,res) =>{
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

    }

    exports.getSpMajors =  async(req,res) =>{

        const result = await spMajor.find({'public_Major' : req.query.id})
        res.send(result);
    }

   exports.getCity = async (req,res) =>{
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


        }

    exports.getCountry = async(req,res) =>{

        const Con = await Country.find()
        res.send(Con);
        }

    exports.postSector =  (req, res) => {

        new Sector({
            sectorName: req.body.sectorName
        }).save()
            .then(result => {
                res.send(result);
            })

    }

    exports.postSpec =  (req, res) => {

        new CompanySpecialist({
            specialistName: req.body.specialistName
        }).save()
            .then(result => {
                res.send(result);
            })

    }

    exports.getSectors = async (req, res) => {

        const type = req.query.type;

        client.get(type, async (err, data) => {
            if (err) throw err;

            if (data !== null) {
                res.status(201).json({
                    sectors: data
                });
            }
            else {
                const sectors = await Sector.find();
                var sectorsToString = JSON.stringify(sectors);
                client.setex(type, 3200, sectorsToString)
                res.status(201).json({
                    sectors: sectorsToString
                });
            }

        })
    }

    exports.getSpec =  async (req, res) => {

        const type = req.query.type;

        client.get(type, async (err, data) => {
            if (err) throw err;

            if (data !== null) {
                res.status(201).json({
                    Cs: data
                });
            }
            else {
                const Cs = await CompanySpecialist.find();
                var CsToString = JSON.stringify(Cs);
                client.setex(type, 3200, CsToString)
                res.status(201).json({
                    Cs: CsToString
                });
            }

        })
    }

    exports.postContract =  (req, res) => {

        new Contract({
            contractName: req.body.contractName,
            days: req.body.days
        }).save()
            .then(result => {
                res.send(result);
            })

    }

    exports.getContracts = async (req, res) => {
        const contractt = await Contract.find()
        res.send(contractt);
    }


