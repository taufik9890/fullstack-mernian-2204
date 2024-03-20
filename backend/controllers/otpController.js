const User = require('../model/userModel')

let otpController = async (req, res)=>{
const{otp, email} = req.body
// console.log(email, otp);

const findUser = await User.findOne({email: email})

// console.log(findUser.otp);

if(!findUser.emailVerified && findUser.otp == otp){
    // console.log('milse');
    await User.findOneAndUpdate({email: email}, {otp: "", emailVerified: true})
    res.send('Milse')
}
else{
    // console.log('mile nai');
    res.send('mile nai');
}

}


module.exports = otpController

// 11. ekhon ami otp check korbo. er pasha pashi email tao check dibo front end theke ene. first e ami userModel theke shob user ke niye ashbo. er pore ami findUser er moddhe user theke email takey find korbo. tarpore if condition use kore findUser theke otp takey ber korbo jodi oita amar req.body er otp er shathe mile jay taholei ami otp takey update kore dibo faka banay

// 12. er pore ami check korbo emailVerified true naki. default bhabe oita false eikhane if condition e ami not sign diye bole dibo eita jodi true thake tahole ami oitake pathay dibo. jodi amar email mile jay tahole otp khali hoye jabe ar emailverified true hoye jabe update hoye