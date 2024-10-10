const mongoose = require('mongoose')
const {Schema} = mongoose

const categorySchema = new Schema({
    name: String,
    status:{
        type: String,
        enum: ["approve", "waiting", "reject"],
        default: "waiting"
    },
    image: String
})

module.exports = mongoose.model('Category', categorySchema) 