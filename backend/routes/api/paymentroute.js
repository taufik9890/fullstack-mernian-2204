const express = require("express")
const createPayment = require("../../controllers/createPayment")
const route = express.Router()

route.post('/createpayment',  createPayment)

module.exports = route