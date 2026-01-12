require('dotenv').config()
const express = require('express')
const router = require('./routes/index')
var cors = require('cors')
const app = express()
const mongoConfig = require('./config/mongoConfig')
const path = require('path')



mongoConfig()
app.use(cors({
  origin: [
    'https://fullstack-mernian-2204-rxs6.vercel.app',
    'https://fullstack-mernian-2204-srha.vercel.app', 
    'https://*.vercel.app', // Allow all Vercel preview deployments
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))



app.use(express.json())
// frontend jokhon backend e json data pathay tokhon backend json read korte pare na. Tokhon ei middleware er through te json e convert korte hoy. eita automatically json e convert kore felbe



app.use('/', router)

// 1. ekhane use ta hocche middleware. Middleware er kaaj hocche router jaate connect hoy ei file er shathe. ar router file er oikhane main kaaj jekhane value gulake get kortese

// app.get('/', function (req, res) {
//   res.send('8000 port Oh yeah it is what it is')
// })
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const port = process.env.PORT || 8000



app.listen(port, () => {
    console.log("Port running");
})