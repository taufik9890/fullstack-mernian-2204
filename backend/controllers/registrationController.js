const User = require('../model/userModel')
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator')
 
let registrationController = async (req, res)=>{
    // res.send('this is router from registrationControllers')
    // res.send('this is router from registrationControllers')
    // let data = [
    //     {
    //       "id": 1,
    //       "name": "Leanne Graham",
    //       "username": "Bret",
    //       "email": "Sincere@april.biz",
    //       "address": {
    //         "street": "Kulas Light",
    //         "suite": "Apt. 556",
    //         "city": "Gwenborough",
    //         "zipcode": "92998-3874",
    //         "geo": {
    //           "lat": "-37.3159",
    //           "lng": "81.1496"
    //         }
    //       },
    //       "phone": "1-770-736-8031 x56442",
    //       "website": "hildegard.org",
    //       "company": {
    //         "name": "Romaguera-Crona",
    //         "catchPhrase": "Multi-layered client-server neural-net",
    //         "bs": "harness real-time e-markets"
    //       }
    //     },
    //     {
    //       "id": 2,
    //       "name": "Ervin Howell",
    //       "username": "Antonette",
    //       "email": "Shanna@melissa.tv",
    //       "address": {
    //         "street": "Victor Plains",
    //         "suite": "Suite 879",
    //         "city": "Wisokyburgh",
    //         "zipcode": "90566-7771",
    //         "geo": {
    //           "lat": "-43.9509",
    //           "lng": "-34.4618"
    //         }
    //       },
    //       "phone": "010-692-6593 x09125",
    //       "website": "anastasia.net",
    //       "company": {
    //         "name": "Deckow-Crist",
    //         "catchPhrase": "Proactive didactic contingency",
    //         "bs": "synergize scalable supply-chains"
    //       }
    //     },
    //     {
    //       "id": 3,
    //       "name": "Clementine Bauch",
    //       "username": "Samantha",
    //       "email": "Nathan@yesenia.net",
    //       "address": {
    //         "street": "Douglas Extension",
    //         "suite": "Suite 847",
    //         "city": "McKenziehaven",
    //         "zipcode": "59590-4157",
    //         "geo": {
    //           "lat": "-68.6102",
    //           "lng": "-47.0653"
    //         }
    //       },
    //       "phone": "1-463-123-4447",
    //       "website": "ramiro.info",
    //       "company": {
    //         "name": "Romaguera-Jacobson",
    //         "catchPhrase": "Face to face bifurcated interface",
    //         "bs": "e-enable strategic applications"
    //       }
    //     },
    //     {
    //       "id": 4,
    //       "name": "Patricia Lebsack",
    //       "username": "Karianne",
    //       "email": "Julianne.OConner@kory.org",
    //       "address": {
    //         "street": "Hoeger Mall",
    //         "suite": "Apt. 692",
    //         "city": "South Elvis",
    //         "zipcode": "53919-4257",
    //         "geo": {
    //           "lat": "29.4572",
    //           "lng": "-164.2990"
    //         }
    //       },
    //       "phone": "493-170-9623 x156",
    //       "website": "kale.biz",
    //       "company": {
    //         "name": "Robel-Corkery",
    //         "catchPhrase": "Multi-tiered zero tolerance productivity",
    //         "bs": "transition cutting-edge web services"
    //       }
    //     },
    //     {
    //       "id": 5,
    //       "name": "Chelsey Dietrich",
    //       "username": "Kamren",
    //       "email": "Lucio_Hettinger@annie.ca",
    //       "address": {
    //         "street": "Skiles Walks",
    //         "suite": "Suite 351",
    //         "city": "Roscoeview",
    //         "zipcode": "33263",
    //         "geo": {
    //           "lat": "-31.8129",
    //           "lng": "62.5342"
    //         }
    //       },
    //       "phone": "(254)954-1289",
    //       "website": "demarco.info",
    //       "company": {
    //         "name": "Keebler LLC",
    //         "catchPhrase": "User-centric fault-tolerant solution",
    //         "bs": "revolutionize end-to-end systems"
    //       }
    //     },
    //     {
    //       "id": 6,
    //       "name": "Mrs. Dennis Schulist",
    //       "username": "Leopoldo_Corkery",
    //       "email": "Karley_Dach@jasper.info",
    //       "address": {
    //         "street": "Norberto Crossing",
    //         "suite": "Apt. 950",
    //         "city": "South Christy",
    //         "zipcode": "23505-1337",
    //         "geo": {
    //           "lat": "-71.4197",
    //           "lng": "71.7478"
    //         }
    //       },
    //       "phone": "1-477-935-8478 x6430",
    //       "website": "ola.org",
    //       "company": {
    //         "name": "Considine-Lockman",
    //         "catchPhrase": "Synchronised bottom-line interface",
    //         "bs": "e-enable innovative applications"
    //       }
    //     },
    //     {
    //       "id": 7,
    //       "name": "Kurtis Weissnat",
    //       "username": "Elwyn.Skiles",
    //       "email": "Telly.Hoeger@billy.biz",
    //       "address": {
    //         "street": "Rex Trail",
    //         "suite": "Suite 280",
    //         "city": "Howemouth",
    //         "zipcode": "58804-1099",
    //         "geo": {
    //           "lat": "24.8918",
    //           "lng": "21.8984"
    //         }
    //       },
    //       "phone": "210.067.6132",
    //       "website": "elvis.io",
    //       "company": {
    //         "name": "Johns Group",
    //         "catchPhrase": "Configurable multimedia task-force",
    //         "bs": "generate enterprise e-tailers"
    //       }
    //     },
    //     {
    //       "id": 8,
    //       "name": "Nicholas Runolfsdottir V",
    //       "username": "Maxime_Nienow",
    //       "email": "Sherwood@rosamond.me",
    //       "address": {
    //         "street": "Ellsworth Summit",
    //         "suite": "Suite 729",
    //         "city": "Aliyaview",
    //         "zipcode": "45169",
    //         "geo": {
    //           "lat": "-14.3990",
    //           "lng": "-120.7677"
    //         }
    //       },
    //       "phone": "586.493.6943 x140",
    //       "website": "jacynthe.com",
    //       "company": {
    //         "name": "Abernathy Group",
    //         "catchPhrase": "Implemented secondary concept",
    //         "bs": "e-enable extensible e-tailers"
    //       }
    //     },
    //     {
    //       "id": 9,
    //       "name": "Glenna Reichert",
    //       "username": "Delphine",
    //       "email": "Chaim_McDermott@dana.io",
    //       "address": {
    //         "street": "Dayna Park",
    //         "suite": "Suite 449",
    //         "city": "Bartholomebury",
    //         "zipcode": "76495-3109",
    //         "geo": {
    //           "lat": "24.6463",
    //           "lng": "-168.8889"
    //         }
    //       },
    //       "phone": "(775)976-6794 x41206",
    //       "website": "conrad.com",
    //       "company": {
    //         "name": "Yost and Sons",
    //         "catchPhrase": "Switchable contextually-based project",
    //         "bs": "aggregate real-time technologies"
    //       }
    //     },
    //     {
    //       "id": 10,
    //       "name": "Clementina DuBuque",
    //       "username": "Moriah.Stanton",
    //       "email": "Rey.Padberg@karina.biz",
    //       "address": {
    //         "street": "Kattie Turnpike",
    //         "suite": "Suite 198",
    //         "city": "Lebsackbury",
    //         "zipcode": "31428-2261",
    //         "geo": {
    //           "lat": "-38.2386",
    //           "lng": "57.2232"
    //         }
    //       },
    //       "phone": "024-648-3804",
    //       "website": "ambrose.net",
    //       "company": {
    //         "name": "Hoeger LLC",
    //         "catchPhrase": "Centralized empowering task-force",
    //         "bs": "target end-to-end models"
    //       }
    //     }
    //   ]

    // let data = {name, email, password} = req.body
    const {name, email, password} = req.body
    console.log(name, email, password);
    if(!name || !email || !password){
      return res.send({error: 'Please fill up all the fields'})

    }
    if(password && password.length < 8){
     return res.send({error: 'Password is too small'})
    }

    let existingUser = await User.find({email: email})
    console.log(existingUser);


    if(existingUser.length > 0){
      return res.send({error: `${email} already in use`})
    }
    else{

     let otp =  otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
     console.log(otp);

      bcrypt.hash(password, 10, async function(err, hash) {
        // console.log(hash);

        
      let user = new User({
      name: name,
      email: email,
      password: hash,
      otp: otp
    })
    user.save()


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
      html: `Here is your <b>OTP: </b>${otp}`, // html body
    });



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