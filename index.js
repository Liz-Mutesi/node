const express = require("express")
const path = require("path")



const app = express()

app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.get("/file", (req, res)=> {
    res.sendFile(path.join(__dirname, "/file.html"))
})



// create a route (get)
app.get("/just", (req, res)=> {   // the / is a route, req (request),res (response) is a call back - an urgument of another function
    res.send("This is my homepage")
})

// send something to the front end (post)
// app.post
// delete (delete)
//uupdate the current information (update/ boot)


app.get("/home", (req, res)=> {
    res.send("Welcome to our homepage")
})

app.get("/profile", (req, res)=> {
    res.send("Welcome to our Profile")
})

app.get("/gallery", (req, res)=> {
    res.send("Welcome to our gallery")
})

//CRAD
// Create,- User inputs information into the application and it persists
// Read, - Get information from the system and read it
// Authenticate - Able to update/ authenticate the data
//and Delete - Forego





// always the last line in the information
app.listen(process.env.port || 3000)
console.log("server running on port" + (process.env.port || 3000))
