const express = require('express')
const route = express.Router()
const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.log(file);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  uniqueSuffix + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })




const addCategoryController = require('../../controllers/addCategoryController')
const addSubCategoryController = require('../../controllers/addSubCategoryController')
const viewSubCategoryController = require('../../controllers/viewSubCategoryController')
const viewCategoryController = require('../../controllers/viewCategoryController')
const verifyToken = require('../../middleware/verifyToken')
const secureApi = require('../../middleware/secureApi')
const productController = require('../../controllers/productController')
const viewProductController = require('../../controllers/viewProductController')
const approveCategory = require('../../controllers/approveCategory')
const deleteCategory = require('../../controllers/deleteCategory')
const editCategory = require('../../controllers/editCategory')
const SingleProController = require('../../controllers/singlePro')

route.post('/createcategory' ,upload.single('avatar'), addCategoryController)
// route.post('/createcategory', secureApi, verifyToken ,upload.single('avatar'), addCategoryController)
route.post('/approvecategory',  approveCategory)
route.post('/createsubcategory',  addSubCategoryController)
route.post('/createproduct',upload.single('avatar'),  productController)
route.post('/editcat',  editCategory)
route.delete('/deletecategory/:id',  deleteCategory)

route.get('/viewcategory',  viewCategoryController)
route.get('/viewsubcategory',  viewSubCategoryController)
route.get('/viewproduct',  viewProductController)
route.get('/singlepro/:slug',  SingleProController)


module.exports = route
 