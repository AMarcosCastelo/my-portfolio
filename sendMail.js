const express = require('express');
const nodemailer = require('nodemailer');
require("dotenv").config();

const app = express();
const port = 3000;
const auth = {user: "marcos-12marcos@hotmail.com", pass: "Nyk1kd8%@9qt"};

app.get('/', (req, res) => res.send('Hello World'));

app.get('/send', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "SMTP.office365.com",
    port: 587,
    auth
  });

  transporter.sendMail({
    from: auth.user,
    to: auth.user,
    replyTo: "marcos-12marcos@hotmail.com",
    subject: "Olá teste",
    text: "Olá, teste teste"
  }).then((info) => {
    console.log('foi');
    res.send(info);
  }).catch((error) => {
    console.log('error');
    res.send(error);
  });
});

app.listen(port, () => console.log('Running 3000'));
