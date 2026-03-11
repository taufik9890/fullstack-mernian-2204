const SubCategory = require('../model/subCategoryModel');

let approveSubCategory = async (req, res) => {
  const {
    id,
    status
  } = req.body

  console.log(id, status);
  
  const updateCat = await SubCategory.findOneAndUpdate({
    _id: id
  }, {
    status: status === "waiting" ? "approve" : "waiting"
  }, 
  {
    new: true
  }
)
res.send("Updated")

}
module.exports = approveSubCategory