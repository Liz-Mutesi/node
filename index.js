const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const workerRoutes = require("./routes/workerRoutes")
const app = express()

const workerModel = require("./models/workerModel")

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

    // app.use("/", workerRoutes)

    

//create a schema
    // const workerSchema = new mongoose.Schema({
    //     name: String,
    //     field: String,
    //     age: Number,
    //     salary: Number,
    // })
    //create a model
    // const workerModel = new mongoose.model("Worker", workerSchema)

    // const data = new workerModel({
    //     name: "Duchess",
    //     field: "Coffee",
    //     age: 30,
    //     salary: 50000,
    // })
    // data.save()



    

app.get("/", async(req, res)=> {
    const workers = await workerModel.find({})
    console.log(workers)
    res.render("index", {
        title: "Puppies",
        data: workers
    })
})

app.get("/file", (req, res)=> {
    res.sendFile(path.join(__dirname, "/file.html"))
})


// create a route (get)
// app.get("/just", (req, res)=> {   // the / is a route, req (request),res (response) is a call back - an urgument of another function
//     res.send("This is my homepage")
// })

// // send something to the front end (post)
// // app.post
// // delete (delete)
// //uupdate the current information (update/ boot)


// app.get("/home", (req, res)=> {
//     res.send("Welcome to our homepage")
// })

// app.get("/profile", (req, res)=> {
//     res.send("Welcome to our Profile")
// })

// app.get("/gallery", (req, res)=> {
//     res.send("Welcome to our gallery")
// })

// //CRAD
// // Create,- User inputs information into the application and it persists
// // Read, - Get information from the system and read it
// // Authenticate - Able to update/ authenticate the data
// //and Delete - Forego





// always the last line in the information
app.listen(process.env.port || 3000)
console.log("server running on port" + (process.env.port || 3000))
