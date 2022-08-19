const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const workerRoutes = require("./routes/workerRoutes")
const produceRoutes = require("./routes/produceRoutes")
const homeRoutes = require("./routes/homeRoutes")
const app = express()


app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "pug")

app.use(express.urlencoded({ extended: true }));


//db connect
//mongodb://localhost:27017
mongoose.connect("mongodb://localhost:27017/farm",{
    useNewUrlParser: true,
    useUnifiedTopology: true},
    (err) => {
        if(!err) console.log("Connected to mongoDB");
        else console.log("Error connecting to mongoDB " + err)
    
    })

    app.use("/", homeRoutes)
    app.use("/workers", workerRoutes)
    app.use("/produce", produceRoutes)

//http://localhost:3000
//http://localhost:3000/
//http://localhost:3000/produce/
//http://localhost:3000/index/user

    
  



// always the last line in the information
app.listen(process.env.port || 3000)
console.log("server running on port" + (process.env.port || 3000))
