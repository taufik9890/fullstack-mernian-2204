const mongoose = require('mongoose')
const {Schema} = mongoose

const subCategorySchema = new Schema({
    name: String,
    status:{
        type: String,
        enum: ["approve", "waiting", "reject"],
        default: "approve"
    },
    categoryId:{
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    image: String
})

module.exports = mongoose.model('SubCategory', subCategorySchema) 