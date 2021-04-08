"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPassword = exports.forgotPassword = void 0;

var _apiConfig = _interopRequireDefault(require("./api-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var forgotPassword = function forgotPassword(userEmail) {
  var resp;
  return regeneratorRuntime.async(function forgotPassword$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_apiConfig["default"].post('password/forgot', {
            email: userEmail
          }));

        case 3:
          resp = _context.sent;
          return _context.abrupt("return", resp.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.forgotPassword = forgotPassword;

var resetPassword = function resetPassword(resetInfo) {
  var resp;
  return regeneratorRuntime.async(function resetPassword$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_apiConfig["default"].post('password/reset', {
            data: resetInfo
          }));

        case 3:
          resp = _context2.sent;
          return _context2.abrupt("return", resp.data);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          throw _context2.t0;

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.resetPassword = resetPassword;