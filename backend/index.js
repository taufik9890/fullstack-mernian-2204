require('dotenv').config()
const express = require('express')
const router = require('./routes/index')
const app = express()
const mongoConfig = require('./config/mongoConfig')

mongoConfig()


app.use('/', router)

// 1. ekhane use ta hocche middleware. Middleware er kaaj hocche router jaate connect hoy ei file er shathe. ar router file er oikhane main kaaj jekhane value gulake get kortese

// app.get('/', function (req, res) {
//   res.send('8000 port Oh yeah it is what it is')
// })

const port = process.env.PORT || 8000



app.listen(port, ()=>{
    console.log("Port running");
})