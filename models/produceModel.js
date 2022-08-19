const mongoose = require("mongoose")

const produceSchema = mongoose.Schema({
    name: String,
    description: String,
    quantity: Number,
    price: Number,
})

module.exports = mongoose.model("Produce", produceSchema)

