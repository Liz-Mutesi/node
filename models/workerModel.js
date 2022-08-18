
const mongoose = require("mongoose")

const workerSchema = mongoose.Schema({
    name: String,
    field: String,
    age: Number,
    salary: Number,
})

module.exports = mongoose.model("Worker", workerSchema)

