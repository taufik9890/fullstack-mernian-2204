const User = require('../model/userModel')
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator')
var jwt = require('jsonwebtoken');

let registrationController = async (req, res) => {
  // res.send('this is router from registrationControllers')
  // let data = {name, email, password} = req.body

  


  const {
    name,
    email,
    password
  } = req.body

  console.log(name, email, password);
  if (!name || !email || !password) {
    return res.send({
      error: 'Please fill up all the fields'
    })
  }

  if (password && password.length < 8) {
    return res.send({
      error: 'Password is too small'
    })
  }

  let existingUser = await User.find({
    email: email
  })
  console.log(existingUser);


  if (existingUser.length > 0) {
    return res.send({
      error: `${email} already in use`
    })
  } else {



    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false
    });
    console.log(otp);

    bcrypt.hash(password, 10, async function (err, hash) {


      // console.log(hash);
      let user = new User({
        name: name,
        email: email,
        password: hash,
        otp: otp
      })
      user.save()

      jwt.sign({
        email: email
      }, 'shhhhh', async function (err, token) {
        // console.log(token);

        const frontend = `${process.env.FRONTEND_URL}/emailverification/${token}`;
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "taufik9890@gmail.com",
            pass: "flds lvrf kgfq pbar",
            // pass: "axtp hdbs wnaw zzme",
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
      setTimeout(async () => {
        await User.findOneAndUpdate({
          email: email
        }, {
          otp: ''
        })
        console.log('Otp done');
      }, 10000);




      res.send({
        name: user.name,
        email: user.email,
        role: user.role
      })


    });


  }

  // 8. ekhon amader email verfication korte hobe 
  // ekhon existingUser diye User theke find korbo email field theke ekhaner email value er shathe mile kina. ekhon existingUser console.log korle ami jodi same email post kori tahole oi value ta array te pathabe ar jodi different thake tahole faka array dibe

  // 9. ekhon amar password ke secure rakhar jonno amar encrypt korte hobe. ar etar best way hocche bcrypt use kora. bcrypt install korar pore ami agey require korbo tarpore oitake hashing korbo. 1st parameter e password dibo porer salt e 10 dibo. salt er kaaj hocche same password ke nanan dhoroner combination e ana. er pore hash takey console kore dekbo password kishe turn korse. ekhon ei password ta ami database e pathay dibo. ar oi password er jaygay boshabo hash

  // 10. response er khetre password pathabo na amra. er jonno pura user na pathay selected kichu pathabo. karon password ta redux e save thaka lagbe

  // let user = new User({
  //   name: name,
  //   email: email,
  //   password: password
  // })

  // user.save()
  // res.send(user)

  console.log('database e data jabe');
  // 7. ei console ta ashche jokhon error o thake. so error thakle toh database e data jawar kotha na. er jonnoi proti if  condition er bhitore ekta kore return deya lagbe. ar return dile nicher code dekbe na

  // 8. ebar database e data rakte chai ar oitar jonno schema ready korte hobe. schema hocche ekta model






}
module.exports = registrationController
// 4. middleware ki? ami kono ekta route e hit korbo oitate kono permission dibe ki dibe na eta hocche middle ware er kaaj 
// amar shob data ami shobaike access korte dite chai na er jonno ami middleware bebohar korbo 

// 5. frontend theke jokhoni kono data ashbe backend e oita hobe req.body te. toh ami distructure kore name, email ar password niye ashbo 


// 14. ekhon amra ekta email link verify korbo. shetar jonno dashboard e ekta page create kore rakbo. ar app.jsx er route er url er piche token diye rakbo var hshabe. er jonno ekhon ekhon token create korbo jwt token theke. 