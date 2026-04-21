const User = require("../model/userModel");
const bcrypt = require("bcrypt");
// const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");
const SibApiV3Sdk = require('sib-api-v3-sdk') 


let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
let apiKey = apiInstance.authentications['api-key']
apiKey.apiKey = process.env.BREVO_API_KEY

let registrationController = async (req, res) => {

//   const client = Brevo.ApiClient.instance
// client.authentications['api-key'].apiKey = process.env.BREVO_API_KEY

// const emailApi = new Brevo.TransactionalEmailsApi()


  try {
    const { name, email, password } = req.body;

    console.log(name, email, password);

    // ================= VALIDATION =================
    if (!name || !email || !password) {
      return res.status(400).json({
        error: "Please fill up all the fields",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        error: "Password must be at least 8 characters",
      });
    }

    // ================= CHECK USER =================
    const existingUser = await User.find({ email });

    if (existingUser.length > 0) {
      return res.status(409).json({
        error: `${email} already in use`,
      });
    }

    // ================= OTP =================
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    console.log("Generated OTP:", otp);

    // ================= HASH PASSWORD =================
    const hash = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hash,
      otp,
      isVerified: false,
    });

    await user.save();

    // ================= TOKEN =================
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
    { expiresIn: "24h" }
    );
    // const frontend = `${process.env.FRONTEND_URL}/emailverification?token=${encodeURIComponent(token)}`;
    const frontend = `${process.env.FRONTEND_URL}/emailverification?token=${encodeURIComponent(token)}`

    console.log("Sending verification mail...");
    console.log("To:", email);
    console.log("Link:", frontend);



    // ================= NODEMAILER =================
//     const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: Number(process.env.MAIL_PORT),
//   secure: false, 
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });


    // await transporter.sendMail({
    //   from: `"MERNIAN" <${process.env.MAIL_FROM}>`,
    //   to: email,
    //   subject: "Verify Your Email - MERNIAN",
    //   html: `
    //     <div style="font-family: Arial;">
    //       <h2>Welcome to MERNIAN</h2>
    //       <p>Hi ${name},</p>
    //       <p>Please verify your account:</p>
    //       <a href="${frontend}" 
    //          style="padding:10px 15px;background:#4CAF50;color:white;text-decoration:none;">
    //          Verify Email
    //       </a>
    //       <p>${frontend}</p>
    //     </div>
    //   `,
    // });
    
    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()

    sendSmtpEmail.subject = 'Verify Your Email - MERNIAN'
sendSmtpEmail.htmlContent = `
    <div style="font-family: Arial;">
        <h2>Welcome to MERNIAN</h2>
        <p>Hi ${name},</p>
        <p>Please verify your account:</p>
        <a href="${frontend}" style="padding:10px 15px;background:#4CAF50;color:white;text-decoration:none;">
            Verify Email
        </a>
        <p>${frontend}</p>
    </div>
`
sendSmtpEmail.sender = { email: process.env.MAIL_FROM, name: 'MERNIAN' }
sendSmtpEmail.to = [{ email: email, name: name }]

await apiInstance.sendTransacEmail(sendSmtpEmail)
    
    // await emailApi.sendTransacEmail({
    //   sender: { email: process.env.MAIL_FROM, name: 'MERNIAN' },
    //   to: [{ email: email, name: name }],
    //   subject: 'Verify Your Email - MERNIAN',
    //   htmlContent: `
    //     <div style="font-family: Arial;">
    //       <h2>Welcome to MERNIAN</h2>
    //       <p>Hi ${name},</p>
    //       <p>Please verify your account:</p>
    //       <a href="${frontend}" 
    //          style="padding:10px 15px;background:#4CAF50;color:white;text-decoration:none;">
    //          Verify Email
    //       </a>
    //       <p>${frontend}</p>
    //     </div>
    //   `
    // });

    console.log("✅ Email sent successfully");

    return res.status(200).json({
      success: true,
      message: "Registration successful. check your email to verify.",
    });

  } catch (err) {
    console.error("Registration error:", err);

    return res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
};

module.exports = registrationController;