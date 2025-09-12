// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // user: process.env.GOOGLE_MAIL,
    // pass: process.env.GOOGLE_APP_PASSWORD,
    user: "test.vishnu@gmail.com",
    // pass: "rlcrjetgvsswuoca"
    pass: "Vishnu@123"
  },
});