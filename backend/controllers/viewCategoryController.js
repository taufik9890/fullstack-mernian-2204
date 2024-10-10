const Category = require('../model/categoryModel')

let viewCategoryController = async (req, res)=>{

    // Category
    let data = await Category.find()


    res.send(data)
}

module.exports = viewCategoryController