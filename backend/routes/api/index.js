const express = require('express')
const route = express.Router()
const apiAuth = require('./auth')

route.use('/auth', apiAuth)


module.exports = route
