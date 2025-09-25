const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    name: String,
    description: String,
    image: String,
    regularprice: {type: Number, required: true},
    discountprice: {type: Number, required: true},
    slug: String, 
    
    // status:{
    //     type: String,
    //     enum: ["approve", "waiting", "reject"],
    //     default: "waiting"
    // }
}) 

module.exports = mongoose.model('Product', productSchema) 