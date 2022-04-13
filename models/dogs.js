const mongoose = require("mongoose")
const dogsSchema = mongoose.Schema({
Dog_breed: String,
age: Number,
Dog_name: String
})
module.exports = mongoose.model("dogs",dogsSchema)