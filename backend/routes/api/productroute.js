const express = require('express')
const addCategoryController = require('../../controllers/addCategoryController')
const addSubCategoryController = require('../../controllers/addSubCategoryController')
const route = express.Router()


route.post('/createcategory',  addCategoryController)
route.post('/createsubcategory',  addSubCategoryController)


module.exports = route
 