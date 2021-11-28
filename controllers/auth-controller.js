const User = require("../models/auth-model.js");
const expressJwt = require("express-jwt");
const { OAuth2Client } = require("google-auth-library");
const fetch = require("node-fetch");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

//Custom error handler to get useful error database errors
const { errorHandler } = require("../helpers/dbErrorHandling.js");
//Mail
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.MAIL_KEY);

exports.registerController = (req, res) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);

  //Validate to req, body we will create custom validation in seconds
  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(422).json({
      error: firstError,
    });
  } else {
    User.findOne({
      email,
    }).exec((err, user) => {
      if (user) {
        return res.status(400).json({
          error: "Email is taken",
        });
      }
    });

    // Generate Token
    const token = jwt.sign(
      {
        name,
        email,
        password,
      },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: "15m",
      }
    );

    const emailData = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Account activation link",
      html: `
        <h1> Please Click Link to Activate</h1>
        <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
        <hr/>
        <p>This email contain sensitive info </p>
        <p>${process.env.CLIENT_URL}</p>
      `,
    };

    (async () => {
      try {
        await sgMail.send(emailData);
      } catch (error) {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    })().then((sent) => {
      return res.json({
        message: `Email has been sent to ${email}`,
      });
    });
  }
};
