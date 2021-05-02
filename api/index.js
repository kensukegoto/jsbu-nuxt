const express = require('express');
const app = express();

app.use('/data',express.static(__dirname + "/data"))

module.exports = {
  path: '/api',
  handler: app
}