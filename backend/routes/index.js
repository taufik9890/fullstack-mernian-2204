const express = require('express')

const route = express.Router()
const apiRoute = require('./api')


route.use(process.env.API_URL, apiRoute)



module.exports = route



//   2. router er duita parameter hoy. first path hocche path. ar second ta hocche controller
// 3. link e hit kora manei api. mane product er je link ase oigula ke bola hoy api. amader main target thakbe ekta file er moddhe shob api thakbe
// 4. api router er kaaj ki amar ekta folder thakbe api jekhane amar shob route gula ke define korte parbo. 