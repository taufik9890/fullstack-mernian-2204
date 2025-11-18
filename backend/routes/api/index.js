const express = require('express')
const route = express.Router()
const apiAuth = require('./auth')
const productRoutes = require('./productroute')
const paymentRountes = require('./paymentroute')
// const testMail = require('./testMail');

route.use('/auth', apiAuth)
route.use('/product', productRoutes)
route.use('/payment', paymentRountes)



module.exports = route
