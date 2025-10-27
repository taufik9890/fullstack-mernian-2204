const mongoose = require("mongoose")
const {Schema} = mongoose

const reviewSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comment: {
        type: String
    },
    rating: {
        type: Number
    },
    name: {
        type: String
    },
    email: {
        type: String
    }

})
module.exports = mongoose.model("Review", reviewSchema)