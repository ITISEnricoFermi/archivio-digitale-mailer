const nodemailer = require('nodemailer')

const { USER, PASSWORD, SERVER, PORT, SECURE, FROM } = process.env

const transporter = nodemailer.createTransport({
  pool: true,
  host: SERVER,
  port: PORT || 587,
  //secure: Boolean(SECURE) || false,
  secure: false,
  auth: {
    user: USER,
    pass: PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
})

module.exports = (to, subject, message) => transporter.sendMail({
  from: `Archivio Digitale <${FROM}>`,
  to,
  subject,
  html: message
})
