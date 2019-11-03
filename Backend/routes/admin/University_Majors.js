const { Universty } = require('../../models/Shared/Universty');
const { publicMajor } = require('../../models/Shared/Public_Major');
const { spMajor } = require('../../models/Shared/SpMajor');


module.exports = (app) => {


    // **********************************

    // Just when the admin wanna to search for University, we will search by id , name

    // **********************************

    // By Id
    app.get('/api/get/searchUniverstyById/:id?', async (req, res) => {
        try {
            const id = req.query.id;
            const universty = await Universty.findById(id);
            if (!universty) {
                res.status(400).json('الجامعة غير مسجلة');
            }
            res.status(200).send(universty);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // By name
    app.get('/api/get/searchUniverstyByName/:Name?', async (req, res) => {
        try {
            const Name = req.query.Name;
            const universty = await Universty.findOne({ 'universtyName': { '$regex': Name, '$options': 'i' } });
            if (!universty) {
                res.status(400).json('الجامعة غير مسجلة');
            }
            res.status(200).send(universty);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // Get all
    app.get('/api/get/allUniversty', async (req, res) => {
        try {
            const universities = await Universty.find();
            if (!universities) {
                res.status(400).send('لا يوجد جامعات');
            }
            res.status(200).send(universities);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }

    });


    // **********************************

    // Just when the admin wanna to search for Major, we will search by id , name

    // **********************************

    // By Id
    app.get('/api/get/searchMajorById/:id?', async (req, res) => {
        try {
            const id = req.query.id;
            const major = await publicMajor.findById(id);
            if (!major) {
                res.status(400).json('التخصص غير مسجل');
            }
            res.status(200).send(major);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // By name
    app.get('/api/get/searchMajorByName/:Name?', async (req, res) => {
        try {
            const Name = req.query.Name;
            const major = await publicMajor.findOne({ 'majorName': { '$regex': Name, '$options': 'i' } });
            if (!major) {
                res.status(400).json('التخصص غير مسجل');
            }
            res.status(200).send(major);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // Get all
    app.get('/api/get/allMajors', async (req, res) => {
        try {
            const majors = await publicMajor.find();
            if (!majors) {
                res.status(400).send('لا يوجد تخصصات');
            }
            res.status(200).send(majors);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }

    });


    // **********************************

    // Just when the admin wanna to search for sub-Major, we will search by id , name

    // **********************************

    // By Id
    app.get('/api/get/searchSubMajorById/:id?', async (req, res) => {
        try {
            const id = req.query.id;
            const spmajor = await spMajor.findById(id);
            if (!spmajor) {
                res.status(400).json('التخصص الدقيق غير مسجل');
            }
            res.status(200).send(spmajor);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // By name
    app.get('/api/get/searchSubMajorByName/:Name?', async (req, res) => {
        try {
            const Name = req.query.Name;
            const spmajor = await spMajor.findOne({ 'majorName': { '$regex': Name, '$options': 'i' } });
            if (!spmajor) {
                res.status(400).json('التخصص الدقيق غير مسجل');
            }
            res.status(200).send(spmajor);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });

    // // Get all
    // app.get('/api/get/allSubMajors', async (req, res) => {
    //     try {
    //         const Submajors = await spMajor.find();
    //         if (!Submajors) {
    //             res.status(400).send('لا يوجد تخصصات');
    //         }
    //         res.status(200).send(Submajors);
    //     }
    //     catch (error) {
    //         console.log(error);
    //         res.status(400).send('خطأ');
    //     }

    // });


    // GET subMajor By Major name
    app.get('/api/get/searchSubMajorByMajorName/:Name?', async (req, res) => {
        try {
            const Name = req.query.Name;
            const major = await publicMajor.findOne({ 'majorName': { '$regex': Name, '$options': 'i' } });
            if (!major) {
                res.status(400).json('التخصص غير مسجل');
            }
            const majorId = major._id;
            const spmajor = await spMajor.find({ 'public_Major': majorId }).populate('public_Major'); // could be many subMajors with same name,,
            if (!spmajor) {
                res.status(400).json('التخصص الدقيق غير مسجل');
            }
            res.status(200).send(spmajor);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // *************************************
    // Now we do the CRUD for universties 
    // *************************************

    // Create
    app.post('/api/post/university', (req, res) => {
        try {
            const universtyName = req.body.universtyName;
            if (!universtyName) return res.status(400).send('المعلومات غير مكتمله');
            new Universty({
                universtyName: universtyName
            }).save()
                .then(result => {
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
    // and will return the university object , so we will use the object to write the info.
    app.put('/api/put/writeOnUniversity', async (req, res) => {
        try {
            const university = req.body.university;
            const newName = req.body.universtyName;
            if (!university || !newName) return res.status(400).json('الجامعة غير مسجلة');
            const id = university._id;
            await Universty.updateOne({ '_id': id }, {
                $set: { 'universtyName': newName }
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
    // and will return the university object , so we will use the object to delete the info.
    app.delete('/api/delete/deleteUniversity', async (req, res) => {
        try {
            const university = req.body.university;
            if (!university) return res.status(400).json('الجامعة غير مسجلة');
            const id = university._id;
            await Universty.deleteOne({ '_id': id });
            res.status(200).send('تم حذف الجامعة');
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // *************************************
    // Now we do the CRUD for majors
    // *************************************

    // Create
    app.post('/api/post/major', (req, res) => {
        try {
            const major = req.body.majorName;
            const key = req.body.key;
            if (!major || !key) return res.status(400).send('المعلومات غير مكتمله');
            new publicMajor({
                key: key,
                majorName: major
            }).save()
                .then(result => {
                    res.send(result);
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
    // and will return the major object , so we will use the object to write the info.
    app.put('/api/put/writeOnMajor', async (req, res) => {
        try {
            const major = req.body.major; // this is a major obj returns from search
            const newName = req.body.majorName;
            if (!major) return res.status(400).json('التخصص غير مسجل');
            const id = major._id;
            await publicMajor.updateOne({ '_id': id }, {
                $set: { 'majorName': newName }
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
    // and will return the major object , so we will use the object to delete the info.
    app.delete('/api/delete/deleteMajor', async (req, res) => {
        try {
            const major = req.body.major;
            if (!major) return res.status(400).json('التخصص غير مسجل');
            const id = major._id;
            await publicMajor.deleteOne({ '_id': id });
            res.status(200).send('تم حذف التخصص');
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


    // *************************************
    // Now we do the CRUD for sub-majors
    // *************************************

    // Create
    app.post('/api/post/subMajor', async (req, res) => {
        try {
            const subMajor = req.body.subMajorName;
            const key = req.body.key;
            let public_Major = await publicMajor.findOne({ 'majorName': { '$regex': req.body.public_Major, '$options': 'i' } }).populate('public_Major');
            // public_Major = public_Major._id;
            if (!subMajor || !key || !public_Major) return res.status(400).send('المعلومات غير مكتمله');
            
            new spMajor({
                key: key,
                majorName: subMajor,
                public_Major: public_Major
            }).save()
                .then(result => {
                    res.send(result);
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
    // and will return the major object , so we will use the object to write the info.
    app.put('/api/put/writeOnSubMajor', async (req, res) => {
        try {
            const subMajor = req.body.subMajor; // this is a SubMajor obj returns from search
            const type = req.body.type;
            const value = req.body.value;
            if (!subMajor || !type || !value) return res.status(400).send('المعلومات غير مكتمله');
            const id = subMajor._id;
            switch (type) {
                case 'majorName':
                    {
                        await spMajor.updateOne({ '_id': id }, {
                            $set: { 'majorName': value }
                        });
                        break;
                    }
                case 'public_Major':
                    {
                        const public_Major = await publicMajor.findOne({ 'majorName': { '$regex': value, '$options': 'i' } });
                        if (!public_Major) return res.status(400).send('التخصص غير مسجل');
                        const publicMajorId = public_Major._id;
                        await spMajor.updateOne({ '_id': id }, {
                            $set: { 'public_Major': publicMajorId }
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
    // and will return the major object , so we will use the object to delete the info.
    app.delete('/api/delete/deleteSubMajor', async (req, res) => {
        try {
            const subMajor = req.body.subMajor;
            if (!subMajor) return res.status(400).json('التخصص غير مسجل');
            const id = subMajor._id;
            await spMajor.deleteOne({ '_id': id });
            res.status(200).send('تم حذف التخصص');
        }
        catch (error) {
            console.log(error);
            res.status(400).send('خطأ');
        }
    });


}