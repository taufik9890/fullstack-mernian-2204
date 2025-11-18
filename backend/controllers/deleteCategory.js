const Category = require('../model/categoryModel')

let deleteCategory = async (req, res) => {
  const {
    id,
    status
  } = req.body

  console.log(req.params);
  await Category.findByIdAndDelete(req.params.id)
  res.send("Category Deleted")
  

}
module.exports = deleteCategory