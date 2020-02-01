const express = require('express');

const app = express();

const path = require('path');

const bodyParser = require('body-parser'); /*  middleware that handle post from front end */

const Mongo = require('../db/index');

app.use(bodyParser.json()); // conveart to json file
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/allData', (request, response) => {
  Mongo.allData((err, result) => {
    if (err) {
      response.send(err);
    } else {
      response.send(result);
    }
  });
});

const service = app.listen(8081, () => {
  const host = service.address().address;

  const port = service.address().port.toString();

  console.log('service port is http://127.0.0.1', port);

  // http://127.0.0.1:8081 /
});

// let server;
// const start = () => (server = app.listen(8081, () => {}));
// const close = server ? server.close : () => {};
