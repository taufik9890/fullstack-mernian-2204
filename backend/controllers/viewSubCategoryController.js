const Category = require('../model/categoryModel')
const subCatergory = require('../model/subCategoryModel')

let viewSubCategoryController = async (req, res)=>{

    // Category
    let data = await subCatergory.find().populate("categoryId")


    console.log("new", data);
    res.send(data)
    
}

module.exports = viewSubCategoryController