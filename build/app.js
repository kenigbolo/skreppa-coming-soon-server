'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./mailer/controllers/index');

var _index2 = _interopRequireDefault(_index);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var app = (0, _express2.default)();

app.use(_express2.default.json());

app.post('/', function (req, res) {
  _index2.default.createEmailEntry(req, res);
});

app.get('/', function (_, res) {
  res.status(200).send('Server up and running');
});

console.log('Server is running');
app.listen(process.env.PORT || 8080);