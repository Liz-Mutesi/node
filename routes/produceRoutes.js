const express = require("express")
const produceModel = require("../models/produceModel")


const router = express.Router()

router.get("/", async (req, res) => {
    const produce = await produceModel.find({})
    res.render("produce", {
        title: "Inventory", produce

    })
})
router.get("/new", async (req, res) => {
    
    res.render("createProduce", {
        title: "Inventory",

    })
})
router.post("/new", async (req, res) => {
//  console.log(req.body)
 const newProduce = new produceModel(req.body)
 await newProduce.save()
 res.redirect("/produce")
})

module.exports = router 