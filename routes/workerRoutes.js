// const { Router } = require("express")
const express = require("express")
const workerModel = require("../models/workerModel")


const router = express.Router()

router.get("/", async (req, res) => {
    const workers = await workerModel.find({})
    res.render("worker", {
        title: "Employees", workers

    })
})

module.exports = router 


router.get("/profile", (req, res)=> {
    res.render("test")
})
module.exports = router
