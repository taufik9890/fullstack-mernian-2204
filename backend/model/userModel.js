const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["Admin", "Merchant", "User"],
        default: "User"

    }
})

module.exports = mongoose.model("User", userSchema)


// 11. ebar ami role select korbo. Koyekta role thakte pare dekhe object e rakbo. type hobe string. enum hocche ekta limitation jekhane etar bahire ar kono role jaate keo na nite pare. ar default bhabe user dibo pore owner hishabe ami ki role dibo amar upore depend korbe. mane prothom obosthay thakbe shey ekjon user