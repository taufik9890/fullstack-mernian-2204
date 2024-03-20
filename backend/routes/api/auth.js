const express = require('express')
const route = express.Router()
const registrationController = require('../../controllers/registrationController')
const secureApi = require('../../middleware/secureApi')
const otpController = require('../../controllers/otpController')

route.post('/registration', secureApi, registrationController)
route.post('/otpverification', otpController)

module.exports = route
