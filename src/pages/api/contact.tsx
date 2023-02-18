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
        html: `<div>
                Nom : ${req.body.Nom}<br/>
                Prenom : ${req.body.Prenom}<br/>
                Téléphone : ${req.body.Telephone}<br/>
                Code Postal : ${req.body.CP}<br/>
                Email : ${req.body.Email}<br/>
                Objet : ${req.body.SelectTypeService}<br/>
                ${req.body.Message}<br/>
               </div>`
    }

    transporter.sendMail(mailData, function(err, info){
        if(err)
            res.status(500).json({ message: 'Internal server error' })
        else
            res.status(200).json({ message: 'Email sent successfully' });
    })
}
