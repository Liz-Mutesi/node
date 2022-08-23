const express = require("express")
const workerModel = require("../models/workerModel")


const router = express.Router()

router.get("/", async (req, res) => {
    const test = await workerModel.find({})
    res.render("test", {
        title: "Employees", test

    })
})

module.exports = router 


router.get("/profile", (req, res)=> {
    res.render("test")
})
module.exports = router
