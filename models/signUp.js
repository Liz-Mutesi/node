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
  password:{
    type:String,
    required:true,
    trim:true,
  
  },
  role:{
    type:String,
  
  },
  

});

module.exports = mongoose.model("Signup", signupSchema);

