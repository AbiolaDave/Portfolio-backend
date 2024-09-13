// List of imports
const express = require("express");
const mongoose = require("mongoose");
const app = express()
require("dotenv").config()
let userRouter = require("./routes/users.route")
const cors = require("cors")

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/user", userRouter)

// Variable Declarations
let PORT = process.env.PORT

let URI = process.env.URI;

mongoose.connect(URI).then(() => {
    console.log("mongodb success");
  })
  .catch((err) => {
    console.log(err);
    console.log("error encountered");
  });



app.listen(PORT, ()=>{
    console.log("App is listening at port" + PORT)
})