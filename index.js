require("dotenv").config()

const express = require("express")
const formidable = require("express-formidable")
const cors = require("cors")
const nodemailer = require("nodemailer")
const app = express()
app.use(formidable())
app.use(cors())
// app.use(
// 	bodyParser.urlencoded({
// 		extended: true,
// 	})
// )
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// const multer = require("multer")
// const storage = multer.memoryStorage()
// // const upload = multer({ storage: storage })
// const upload = multer({
// 	dest: "./uploads/",
// })
// const fs = require("fs")

// const upload = multer({
// 	storage: multer.memoryStorage(),
// })
// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })

// const middleware = [formidable(), cors(), upload.single("myfile")]

app.get("/", (req, res) => {
	res.send("Server is up!")
})

app.post("/form", async (req, res, next) => {
	const { prenom, nom, phone, email, message } = req.fields

	// const { images } = req.files
	// console.log(myfile)
	console.log(req.fields)
	console.log(req.files)
	// console.log(req.files.myfile.name)

	// console.log("testtttt : ", images)
	// console.log(req.file, req.body)
	if (email && message) {
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

app.all("*", (req, res) => {
	res.json({ message: "All routes" })
})

app.listen(process.env.PORT || 3000, () => {
	console.log("Server has just started")
})
