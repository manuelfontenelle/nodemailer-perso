require("dotenv").config()
const express = require("express")
const formidable = require("express-formidable")
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express()
app.use(formidable())
app.use(cors())

app.get("/", (req, res) => {
	res.send("Server is up!")
})

app.post("/form", async (req, res) => {
	const { email, message } = req.fields

	if (email && message) {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true, // true for 465, false for other ports
			auth: {
				user: "mflabz75",
				pass: process.env.GMAIL_PASS,
			},
		})

		let info = await transporter.sendMail({
			from: `Contact MFlabz <${email}>`, // sender address
			to: "manuel.fontenelle@gmail.com", // list of receivers
			subject: "Contact", // Subject line
			text: "test", // plain text body
			html: `Message : ${message}<br/><br/> E-mail : ${email}`, // html body
		})

		if (info) {
			res.send("message sent sucess..")
		} else {
			res.send("err in send mail.")
		}

		console.log("Message sent: %s", info.messageId)
		// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

		// Preview only available when sending through an Ethereal account
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
		// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
	} else {
		res.status(400).json({ error: "Missing parameters" })
	}
})

app.all("*", (req, res) => {
	res.json({ message: "All routes" })
})

app.listen(process.env.PORT || 3000, () => {
	console.log("Server has just started")
})
