const functions = require('firebase-functions');
const nodemailer = require('nodemailer')
const cors = require('cors')({origin: true})

exports.sendBookingEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const { name, email, phoneNumber, projectDesc } = req.body.bookingData
    const model = req.body.model

    if (name.length < 1 || email.length < 1 || phoneNumber.length < 1 || projectDesc.length < 1) {
      return res.status(400).send({ error: 'Something is wrong' })
    }

    const template = `
<html>
  <head>
    <style>
      .email-template {
        color: #2c3e50;
        text-align: center;
      }

      h3 span {
        color: #830000;
      }

      table {
        border-collapse: collapse;
        margin: auto;
      }

      table tr td {
        border: 1px solid #dddddd;
        padding: 8px 16px;
        text-align: left;
      }

      table tr td.first {
        background: #2c3e50;
        color: #ffffff;
      }

      table tr td.second a {
        color: #2c3e50;
        text-decoration: underline;
      }

      .email-footer {
        margin-top: 3em;
      }
    </style>
  </head>
  <body>
    <div class="email-template">
      <h3>Hey Admin. There's a booking for this model: <span>${model.name}</span></h3>
      <p>Here's the detail:</p>
      <table>
        <tr>
          <td class="first">Name</td>
          <td class="second">${name}</td>
        </tr>
        <tr>
          <td class="first">Email</td>
          <td class="second"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td class="first">Phone Number</td>
          <td class="second"><a href="tel:${phoneNumber}">${phoneNumber}</a></td>
        </tr>
        <tr>
          <td class="first">Project Description</td>
          <td class="second">${projectDesc}</td>
        </tr>
      </table>
      <div class="email-footer">
        <p>So excited! Let's keep spirit!</p>
        <p>Love,<br>Prince of Darkness</p>
      </div>
    </div>
  </body>
</html>
    `

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: functions.config().email.delivery.user,
        pass: functions.config().email.delivery.pass
      }
    })

    const mailOptions = {
      from: functions.config().email.delivery.user,
      to: functions.config().email.destination,
      subject: `[Godel] Model Booking - ${model.name}`,
      html: template
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) return res.send(err)

      return res.send(info)
    })
  })
})
