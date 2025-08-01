const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

let userSchema = mongoose.Schema({
  Name: { type: String },
  Subject: { type: String},
  email: { type: String},
  message: { type: String,},
  CreationDate: { type: Date, default: Date.now },
});



let userModel = mongoose.model("contacts", userSchema);

module.exports = userModel