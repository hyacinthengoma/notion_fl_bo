require('dotenv').config()
const PASSWORD = process.env.password
export default function(req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'alexandre.petit33440@gmail.com',
            pass: `${PASSWORD}`
        },
        secure: true
    })
    const mailData = {
        from: `${req.body.Email}`,
        to: 'alexandre.petit33440@gmail.com',
        subject: `${req.body.SelectTypeService}`,
        text: req.body.Message,
        html: `<div>${req.body.Message}</div>`
    }

    transporter.sendMail(mailData, function(err, info){
        if(err)
            console.log(err)
        else
            console.log(info)
    })
}
