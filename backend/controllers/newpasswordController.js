const User = require('../model/userModel')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let newpasswordController = async (req, res)=>{
const{password, token} = req.body


var decoded = jwt.verify(token, 'shhhhh');

// console.log('mail newpass ashbe',decoded.email);

 
bcrypt.hash(password, 10, async function(err, hash) {
    // Store hash in your password DB.
    await User.findOneAndUpdate({email: decoded.email}, {password: hash})
    res.send({success: 'password changed'})
});


}


module.exports = newpasswordController

// 15. ekhon jei token generate korse sheita amra params theke nibo 