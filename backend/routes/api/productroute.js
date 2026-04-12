const express = require('express')
const route = express.Router()
// const multer  = require('multer')

const upload = require('../../config/cloudinary.config')
const { authenticate, authorize } = require('../../middleware/roleMiddleware')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//         console.log(file);
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null,  uniqueSuffix + '-' + file.originalname)
//     }
//   })
  
  // const upload = multer({ storage: storage })




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
const SingleSubCategoryController = require('../../controllers/singleSubCategoryController')
const cartController = require('../../controllers/cartController')
const viewCartController = require('../../controllers/viewCartController')
const flashSaleController = require('../../controllers/flashSaleController')
const viewFlashSaleController = require('../../controllers/viewFlashSaleController')
const reviewController = require('../../controllers/reviewController')
const viewReviewController = require('../../controllers/viewReviewController')
const deleteCart = require('../../controllers/deleteCart')
const approveSubCategory = require('../../controllers/approveSubCategory')

route.post('/createcategory', authenticate, authorize('Admin', 'Merchant'), upload.single('avatar'), addCategoryController)
route.post('/createsubcategory', authenticate, authorize('Admin', 'Merchant'), upload.single('avatar'),  addSubCategoryController)
route.post('/createproduct', authenticate, authorize('Admin', 'Merchant'), upload.array('photos', 12),  productController)
// route.post('/createcategory', secureApi, verifyToken ,upload.single('avatar'), addCategoryController)
route.post('/approvecategory', authenticate, authorize('Admin'),  approveCategory)
route.post('/approvesubcategory', authenticate, authorize('Admin'),  approveSubCategory)
route.delete('/deletecategory/:id', authenticate, authorize('Admin'),  deleteCategory)
route.post('/editcat',  editCategory)
route.post('/cart', authenticate,  cartController)
route.post('/review', authenticate,  reviewController)
route.post('/flashsale',  flashSaleController)

route.get('/deletecart/:id', authenticate,  deleteCart)
route.get('/viewreview/:id',  viewReviewController)
route.get('/viewcategory',  viewCategoryController)
route.get('/viewsubcategory',  viewSubCategoryController)
route.get('/viewproduct',  viewProductController)
route.get('/viewcart', authenticate,  viewCartController)
route.get('/viewflashsale',  viewFlashSaleController)
route.get('/singlepro/:slug',  SingleProController)
route.get('/singlesubcategory/:id',  SingleSubCategoryController)
 

module.exports = route
 