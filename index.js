const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const server = () => {
  console.log('Starting Server!');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/room/setstatus', async (req, res) => {
    let response = {
      statusCode: 200,
      body: JSON.stringify(req.body.message)
    };
    let slackMessage = {
      text: req.body.message
    };
    await axios
      .post(process.env.SLACK_HOOK_URL, JSON.stringify(slackMessage))
      .then(res => {
        console.log('Sent with status 200', res.data);
      })
      .catch(err => {
        console.log('Error:', err);
      });
    res.send(response);
  });

  app.get('/room', (req, res) => res.send('Running Server!'));
  app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Listening on ${process.env.HOST}:${process.env.PORT}`);
  });
};

server();
