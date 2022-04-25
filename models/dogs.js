const mongoose = require("mongoose")
const dogsSchema = mongoose.Schema({
Dog_breed: String,
age: {
    type:Number,
    min:1,
    max:50

},
Dog_name: {
    type:String,
    minLength:2,
    maxLength:10
}
})
module.exports = mongoose.model("dogs",dogsSchema)