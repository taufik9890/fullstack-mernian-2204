const SubCategory = require('../model/subCategoryModel')

let deleteSubCategory = async (req, res) => {
    await SubCategory.findByIdAndDelete(req.params.id)
    res.json({ message: "SubCategory Deleted" })
}

module.exports = deleteSubCategory