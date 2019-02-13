const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const server = () => {
  console.log('Starting Server!');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/room/setstatus', (req, res) => {
    res.send(`Hello ${req.body.name}!`);
  });

  app.get('/room', (req, res) => res.send('Running Server!'));
  app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Listening on ${process.env.HOST}:${process.env.PORT}`);
  });
};

server();
