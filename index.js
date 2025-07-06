const express = require("express");
require("dotenv").config()
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000


app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    
    console.log(req.body)
    return
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact Message: ${subject}`,
        html: `
      <h3>New Message from Portfolio Contact Form</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Message sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Failed to send message.");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
