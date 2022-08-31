const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const passport = require("passport")



const workerRoutes = require("./routes/workerRoutes")
// const produceRoutes = require("./routes/produceRoutes")
const homeRoutes = require("./routes/homeRoutes")
const signUpRoutes = require("./routes/signUpRoutes")
const loginRoutes = require("./routes/loginRoutes")
// const testRoutes = require("./routes/testRoutes")

const SignupModel = require("./models/signUp")


const app = express()

const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  });



app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "pug")



//db connect
//mongodb://localhost:27017
mongoose.connect("mongodb://localhost:27017/farm",{
    useNewUrlParser: true,
    useUnifiedTopology: true},
    (err) => {
        if(!err) console.log("Connected to mongoDB");
        else console.log("Error connecting to mongoDB " + err)
    
    })

app.use(expressSession)
// configuring passport
app.use(passport.initialize());
app.use(passport.session());

//-----------------------------------
passport.use(Signup.createStrategy());
passport.serializeUser(Signup.serializeUser());
passport.deserializeUser(Signup.deserializeUser());


app.use("/", homeRoutes)
app.use("/workers", workerRoutes)
app.use("/", signUpRoutes)
app.use("/", loginRoutes)
// app.use("/produce", produceRoutes)
// app.use("/test", workerRoutes)

//http://localhost:3000
//http://localhost:3000/
//http://localhost:3000/produce/
//http://localhost:3000/index/user

    
  



// always the last line in the information
app.listen(process.env.port || 3000)
console.log("server running on port" + (process.env.port || 3000))






