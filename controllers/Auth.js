const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const { sendResetEmail,notifyAdmin } = require('../services/email/mail');
const { Company, validateCompany } = require('../models/Companies/Companies');
const Joi = require('joi');




// user Login //
exports.userLogin = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email.toLowerCase()});
    if (!user) return res.status(400).send('خطأ في البريد أو الرقم السرّي');

    const validPassword = await bcrypt.compare(req.body.password, user.password, (error, result) => {
      if (!result) return res.status(400).send('خطأ في البريد أو الرقم السرّي');

      if (user.isConfirmed != 'undefined') {


        if (user.isConfirmed == false) {
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

  };

  // user logout //
exports.userLogout =  (req, res) => {
    req.logout();
    res.send("");
  };

  // confirm user account By email \\
  exports.userConfirmation = async (req, res) => {
    try {
      const decoded = jwt.verify(req.params.token, keys.jwtKey);
      await User.findByIdAndUpdate(decoded._id, { isConfirmed: true });
    } catch (e) {
      res.send('error' + e);
    }
    const path = keys.redirect_url + '/user/login';
    return res.redirect(path);
  };

  // change user Password \\
  exports.changeUserPassword =  async (req, res) => {
    const user = await User.findById(req.user._id);
    const userId = req.user._id;
    await bcrypt.compare(req.body.prevPassword, user.password, async (error, result) => {
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
  };

  // reset user PAssword \\

  exports.resetPassword =  async (req, res) => {
    const user = await User.findOne({ email: req.body.email.toLowerCase().split(" ") });
    if (!user) {
      return res.status(400).send('البريد المدخل غير صحيح');
    }
    else {
      sendResetEmail(user._id, user.email, user.firstName);
      return res.status(200).send('ارسلنا بريد تغيير الرقم السري لبريدك');
    }
  }

    // just to redirect from the url that sends to the email

  exports.reset =  async (req, res) => {
    const id = req.query.id;
    const path = keys.redirect_url + `/resetPassword?id=` + id;
    return res.redirect(path);
  };

  exports.changePassReset =  async (req, res) => {

    const user = await User.findById(req.query.id);

    if (user == null) {
      try {
        const salt = await bcrypt.genSalt(10, (error, hash) => {
          if (error) res.status(400)
        });
        await bcrypt.hash(req.body.newPassword, salt, null, async (error, hash) => {
          if (error) res.status(400)
          await Company.findByIdAndUpdate(req.query.id, { $set: { password: hash } }, { new: true });
          res.status(204).send('done changing');
        });
        // res.status(200).send('The password has been changed');

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

      } catch (e) {
        res.send('error' + e);
      }
    }


  }


                              // COntrollers for Company Auth => <= \\

// company login
exports.companyLogin = async (req, res) => {
    // const {error} = validateCompany(req.body);
    // if(error) return res.status(400).send(error.details[0].message);


    let company = await Company.findOne({ email: req.body.email.toLowerCase().split(" ") });
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

  }

  // company confrmation
  exports.companyConfirmation = async (req, res) => {
    try {
      const decoded = jwt.verify(req.params.token, keys.jwtKey);
       Company.findByIdAndUpdate(decoded._id, { isConfirmed: true })
       .then(result =>{
        notifyAdmin(result.companyame , "confirm company")
       });

    } catch (e) {
      res.send('error' + e);
    }
    const path = keys.redirect_url + '/company/login'
    return res.redirect(path);
  }

  // change password
  exports.changeCompanyPassword = async (req, res) => {
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
  }

 // send reset password
  exports.sendResetPassword =  async (req, res) => {
    const company = await Company.findOne({ email: req.body.email.toLowerCase() });
    if (!company) {
      return res.status(400).send('البريد المدخل غير صحيح');
    }
    else {
      sendResetEmail(company._id, company.email);
      return res.status(200).send('ارسلنا بريد تغيير الرقم السري لبريدك');
    }
  }

  // reset password

  exports.resetPasswordCompany = async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10, (error, hash) => {
        if (error) res.status(400)
      });
      await bcrypt.hash(req.body.newPassword, salt, null, async (error, hash) => {
        if (error) res.status(400)

        await Company.findByIdAndUpdate(req.query.id, { $set: { password: hash } }, { new: true });
        res.status(204).send('done changing');
      });
      // res.status(200).send('The password has been changed');

    } catch (e) {
      res.send('error' + e);
    }
  }

  // change Password for company =
  exports.chabngeCompanyPassword =  async (req, res) => {
    const company = await Company.findById(req.user._id);
    const userId = req.user._id;
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
          await Company.findByIdAndUpdate(userId, { $set: { password: hash } }, { new: true });
        });
        return res.status(200).send('غيّرنا لك الرقم السري');
      }
    });
  }


  function validate(req) {
    const Schema = {

      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).required(),
    };

    return Joi.validate(req, Schema);
  }

