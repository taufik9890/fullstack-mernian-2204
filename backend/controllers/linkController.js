const User = require('../model/userModel')
var jwt = require('jsonwebtoken');

let linkController = async (req, res)=>{

    try {
        const { token } = req.body
         console.log('JWT_SECRET being used:', process.env.JWT_SECRET) // 👈 add this
        console.log('Token received:', token)

        if (!token) {
            return res.status(400).json({ error: 'Token required' })
        }

        const decoded = jwt.verify(token, '123456789') 
        // const decoded = jwt.verify(token, process.env.JWT_SECRET) 

        const findUser = await User.findOne({ email: decoded.email })

        if (!findUser) {
            return res.status(404).json({ error: 'User not found' })
        }

        if (!findUser.emailVerified) {
            await User.findOneAndUpdate({ email: decoded.email }, { emailVerified: true })
            return res.json({ success: 'Email verified successfully' })
        } else {
            return res.json({ message: 'Email already verified' })
        }

    } catch (error) {
        console.error('Link verification error:', error.message)
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Verification link has expired. Please request a new one.' })
        }
        return res.status(400).json({ error: 'Invalid verification link' })
    }



//     const{token} = req.body
 
// var decoded = jwt.verify(token, process.env.JWT_SECRET);

// console.log('mail ashbe',decoded.email);

// const findUser = await User.findOne({email: decoded.email})


// if(!findUser.emailVerified){
//     // console.log('milse');
//     await User.findOneAndUpdate({email: decoded.email}, {emailVerified: true})
//     res.send('Milse')
// }
// else{
//     // console.log('mile nai');
//     res.send('mile nai');
// }


}


module.exports = linkController

// 15. ekhon jei token generate korse sheita amra params theke nibo 