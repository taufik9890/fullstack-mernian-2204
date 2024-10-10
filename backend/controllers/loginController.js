const User = require('../model/userModel')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

let loginController = async (req, res) => {
    const {
        email,
        password
    } = req.body
    const findUser = await User.findOne({
        email: email
    })
    // console.log(findUser.password); 

    if (findUser) {
        bcrypt.compare(password, findUser.password, function (err, result) {
            // result == true
            console.log(result);
            console.log(findUser);

            var token = jwt.sign({
                id: findUser._id,
                email: findUser.email,
                name: findUser.name
            }, 'shhhhh', {
                expiresIn: "24h"
            });
            if (result) {
                res.json({
                    success: "Login Successful!",
                    token: token,
                    email: findUser.email,
                    name: findUser.name,
                    role: findUser.role
                })
            } else {
                res.send({
                    error: 'Credential not matched!'
                })
            }
        });
    } else {
        res.send({
            error: "User not Found"
        })
    }

}

module.exports = loginController


// 13. ekhane amader kokhonoi email/password jeita mile nai eita kokhonoi ullek kora jabe na. Karon eita korle hacker ra easily bujhe jabe kisu ekta mile gese. er jonno bolte hobe "Credential not matched"