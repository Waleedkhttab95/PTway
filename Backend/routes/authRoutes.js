const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const auth = require('../middleware/auth');
const { Company, validateCompany } = require('../models/Companies/Companies');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const keys = require('../../Backend/config/keys');
const { sendResetEmail } = require('../services/email/mail');


module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send("");
  });
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  // for user
  app.post('/api/login', async (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    let user = await User.findOne({ email: req.body.email.toLowerCase() });
    if (!user) return res.status(400).send('خطأ في البريد أو الرقم السرّي');

    const validPassword = await bcrypt.compare(req.body.password, user.password, (error, result) => {
      console.log(user.isConfirmed)
      if (!result) return res.status(400).send('خطأ في البريد أو الرقم السرّي');

      if (user.isConfirmed != 'undefined') {


        if (user.isConfirmed == false) {
          console.log('false')
          return res.status(400).send('نرجو تفعيل الحساب أولًا'); // in case he didnt confirm

        }
      }
      const token = user.generateAuthToken();
      res.status(200).json({
        token: token,
        userId: user._id,
        isAdmin: user.isAdmin ? true: false,
      });;
    });

  });

  app.get('/api/currentuser', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
  });

  app.get('/api/confirmation/:token', async (req, res) => {
    try {
      const decoded = jwt.verify(req.params.token, keys.jwtKey);
      console.log(decoded.email);
      await User.findOneAndUpdate({ email: decoded.email }, { isConfirmed: true });
    } catch (e) {
      res.send('error' + e);
    }
    const path = keys.redirect_url + '/sign-in';
    return res.redirect(path);
  });

  app.put('/api/changePassword',auth, async (req, res) => {
    //const user = await User.findOne({ email: req.body.email });
    const userId = req.user._id;
    await bcrypt.compare(req.body.prevPassword, req.user.password, async (error, result) => {
      if (!result) {
        return res.status(400).send('الرقم السري القديم غير صحيح');
      }

      else {
        const salt = await bcrypt.genSalt(10, (error, hash) => {
          if (error) res.status(400)
        });
        await bcrypt.hash(req.body.newPassword, salt, null, async (error, hash) => {
          if (error) res.status(400)
          await User.findByIdAndUpdate(userId, { $set: { password: hash } }, { new: true });
        });
        return res.status(200).send('غيّرنا لك الرقم السري');
      }
    });
  });

  app.post('/api/resetPassword', async (req, res) => {
    const user = await User.findOne({ email: req.body.email.toLowerCase() });
    if (!user) {
      return res.status(400).send('البريد المدخل غير صحيح');
    }
    else {
      sendResetEmail(user._id, user.email, user.firstName);
      return res.status(200).send('ارسلنا بريد تغيير الرقم السري لبريدك');
    }
  });

  // just to redirect from the url that sends to the email
  app.get('/api/reset', async (req, res) => {
    const id = req.query.id;
    console.log(id);
    const path = keys.redirect_url + `/resetPassword?id=` + id;
    console.log(path)
    return res.redirect(path);
  });

  // TO change the password
  app.put('/api/reset', async (req, res) => {
    
    const user = await User.findById(req.query.id);
  
    if (user == null) {
      try {
        console.log('Test reset')
        const salt = await bcrypt.genSalt(10, (error, hash) => {
          if (error) res.status(400)
        });
        await bcrypt.hash(req.body.newPassword, salt, null, async (error, hash) => {
          if (error) res.status(400)
          await Company.findByIdAndUpdate(req.query.id, { $set: { password: hash } }, { new: true });
          res.status(204).send('done changing');
        });
        // res.status(200).send('The password has been changed');
        console.log('done');

      } catch (e) {
        res.send('error' + e);
      }
    }
    else {
      try {
        const salt = await bcrypt.genSalt(10, (error, hash) => {
          if (error) res.status(400)
        });
        await bcrypt.hash(req.body.newPassword, salt, null, async (error, hash) => {
          if (error) res.status(400)
          await User.findByIdAndUpdate(req.query.id, { $set: { password: hash } }, { new: true });
          res.status(204).send('done changing');
        });
        // res.status(200).send('The password has been changed');
        console.log('done');

      } catch (e) {
        res.send('error' + e);
      }
    }


  });

  // for company 

  app.post('/api/com_login', async (req, res) => {
    // const {error} = validateCompany(req.body);
    // if(error) return res.status(400).send(error.details[0].message);


    let company = await Company.findOne({ email: req.body.email.toLowerCase() });
    if (!company) return res.status(400).send('خطأ في البريد أو الرقم السرّي');
    const validPassword = await bcrypt.compare(req.body.password, company.password, (error, result) => {

      if (!result) return res.status(400).send('خطأ في البريد أو الرقم السرّي');
      if (company.isActive == false) return res.status(400).send('يجب الموافقة من طرف إدارة الموقع .');

      if (company.isConfirmed != undefined) {
        if (company.isConfirmed == false) {
          return res.status(400).send('نرجو تفعيل الحساب أولًا'); // in case he didnt confirm

        }
      }

      const token = company.generateAuthToken();
      res.status(200).json({
        token: token,
        userId: company._id,
        companyName: company.companyName
      });;
    });

  });

  app.get('/api/currentcompany', auth, async (req, res) => {
    const company = await Company.findById(req.user._id).select('-password');
    res.send(company);
  });

  app.get('/api/com_confirmation/:token', async (req, res) => {
    try {
      const decoded = jwt.verify(req.params.token, keys.jwtKey);
      await Company.findOneAndUpdate({ email: decoded.email }, { isConfirmed: true });
    } catch (e) {
      res.send('error' + e);
    }
    const path = keys.redirect_url + '/sign-in'
    return res.redirect(path);
  });

  app.put('/api/com_changePassword', async (req, res) => {
    const company = await Company.findOne({ email: req.body.email });
    const companyId = company._id;
    await bcrypt.compare(req.body.prevPassword, company.password, async (error, result) => {
      if (!result) {
        return res.status(400).send('الرقم السري القديم غير صحيح');
      }

      else {
        const salt = await bcrypt.genSalt(10, (error, hash) => {
          if (error) res.status(400)
        });
        await bcrypt.hash(req.body.newPassword, salt, null, async (error, hash) => {
          if (error) res.status(400)
          await Company.findByIdAndUpdate(companyId, { $set: { password: hash } }, { new: true });
        });
        return res.status(200).send('غيّرنا لكم الرقم السري');
      }
    });
  });

  app.post('/api/com_resetPassword', async (req, res) => {
    const company = await Company.findOne({ email: req.body.email.toLowerCase() });
    if (!company) {
      return res.status(400).send('البريد المدخل غير صحيح');
    }
    else {
      sendResetEmail(company._id, company.email);
      return res.status(200).send('ارسلنا بريد تغيير الرقم السري لبريدك');
    }
  });



  app.put('/api/com_reset', async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10, (error, hash) => {
        if (error) res.status(400)
      });
      await bcrypt.hash(req.body.newPassword, salt, null, async (error, hash) => {
        if (error) res.status(400)
        console.log(req.query.id)
        console.log(hash)
        await Company.findByIdAndUpdate(req.query.id, { $set: { password: hash } }, { new: true });
        res.status(204).send('done changing');
      });
      // res.status(200).send('The password has been changed');
      console.log('done');

    } catch (e) {
      res.send('error' + e);
    }
  });


  app.get('/api/info', async (req, res) => {
    const user2 = await User.findOne({ email: req.body.email });
    console.log('user2.password = ' + user2.password);
    res.send(user2.password);
  });

  function validate(req) {
    const Schema = {

      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).required(),
    };

    return Joi.validate(req, Schema);
  }
};
