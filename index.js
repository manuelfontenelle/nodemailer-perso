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

app.post("/form-estimate", async (req, res, next) => {
	const { prenom, nom, phone, email, adresse, startDate, message } = req.fields

	// console.log(req.fields)
	// console.log(req.files)

	if ((phone && message) || (email && message)) {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true, // true for 465, false for other ports
			auth: {
				user: "mflabz75",
				pass: process.env.EMAIL_PASS,
			},
		})

		let info = await transporter.sendMail({
			from: `Contact MF <${email}>`, // sender address
			to: "manuel.fontenelle@gmail.com", // list of receivers
			replyTo: `${email}`,
			subject: "Contact", // Subject line
			text: "test", // plain text body
			html: `Prénom :${prenom}<br/><br/> Nom :${nom}<br/><br/> Phone :${phone}<br/><br/> Adresse : ${adresse}<br/><br/> Message : ${message}<br/><br/> E-mail : ${email}<br/><br/> StartDate : ${startDate}<br/><br/>`, // html body
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
////////////////////////////////////////////////////
app.post("/form-estimate_attachment", async (req, res, next) => {
	const { prenom, nom, phone, email, adresse, startDate, message } = req.fields

	// console.log(req.fields)
	// console.log(req.files)

	if ((phone && message) || (email && message)) {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true, // true for 465, false for other ports
			auth: {
				user: "mflabz75",
				pass: process.env.EMAIL_PASS,
			},
		})

		let info = await transporter.sendMail({
			from: `Contact MF <${email}>`, // sender address
			to: "manuel.fontenelle@gmail.com", // list of receivers
			replyTo: `${email}`,
			subject: "Contact", // Subject line
			text: "test", // plain text body
			html: `Prénom :${prenom}<br/><br/> Nom :${nom}<br/><br/> Phone :${phone}<br/><br/> Adresse : ${adresse}<br/><br/> Message : ${message}<br/><br/> E-mail : ${email}<br/><br/> StartDate : ${startDate}<br/><br/>`, // html body
			attachments: [
				{
					filename: req.files.selectedFile.name,
					path: req.files.selectedFile.path,
				},
			],
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
////////////////////////////////////////////////////
app.post("/form-career", async (req, res, next) => {
	const { prenom, nom, phone, email, message } = req.fields

	// console.log(req.fields)
	// console.log(req.files)

	if ((phone && message) || (email && message)) {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true, // true for 465, false for other ports
			auth: {
				user: "mflabz75",
				pass: process.env.EMAIL_PASS,
			},
		})

		let info = await transporter.sendMail({
			from: `Contact MF <${email}>`, // sender address
			to: "manuel.fontenelle@gmail.com", // list of receivers
			replyTo: `${email}`,
			subject: "Contact", // Subject line
			text: "test", // plain text body
			html: `Prénom :${prenom}<br/><br/> Nom :${nom}<br/><br/> Phone :${phone}<br/><br/> Message : ${message}<br/><br/> E-mail : ${email}`, // html body
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
////////////////////////////////////////////////////
app.post("/form-career_attachment", async (req, res, next) => {
	const { prenom, nom, phone, email, message } = req.fields

	// console.log(req.fields)
	// console.log(req.files)

	if ((phone && message) || (email && message)) {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true, // true for 465, false for other ports
			auth: {
				user: "mflabz75",
				pass: process.env.EMAIL_PASS,
			},
		})

		let info = await transporter.sendMail({
			from: `Contact MF <${email}>`, // sender address
			to: "manuel.fontenelle@gmail.com", // list of receivers
			replyTo: `${email}`,
			subject: "Contact", // Subject line
			text: "test", // plain text body
			html: `Prénom :${prenom}<br/><br/> Nom :${nom}<br/><br/> Phone :${phone}<br/><br/> Message : ${message}<br/><br/> E-mail : ${email}`, // html body
			attachments: [
				{
					filename: req.files.selectedFile.name,
					path: req.files.selectedFile.path,
				},
			],
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
////////////////////////////////////////////////////
app.all("*", (req, res) => {
	res.json({ message: "All routes" })
})

app.listen(process.env.PORT || 3000, () => {
	console.log("Server has just started")
})
