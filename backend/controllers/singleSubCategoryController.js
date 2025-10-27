const SingleSubCategory = require('../model/subCategoryModel')

let SingleSubCategoryController = async (req, res)=>{
    const {id} = req.params
    let data = await SingleSubCategory.find({categoryId: id})

    res.send(data)
}
module.exports = SingleSubCategoryController