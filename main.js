require('dotenv').config();
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

const data = {
  from: 'Jane Doe <Jane@domain.com>',
  to: ['john@domain.com', 'example@domain.com'],
  subject: 'Onderwerp',

  // Optie 1: gebruik een template en een variabele
  //template: '01',
  //'h:X-Mailgun-Variables': JSON.stringify({ name: 'Dit is een variable' }),

  // Optie 2: gebruik gewone tekst
  //text: 'Dit is een test',

  // Optie 3: gebruik HTML
  //html: '<h1>Dit is een test</h1>',
};

const send = async (data) => {
  const mg = mailgun.client({
    username: process.env.API_USERNAME,
    key: process.env.API_KEY,
  });
  const msg = await mg.messages.create(process.env.DOMAIN_MAILGUN, data);
  console.log(msg);
  return msg;
};

send(data);
