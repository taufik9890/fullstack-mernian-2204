const User = require('../model/userModel')
var jwt = require('jsonwebtoken');

let linkController = async (req, res)=>{
const{token} = req.body

var decoded = jwt.verify(token, 'shhhhh');

console.log('mail ashbe',decoded.email);

const findUser = await User.findOne({email: decoded.email})


if(!findUser.emailVerified){
    // console.log('milse');
    await User.findOneAndUpdate({email: decoded.email}, {emailVerified: true})
    res.send('Milse')
}
else{
    // console.log('mile nai');
    res.send('mile nai');
}

}


module.exports = linkController

// 15. ekhon jei token generate korse sheita amra params theke nibo 