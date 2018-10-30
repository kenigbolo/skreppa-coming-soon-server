'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createEmailEntry = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var email, date, text, values, _ref2, rows;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = req.body.email;

            if (email) {
              _context.next = 3;
              break;
            }

            return _context.abrupt('return', res.status(400).json({ error: 'Email missing' }));

          case 3:
            date = (0, _moment2.default)(new Date());
            text = 'INSERT INTO\n    emails(id, email, created_at, updated_at)\n    VALUES($1, $2, $3, $4)\n    returning *';
            values = [(0, _v2.default)(), email, date, date];
            _context.prev = 6;
            _context.next = 9;
            return _db2.default.query(text, values);

          case 9:
            _ref2 = _context.sent;
            rows = _ref2.rows;
            return _context.abrupt('return', res.status(201).json({ success: 'Email saved successfully', data: rows[0] }));

          case 14:
            _context.prev = 14;
            _context.t0 = _context['catch'](6);

            console.log(_context.t0);
            return _context.abrupt('return', res.status(400).json({ error: _context.t0 }));

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[6, 14]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();