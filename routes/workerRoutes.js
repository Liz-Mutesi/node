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


router.get("/profile", (req, res)=> {
    res.render("test")
})
router.get("/worker-form", (req, res)=> {
    res.render("workerForm")
})

//error handling(try....catch)
router.post("/newWorker", async (req, res)=> {
    try{
        const newWorker = new workerModel(req.body)
        await newWorker.save()
        res.redirect("/workers/worker-form")
        console.log(req.body)
    }
    catch(err){
        res.status(400).render("workerForm")
        
    }
})
//res.render(display) is used when pointing to a file
//res.redirect is used to point to a path


module.exports = router
