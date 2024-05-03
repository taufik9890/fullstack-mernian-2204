const express = require('express')
const route = express.Router()
const registrationController = require('../../controllers/registrationController')
const secureApi = require('../../middleware/secureApi')
const otpController = require('../../controllers/otpController')
const loginController = require('../../controllers/loginController')
const linkController = require('../../controllers/linkController')
const resendmailController = require('../../controllers/resendmailController')
const forgotpasswordController = require('../../controllers/forgotpasswordController')
const newpasswordController = require('../../controllers/newpasswordController')

route.post('/registration', secureApi, registrationController)
route.post('/login', loginController)
route.post('/otpverification', otpController)
route.post('/linkverification', linkController)
route.post('/forgotpassword', forgotpasswordController)
route.post('/newpassword', newpasswordController)
route.post('/resendmail', resendmailController)

module.exports = route
 