require('dotenv').config();
const port = Number(process.env.SMTP_PORT);
const secure = process.env.SMTP_SECURE === 'true';

module.exports = {
  host: process.env.SMTP_HOST,
  port,
  secure,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};