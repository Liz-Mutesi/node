const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");



const signupSchema = new mongoose.Schema({
    firstname: {
    type: String,
    trim:true,
  },
  surname: {
    type:String,
    trim:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
  },
  // password:{
  //   type:String,
  //   required:true,
  //   trim:true,
  
  // },
  role:{
    type:String,
  
  },
  

});
signupSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = mongoose.model("signUp", signupSchema);

