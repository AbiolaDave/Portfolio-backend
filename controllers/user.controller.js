let userModel = require("../models/user.model");
let jwt = require("jsonwebtoken");
let nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let Name = req.body.name;
  let email = req.body.email;
  let Subject = req.body.subject;
  let message = req.body.message;

  console.log(Name, email, Subject, message);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
  });

  var mailOptions = {
    from: "abioladave24@gmail.com",
    to: "odesomiad.19@student.funaab.edu.ng, abioladave24@gmail.com",
    subject: "Sending Email using Node.js",
    html: `<div><h3>Name: ${Name}</h3></div><div>
    <h3>Email: ${email}</h3></div>
    <div><h3>Subject: ${Subject}</h3></div>
    <div><h3>Message: ${message}</h3></div>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.send({ status: false, message: "Error occured somewhere" });
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      let form = new userModel({ Name, Subject, email, message });
      form
        .save()
        .then(() => {
          res.send({ status: true, message: "You've been contacted" });
        })
        .catch((err) => {
          res.send({ status: false, message: "Error occured somewhere" });
          console.log(err);
        });
    }
  });
};

module.exports = { sendMail };
