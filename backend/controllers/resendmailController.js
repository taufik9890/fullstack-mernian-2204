const User = require('../model/userModel')
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');



// taufikcthealth9890@gmail.com

let resendmailController = async (req, res)=>{
const {email} = req.body
const findUser = await User.findOne({email: email})
// console.log(findUser);
if(!findUser){
    
    // res.send("User Found");
       return res.status(400).send({error: "User not Found"})
    
}
if(findUser.emailVerified){
    return res.status(400).send({error: "email already verified"})
}
else{

    jwt.sign({ email: email }, 'shhhhh', async  function(err, token) {
        // console.log(token);
        const frontend = `${process.env.FRONTEND_URL}/emailverification/${token}`;
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: "taufik9890@gmail.com",
            pass: "axtp hdbs wnaw zzme",
          },
        });
        
    
        const info = await transporter.sendMail({
          from: `"MERNIAN"`, // sender address
          to: email, // list of receivers
          subject: "This is your Verification", // Subject line
          text: "This is your Verification", // plain text body
          //html: `Here is your <b>OTP: </b>${otp}`, // html body
          html: `Here is your <a href=${frontend}>CLick here</a>`, 
        });
    
      });

      res.send("EMail sent")

}

}

module.exports = resendmailController


// 13. ekhane amader kokhonoi email/password jeita mile nai eita kokhonoi ullek kora jabe na. Karon eita korle hacker ra easily bujhe jabe kisu ekta mile gese. er jonno bolte hobe "Credential not matched"