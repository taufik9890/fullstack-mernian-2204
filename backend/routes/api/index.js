const express = require('express')
const route = express.Router()
const apiAuth = require('./auth')
const productRoutes = require('./productroute')

route.use('/auth', apiAuth)
route.use('/product', productRoutes)


module.exports = route
