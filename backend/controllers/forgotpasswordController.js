const User = require('../model/userModel')
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');

let forgotpasswordController = async (req, res) => {
    const {
        email
    } = req.body
    console.log(email);


    let existingUser = await User.findOne({
        email: email
    }, 
    )
    console.log(existingUser);


    if (existingUser.length > 0) {
        console.log(existingUser);
        
    jwt.sign({ email: email }, 'shhhhh', async  function(err, token) {
        // console.log(token);
         const frontend = `${process.env.FRONTEND_URL}/newpassword/${token}`;
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: "taufik9890@gmail.com",
            pass: "fldslvrfkgfqpbar",
            // pass: "axtp hdbs wnaw zzme",
          },
        });
        
    
        const info = await transporter.sendMail({
          from: `"MERNIAN"`, // sender address
          to: email, // list of receivers
          subject: "Change you password from this link", // Subject line
          text: "This is your Verification", // plain text body
          //html: `Here is your <b>OTP: </b>${otp}`, // html body
          html: `Here is your <a href=${frontend}>CLick here</a>`, 
        });
    
      });

        
        // await User.findOneAndUpdate({
        //     email: email
        // })
    } else {
        res.send({
            error: "User not found"
        })
    }

}
module.exports = forgotpasswordController