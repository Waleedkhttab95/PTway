const { Country } = require('../../models/Shared/Country');
const { City } = require('../../models/Shared/City');

module.exports = (app) => {


    // **********************************

    // Just when the admin wanna to search for country, we will search by id , name

    // **********************************

    // By Id
    app.get('/api/get/searchCountryById/:id?', async (req, res) => {
        try {
            const id = req.query.id;
            const country = await Country.findById(id);
            if (!country) {
                res.status(400).json('الدولة غير مسجلة');
            }
            res.status(200).send(country);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // By name
    app.get('/api/get/searchCountryByName/:Name?', async (req, res) => {
        try {
            const Name = req.query.Name;
            const country = await Country.findOne({ 'countryName': { '$regex': Name, '$options': 'i' } }); 
            if (!country) {
                res.status(400).json('الدولة غير مسجلة');
            }
            res.status(200).send(country);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    //  get all
    app.get('/api/get/allCountries', async (req, res) => {
        try {
            const countries = await Country.find();
            if (!countries) {
                res.status(400).send('لا يوجد دول');
            }
            res.status(200).send(countries);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }

    });

    // **********************************

    // Just when the admin wanna to search for city, we will search by id , name

    // **********************************

    // By Id
    app.get('/api/get/searchCityById/:id?', async (req, res) => {
        try {
            const id = req.query.id;
            const city = await City.findById(id);
            if (!city) {
                res.status(400).json('المدينة غير مسجلة');
            }
            res.status(200).send(city);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // By name
    app.get('/api/get/searchCityByName/:Name?', async (req, res) => {
        try {
            const Name = req.query.Name;
            const city = await City.findOne({ 'cityName': { '$regex': Name, '$options': 'i' } }); 
            if (!city) {
                res.status(400).json('المدينة غير مسجلة');
            }
            res.status(200).send(city);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // GET cities By Country name
    app.get('/api/get/searchCityByCountryName/:Name?', async (req, res) => {
        try {
            const Name = req.query.Name;
            const country = await Country.findOne({ 'countryName': { '$regex': Name, '$options': 'i' } }); // could be many countries with same first name,,
            if (!country) {
                res.status(400).json('الدولة غير مسجلة');
            }
            const countryId = country._id;
            const city = await City.findOne({ 'country' : countryId}); // could be many cities with same first name,,
            if (!city) {
                res.status(400).json('المدينة غير مسجلة');
            }
            res.status(200).send(city);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


        //  get all
        app.get('/api/get/allCities', async (req, res) => {
            try {
                const cities = await City.find();
                if (!cities) {
                    res.status(400).send('لا يوجد مدن');
                }
                res.status(200).send(cities);
            }
            catch (error) {
                console.log(error);
                res.status(400).send('خطأ');
            }
    
        });


    // *************************************
    // Now we do the CRUD for countries
    // *************************************

    // Create
    app.post('/api/post/country', async (req,res) =>{
        try {
            const countryName = req.body.countryName
            await new Country({
                countryName: countryName
            }).save()
            .then(result =>{
                res.status(200).send('تم إضافة الدولة');
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // Read
    // we will use search methods

    // Write
    // the concept behind the write is: search API will look for id, name 
    // and will return the country object , so we will use the object to write the info.
    app.put('/api/put/writeOnCountry', async (req, res) => {
        try {
            const country = req.body.country;
            const newName = req.body.countryName;
            if (!country) return res.status(400).json('الدولة غير مسجلة');
            const id = country._id;
            await Country.updateOne({ '_id': id }, {
                $set: { countryName: newName }
            });
            res.status(200).send('تم التغيير بنجاح');
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // Delete
    // the concept behind the delete is: search API will look for id, name 
    // and will return the country object , so we will use the object to delete the info.
    app.delete('/api/delete/deleteCountry', async (req, res) => {
        try {
            const country = req.body.country;
            if (!country) return res.status(400).json('الدولة غير مسجلة');
            const id = country._id;
            await Country.deleteOne({ '_id': id });
            res.status(200).send('تم حذف الدولة');
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // *************************************
    // Now we do the CRUD for cities
    // *************************************

    // Create
    app.post('/api/post/city', async (req,res) =>{
        try {
            const cityName = req.body.cityName;
            const countryName = req.body.countryName;
            const countryId = await Country.findOne({ 'countryName' : countryName });
            await new City({
                cityName: cityName,
                country: countryId
            }).save()
            .then(result =>{
                res.status(200).send(result);
            })
        } catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
        
    });


    // Read
    // we will use search methods

    // Write
    // the concept behind the write is: search API will look for id, name 
    // and will return the city object , so we will use the object to write the info.
    app.put('/api/put/writeOnCity', async (req, res) => {
        try {
            const city = req.body.city;
            if (!city) return res.status(400).json('المدينة غير مسجلة');
            const type = req.body.type;
            const value = req.body.value;
            switch (type) {
                case 'cityName':{
                    const id = city._id;
                    await City.updateOne({ '_id': id }, {
                        $set: { cityName: value }
                    });
                    break;
                }
                
                case 'countryName':{
                    const id = city._id;
                    const countryId = await Country.findOne({ 'countryName' : value});
                    await City.updateOne({ '_id': id }, {
                        $set: { country: countryId }
                    });
                    break;
                }
                default:
                    break;
            }
            res.status(200).send('تم التغيير بنجاح');
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // Delete
    // the concept behind the delete is: search API will look for id, name 
    // and will return the country object , so we will use the object to delete the info.
    app.delete('/api/delete/deleteCity', async (req, res) => {
        try {
            const city = req.body.city;
            if (!city) return res.status(400).json('الدولة غير مسجلة');
            const id = city._id;
            await City.deleteOne({ '_id': id });
            res.status(200).send('تم حذف المدينة');
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });




}