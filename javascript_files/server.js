const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'assets' directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Setup nodemailer transporter (replace with your email service details)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'saencrystal@gmail.com',
    pass: '##EtimGeorge08065550603##'
  }
});

app.post('/enroll', (req, res) => {
  const { name, email, phone, program } = req.body;

  // Save enrollment data to database (not implemented in this example)

  // Send acknowledgment email
  const mailOptions = {
    from: 'saencrystal@gmail.com',
    to: email,
    subject: 'Enrollment Confirmation',
    html: `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .header { background-color: #f0f0f0; padding: 20px; text-align: center; }
            .content { padding: 20px; }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="cid:companyLogo" alt="Company Logo" style="max-width: 200px;">
            <h1>Saencrystal Global Services</h1>
          </div>
          <div class="content">
            <h2>Dear ${name},</h2>
            <p>Thank you for enrolling in our ${program} program. We are excited to have you on board!</p>
            <p>We will contact you shortly with further details about the program.</p>
            <p>Best regards,<br>The Saencrystal Global Services Team</p>
          </div>
        </body>
      </html>
    `,
    attachments: [{
      filename: 'SAENCRYSTAL_GLOBAL__1_-removebg-preview.png',
      path: path.join(__dirname, 'assets', 'images', 'SAENCRYSTAL_GLOBAL__1_-removebg-preview.png'),
      cid: 'companyLogo'
    }]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json({ success: false });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ success: true });
    }
  });
});

// Serve your training.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'training.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));