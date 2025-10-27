const mongoose = require("mongoose")
const {Schema} = mongoose

const flashSaleSchema = new Schema({
    time: String,
    idList: [String],
    productID: {
        type: Schema.Types.ObjectId
    }
})
module.exports = mongoose.model("FlashSale", flashSaleSchema)