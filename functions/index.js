const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

const SMTP_USER = process.env.SMTP_USER || "info@wegoholidayhomes.com";
const SMTP_PASS = process.env.SMTP_PASS || "wegoholiday123homes";
const SMTP_HOST = process.env.SMTP_HOST || "smtp.privateemail.com";

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

exports.sendInquiry = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send({error: "Only POST requests allowed"});
    }

    const {name, userPhone, email, location, message} = req.body;

    // Email to your team with all form details
    const teamMailOptions = {
      from: `"Wego Holiday Homes" <${SMTP_USER}>`,
      to: "info@wegoholidayhomes.com",
      subject: `New Property Inquiry from ${name}`,
      html: `
        <h3>New Inquiry Submitted</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${userPhone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Property Location:</strong> ${location}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Confirmation email to the user without showing form details
    const userMailOptions = {
      from: `"Wego Holiday Homes" <${SMTP_USER}>`,
      to: email,
      subject: `Thank you for your inquiry, ${name}!`,
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for submitting your property inquiry. 
        Our team has received your message and will get back to you shortly.</p>
        <p>Best regards,<br/>Wego Holiday Homes</p>
      `,
    };

    try {
      // Send email to team
      await transporter.sendMail(teamMailOptions);

      // Send confirmation email to user
      await transporter.sendMail(userMailOptions);

      res.status(200).send({success: true});
    } catch (error) {
      console.error("Error sending emails:", error);
      res.status(500).send({error: error.message});
    }
  });
});
