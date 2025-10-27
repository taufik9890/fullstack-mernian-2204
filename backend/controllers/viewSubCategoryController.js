const Category = require('../model/categoryModel')
const subCatergory = require('../model/subCategoryModel')

let viewSubCategoryController = async (req, res)=>{

    // Category
    let data = await subCatergory.find().populate("categoryId", "name status")


    console.log("new", data);
    res.send(data)
    // res.json({ message: "Review set successful" })
    
}

module.exports = viewSubCategoryController