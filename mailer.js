require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
})

const mailOptions = {
    from: process.env.EMAIL,
    to: props.email,
    subject: 'Письмо отправленное через nodeJs',
    text: props.text,
}

transporter.sendMail(mailOptions, err => { console.log(err) })